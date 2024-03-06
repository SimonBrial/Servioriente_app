import { EventsArray } from "@/interface/interface";

export const weekDays: string[] = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

export const months: string[] = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const MOCKEVENTS: EventsArray[] = [
  { date: new Date(2024, 2, 20), title: "Prueba", degree: "Importante" },
  { date: new Date(2024, 2, 18), title: "Prueba 2", degree: "Importante" },
  { date: new Date(2024, 2, 16), title: "Prueba 3", degree: "Importante" },
  { date: new Date(2024, 2, 16), title: "Prueba 3.1", degree: "Importante" },
  { date: new Date(2024, 2, 16), title: "Prueba 3.2", degree: "Importante" },
  { date: new Date(2024, 2, 14), title: "Prueba 4", degree: "Importante" },
  { date: new Date(2024, 2, 14), title: "Prueba 4.2", degree: "Muy Importante" },
  { date: new Date(2024, 2, 14), title: "Prueba 4.2", degree: "Normal" },
  { date: new Date(2024, 2, 14), title: "Prueba 4.2", degree: "Normal" },
];
