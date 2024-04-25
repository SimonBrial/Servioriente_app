import {
  ChartSocialMedia,
  DashboardProcessListItems,
  DonutChartDataProps,
  ProcessedConversationItemProps,
  SocialMedia,
  SocialMediaData,
  TaskDayCardProps,
  TaskListPerDaysProps,
} from "@/interface/interface";
import dayjs from "dayjs";

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

export const tmrArray: SocialMediaData[] = [
  /* {
    _id: "65cbdb5109207dbccc93d9f4",
    date: "",
    Instagram: null,
    Facebook: null,
    Whatsapp: null,
  }, */
  {
    _id: "65cbdb5115b2deab96a6aaf1",
    date: "Enero",
    Instagram: 3.2,
    Facebook: 1.0,
    Whatsapp: 3.6,
  },
  {
    _id: "65cbdb517fc6c22571d77c2c",
    date: "Febrero",
    Instagram: 4.5,
    Facebook: 4.3,
    Whatsapp: 4.9,
  },
  {
    _id: "65cbdb51e7287777055c9df0",
    date: "Marzo",
    Instagram: 3.2,
    Facebook: 2.9,
    Whatsapp: 3.5,
  },
  {
    _id: "65cbdb5106400074e65fb71e",
    date: "Abril",
    Instagram: 3.4,
    Facebook: 2.5,
    Whatsapp: 3.0,
  },
  {
    _id: "65cbdb51c64573fb96a39165",
    date: "Mayo",
    Instagram: 4,
    Facebook: 4.3,
    Whatsapp: 4.0,
  },
  {
    _id: "65cbdb51167c08f77da7a013",
    date: "Junio",
    Instagram: 4.5,
    Facebook: 1.6,
    Whatsapp: 2.7,
  },
  {
    _id: "65cbdb51692a122497dfb7e0",
    date: "Julio",
    Instagram: 4.0,
    Facebook: 2.5,
    Whatsapp: 2.2,
  },
  {
    _id: "65cbdb51aba3bade01a787c3",
    date: "Agosto",
    Instagram: 3.4,
    Facebook: 3.3,
    Whatsapp: 3.1,
  },
  {
    _id: "65cbdb515fd26b4997b75c02",
    date: "Septiembre",
    Instagram: 4.7,
    Facebook: 3.5,
    Whatsapp: 4.6,
  },
  {
    _id: "65cbdb5109207dbccc93d9f4",
    date: "Octubre",
    Instagram: 3.2,
    Facebook: 2.2,
    Whatsapp: 3.5,
  },
  {
    _id: "65cbdb5128674e18d8057587",
    date: "Noviembre",
    Instagram: 3.8,
    Facebook: 1.5,
    Whatsapp: 3.2,
  },
  {
    _id: "65cbdb5109207dbccc93d9f4",
    date: "Diciembre",
    Instagram: 3.9,
    Facebook: 2.2,
    Whatsapp: 3.5,
  },
  /* {
    _id: "65cbdb5109207dbccc93d9f4",
    date: "",
    Instagram: null,
    Facebook: null,
    Whatsapp: null,
  }, */
];

export const chartSocialMediaData: ChartSocialMedia[] = [
  {
    id: "1",
    date: "Enero",
    Instagram: "4.5",
    Facebook: "4.2",
    Whatsapp: "4.6",
  },
  {
    id: "2",
    date: "Febrero",
    Instagram: "4.2",
    Facebook: "4.4",
    Whatsapp: "4.3",
  },
  {
    id: "3",
    date: "Marzo",
    Instagram: "4.8",
    Facebook: "4.6",
    Whatsapp: "4.7",
  },
  {
    id: "4",
    date: "Abril",
    Instagram: "4.1",
    Facebook: "4.3",
    Whatsapp: "4.0",
  },
  {
    id: "5",
    date: "Mayo",
    Instagram: "4.6",
    Facebook: "4.5",
    Whatsapp: "4.4",
  },
  {
    id: "6",
    date: "Junio",
    Instagram: "4.3",
    Facebook: "4.1",
    Whatsapp: "4.2",
  },
  {
    id: "7",
    date: "Julio",
    Instagram: "4.4",
    Facebook: "4.7",
    Whatsapp: "4.5",
  },
  {
    id: "8",
    date: "Agosto",
    Instagram: "4.7",
    Facebook: "4.8",
    Whatsapp: "4.9",
  },
  {
    id: "9",
    date: "Septiembre",
    Instagram: "4.5",
    Facebook: "4.2",
    Whatsapp: "4.6",
  },
  {
    id: "10",
    date: "Octubre",
    Instagram: "4.2",
    Facebook: "4.4",
    Whatsapp: "4.3",
  },
  {
    id: "11",
    date: "Noviembre",
    Instagram: "4.8",
    Facebook: "3.2",
    Whatsapp: "4.2",
  },
  {
    id: "12",
    date: "Diciembre",
    Instagram: "3.6",
    Facebook: "4.0",
    Whatsapp: "4.0",
  },
];

