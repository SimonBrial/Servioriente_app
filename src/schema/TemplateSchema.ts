import z from "zod";

export const templateSchema = z.object({
  title: z
    .string({ message: "El titulo es requerido" })
    .min(3, { message: "Debe tener como minimo 3 caracteres" })
    .max(20, { message: "Debe tener como maximo 20 caracteres" }),
  shortDescription: z
    .string({ message: "La descripción es requerida" })
    .min(3, { message: "La descripción debe tener minimo 10 caracteres" })
    .max(100, {
      message: "Solo se pueden introducir un maximo de 100 caracteres",
    }),
  bodyDescription: z
    .string({ message: "El cuerpo no puede estar vacio" })
    /* .regex(/^<p><\/p>$/, {
      message: "El cuerpo de la funcion no puede estar vacio",
    }), */
});
