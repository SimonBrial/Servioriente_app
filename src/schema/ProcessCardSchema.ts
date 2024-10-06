import z from "zod";

const processStatus = [
  "Entregado",
  "Espera",
  "Generacion",
  "Pagado",
  "Rechazado",
] as const;

export const processCardSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "Nombre del usuario requerido" })
    .max(20),
  lastName: z
    .string()
    .min(1, { message: "Apellido del usuario requerido" })
    .max(20),
  vehicle: z
    .string()
    .min(1, { message: "Vehiculo del usuario requerido" })
    .max(20),
  state: z
    .string()
    .min(1, { message: "Estado donde este ubicado el usuario es requerido" })
    .max(20),
  typeStatus: z.enum(processStatus, {
    errorMap: () => ({
      message: "Por favor seleccion un estado.",
    }),
  }),
  mail: z.string().email({
    message: "El correo introducido no es valido, por favor corregirlo",
  }),
  carID: z.string().regex(/^(?=.*[a-zA-Z])(?=.*\d).*$/, {
    message:
      "La placa no coincide con el codigo de una placa tradicional de Venezuela, corregirlo por favor",
  }),
  // birthday: z.string().nullable(),
  phonePre: z
    .string()
    .length(4, { message: "El codigo de telefono es requerido" }),
  phonePost: z
    .string()
    .max(7, { message: "El numero debe contener no mas de 7 digitos" })
    .refine((phone) => !isNaN(parseInt(phone, 10)), {
      message: "Deben ser valores numericos de 7 digitos",
    }),
  /* .regex(/^d{ 1, 7}$/, {
      message: "Los datos en el campo deben ser de 7 digitos: '###-##.##'",
    }) */
  facebook: z.string().nullable(),
  instagram: z.string().nullable(),
  // columnId: z.enum(processStatus, { message: "El estado es requerido." }),
  tag: z.number({
    message:
      "El tag es el costo de la RCV, es requerido El valor de la tarifa debe ser mayor a 0.",
  }),
  /* .refine((value) => {
      if (typeof value && value === 0) {
        throw new z.ZodError([
          {
            path: ["tag"],
            message: "El valor de la tarifa debe ser mayor a 0",
            code: "custom",
          },
        ]);
      }
    }) */
});

/* if (value === 0) {
    throw new z.ZodError([
      {
        path: ["confirmPassword"],
        message: "Las contrañas no pueden estar vacias",
        code: "custom",
      },
    ]);
  } */
