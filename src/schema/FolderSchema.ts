import z from "zod";

export const folderSchema = z.object({
  title: z
    .string({ message: "El titulo es requerido" })
    .min(3, { message: "Debe tener como minimo 3 caracteres" })
    .max(20, { message: "Debe tener como maximo 20 caracteres" }),
  icon: z.string().nullable(),
  color: z
    .string()
    .regex(/^#[0-9a-fA-F]{6}$/, {
      message: "Seleccione el color que tendra la carpeta.",
    }),
  description: z
    .string({ message: "La descripción es requerida" })
    .min(3, { message: "La descripcion debe tener minimo 3 caracteres" })
    .max(500, {
      message: "Solo se pueden introducir un maximo de 500 caracteres",
    }),
});
