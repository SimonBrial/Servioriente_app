import z from "zod";

export const alarmSchema = z.object({
  id: z.string().uuid({ message: "UUID invalido" }),
  title: z
    .string({ message: "El titulo es requerido" })
    .min(3, { message: "Debe tener como minimo 3 caracteres" })
    .max(20, { message: "Debe tener como maximo 20 caracteres" }),
  icon: z.string().nullable(),
  /* time: z
    .string()
    .time({ message: "Debe indicar a que hora se mostrara la alarma." }), */
  toDate: z.date({message: "Debe indicar a que hora se mostrara la alarma."}),
  /* .string()
    .time({ message: "Debe indicar a que hora se mostrara la alarma." }), */
  privateAlarm: z.boolean(),
  automatedAlarm: z.boolean(),
  folderSelected: z
    .string()
    .min(1, { message: "Indicar una carpeta donde se guardara la alarma" })
    .max(20, {
      message:
        "El nombre de la carpeta introducido, no se encuentra disponible",
    }),
  description: z
    .string({ message: "La descripción es requerida" })
    .min(3, { message: "La descripcion debe tener minimo 3 caracteres" })
    .max(500, {
      message: "Solo se pueden introducir un maximo de 500 caracteres",
    }),
});
