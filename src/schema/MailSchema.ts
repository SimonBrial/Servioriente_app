import z from "zod";

export const mailSchema = z.object({
  title: z // Subject
    .string({ message: "El titulo es requerido" })
    .min(3, { message: "Debe tener como minimo 3 caracteres" })
    .max(20, { message: "Debe tener como maximo 50 caracteres" }),
  /* mail: z // Mails array
    .string({ message: "Destinatarios requeridos" })
    .array()
    .max(10, {
      message:
        "Solo se pueden introducir un maximo de 10 direcciones de correos electronicos",
    }), */
  description: z // Body's mail
    .string({message: "No se puede enviar un correo sin cuerpo, escriba algo para poder enviarlo"}),
  photo: z // Photo
    .string()
    .optional(),
  docs: z // Documentation
    .string()
    .optional(),
});
