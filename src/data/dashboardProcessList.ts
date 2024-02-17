import { DashboardProcessListItems } from "@/interface/interface";

export const dashboardProcessList: DashboardProcessListItems[] = [
  {
    process: "espera",
    processTitle: "Esperando",
    yesterday: 3,
    today: 3,
    id: crypto.randomUUID(),
  },
  {
    process: "pagado",
    processTitle: "Pagados",
    yesterday: 3,
    today: 3,
    id: crypto.randomUUID(),
  },
  {
    process: "entregado",
    processTitle: "Entregados",
    yesterday: 3,
    today: 3,
    id: crypto.randomUUID(),
  },
  {
    process: "generacion",
    processTitle: "Generados",
    yesterday: 3,
    today: 3,
    id: crypto.randomUUID(),
  },
  {
    process: "rechazado",
    processTitle: "Rechazados",
    yesterday: 3,
    today: 3,
    id: crypto.randomUUID(),
  },
  {
    process: "Msg. Recibidos",
    processTitle: "Msg. Recibidos",

    yesterday: 3,
    today: 3,
    id: crypto.randomUUID(),
  },
  {
    process: "Msg. Enviados",
    processTitle: "Msg. Enviados",

    yesterday: 3,
    today: 3,
    id: crypto.randomUUID(),
  },
];
