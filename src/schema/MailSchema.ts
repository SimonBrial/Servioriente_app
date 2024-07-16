import z from "zod";

// Defining the email schema validation
const emailSchema = z.string().email();

// Defining the string separated by comma
const commaSeparatedEmailsSchema = z
  .string()
  .trim()
  .refine(
    (value) => {
      if (value === "") {
        throw new z.ZodError([
          {
            path: ["mail"], // Ruta de la propiedad con error
            message: "No puede estar vacio el destinatarios",
            code: "custom",
          },
        ]);
      }
      // Spliting the string by comma
      const emails = value.split(",");

      // Crea un conjunto para rastrear las partes locales únicas (antes del @)
      const uniqueLocalParts = new Set<string>();

      for (const email of emails) {
        const [localPart] = email.split("@");
        if (uniqueLocalParts.has(localPart)) {
          throw new z.ZodError([
            {
              path: ["mail"], // Ruta de la propiedad con error
              message: `Hay correos duplicados --> "${email}"`,
              code: "custom",
            },
          ]);
        }
        uniqueLocalParts.add(localPart);
      }

      // Validating the email string array
      return emails.every((email) => emailSchema.safeParse(email).success);
    },
    {
      message: `
        Si desea enviar a un solo email, recuerde cumplir con la estructura de un correo "<email>@<dominio>".
        En caso de que sean varios correos debe ser una lista de correos  separados cada uno mediante comas, sin espacio entre ellos y cumpliendo el punto anterior para correos individuales.
        `,
    },
  );
// Body schema validation
const bodySchema = z.string().refine(
  (value) => {
    const regex = /^<p><\/p>$/;
    return !regex.test(value);
  },
  { message: "El cuerpo del correo no puede estar vacio" },
);

// Docs schema validation
const fileSchema = z
  .object({
    name: z.string(),
    size: z.number(),
    type: z.string(),
    lastModified: z.number(),
    lastModifiedDate: z.date(),
    webkitRelativePath: z.string().optional(),
  })
  .array()
  .optional();

export const mailSchema = z.object({
  title: z // Subject
    .string({ message: "El titulo es requerido" })
    .min(3, { message: "Debe tener como minimo 3 caracteres" })
    .max(50, { message: "Debe tener como maximo 50 caracteres" }),
  mail: commaSeparatedEmailsSchema,
  description: bodySchema,
  photo: z // Photo
    .string()
    .optional(),
  docs: fileSchema,
});