export const tmrPerHour: SocialMediaData[] = [
  /* {
    _id: "65cbdb5109207dbccc93d9f4",
    date: "",
    Instagram: null,
    Facebook: null,
    Whatsapp: null,
  }, */
  {
    _id: "65cbdb5115b2deab96a6aaf1",
    date: "07:00AM",
    Instagram: 3.2,
    Facebook: 1.0,
    Whatsapp: 3.6,
  },
  {
    _id: "65cbdb517fc6c22571d77c2c",
    date: "08:00AM",
    Instagram: 4.5,
    Facebook: 4.3,
    Whatsapp: 4.9,
  },
  {
    _id: "65cbdb51e7287777055c9df0",
    date: "09:00AM",
    Instagram: 3.2,
    Facebook: 2.9,
    Whatsapp: 3.5,
  },
  {
    _id: "65cbdb5106400074e65fb71e",
    date: "10:00AM",
    Instagram: 3.4,
    Facebook: 2.5,
    Whatsapp: 3.0,
  },
  {
    _id: "65cbdb51c64573fb96a39165",
    date: "11:00AM",
    Instagram: 4,
    Facebook: 4.3,
    Whatsapp: 4.0,
  },
  {
    _id: "65cbdb51167c08f77da7a013",
    date: "12:00PM",
    Instagram: 4.5,
    Facebook: 1.6,
    Whatsapp: 2.7,
  },
  {
    _id: "65cbdb51692a122497dfb7e0",
    date: "01:00PM",
    Instagram: 4.0,
    Facebook: 2.5,
    Whatsapp: 2.2,
  },
  {
    _id: "65cbdb51aba3bade01a787c3",
    date: "02:00PM",
    Instagram: 3.4,
    Facebook: 3.3,
    Whatsapp: 3.1,
  },
  {
    _id: "65cbdb515fd26b4997b75c02",
    date: "03:00PM",
    Instagram: 4.7,
    Facebook: 3.5,
    Whatsapp: 4.6,
  },
  {
    _id: "65cbdb5109207dbccc93d9f4",
    date: "04:00PM",
    Instagram: 3.2,
    Facebook: 2.2,
    Whatsapp: 3.5,
  },
  {
    _id: "65cbdb5128674e18d8057587",
    date: "05:00PM",
    Instagram: 3.8,
    Facebook: 1.5,
    Whatsapp: 3.2,
  },
  {
    _id: "65cbdb5109207dbccc93d9f4",
    date: "06:00PM",
    Instagram: 3.9,
    Facebook: 2.2,
    Whatsapp: 3.5,
  },
  /* {
    _id: "65cbdb5109207dbccc93d9f4",
    date: "",
    Instagram: null,
    Facebook: null,
    Whatsapp: null,
  }, */
];

export const SocialMediaRed: SocialMedia[] = [
  { title: "instagram", rating: 4.2, id: crypto.randomUUID() },
  { title: "facebook", rating: 2.5, id: crypto.randomUUID() },
  { title: "whatsapp", rating: 3.8, id: crypto.randomUUID() },
];

export const mediaSocialArray: ProcessedConversationItemProps[] = [
  {
    id: crypto.randomUUID(),
    iconName: "instagram",
    totalConversations: 5,
  },
  {
    id: crypto.randomUUID(),
    iconName: "facebook",
    totalConversations: 8,
  },
  {
    id: crypto.randomUUID(),
    iconName: "whatsapp",
    totalConversations: 3,
  },
];

export const DonutChartData: DonutChartDataProps[] = [
  {
    name: "Generacion de RCV",
    currentValue: 80,
    goal: 100,
  },
  {
    name: "Clientes captados",
    currentValue: 30,
    goal: 50,
  },
  {
    name: "Total",
    currentValue: 120,
    goal: 150,
  },
];

const taskTodayFake: TaskDayCardProps[] = [
  {
    idTask: crypto.randomUUID(),
    admin: false,
    degree: "Muy Importante",
    description: "Prueba",
    title: "Prueba Prueba Prueba Prueba Prueba",
    userToassign: "Mario Hurtado",
  },
  {
    idTask: crypto.randomUUID(),
    admin: false,
    degree: "Importante",
    description: "Prueba",
    title: "Prueba 1 Prueba 1 Prueba 1 Prueba 1 Prueba 1",
    userToassign: "Mario Hurtado",
  },
  {
    idTask: crypto.randomUUID(),
    admin: true,
    degree: "Normal",
    description: "Prueba",
    title: "Prueba 2 Prueba 2 Prueba 2 Prueba 2 Prueba 2",
    userToassign: "Mario Hurtado",
  },
  {
    idTask: crypto.randomUUID(),
    admin: false,
    degree: "Normal",
    description: "Prueba",
    title: "Prueba 3 Prueba 3 Prueba 3 Prueba 3 Prueba 3",
    userToassign: "Mario Hurtado",
  },
  {
    idTask: crypto.randomUUID(),
    admin: true,
    degree: "Poco Importante",
    description: "Prueba",
    title: "Prueba 4 Prueba 4 Prueba 4 Prueba 4 Prueba 4",
    userToassign: "Mario Hurtado",
  },
];

export const TaskListData: TaskListPerDaysProps[] = [
  {
    id: crypto.randomUUID(),
    dateTitle: dayjs().format("DD MM YYYY"),
    taskToday: taskTodayFake.slice(0, 2),
  },
  {
    id: crypto.randomUUID(),
    dateTitle: dayjs().format("DD MM YYYY"),
    taskToday: taskTodayFake.slice(0, 3),
  },
  {
    id: crypto.randomUUID(),
    dateTitle: dayjs().format("DD MM YYYY"),
    taskToday: taskTodayFake.slice(0, 5),
  },
];
