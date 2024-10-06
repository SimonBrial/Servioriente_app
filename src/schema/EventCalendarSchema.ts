import { degreeType } from "@/types/types";
import z from "zod";

const PriorityArray = [
  "Muy Importante",
  "Importante",
  "Normal",
  "Poco Importante",
  "Muy Poco Importante",
] as const;

export const eventCalendarSchema = z
  .object({
    title: z
      .string()
      .min(1, { message: "El evento no puede estar vacio" })
      .max(50, { message: "El evento no puede superar los 50 caracteres" }),
    description: z
      .string()
      .min(1, { message: "La descripción no puede estar vacia" })
      .max(250, { message: "El evento no pude superar los 250 caracteres" }),
    date: z
      .date({ required_error: "La fecha no puede estar vacia" })
      .min(new Date(), {
        message: "La fecha no puede ser anterior a la actual",
      }).nullable(),
    priority: z.enum(PriorityArray, {
      errorMap: () => ({
        message: "Por favor seleccion un grado de prioridad.",
      }),
    }),
  })
  .refine((data) => data.date !== null, {
    message: "La fecha no puede estar vacía",
    path: ["date"],
  });
