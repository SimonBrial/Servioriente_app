import {
  AlarmFolderArray,
  AlarmCardArray,
  AlarmObj,
} from "@/interface/interface";
import dayjs from "dayjs";

export const alarmDataArray: AlarmCardArray[] = [
  {
    id: crypto.randomUUID(),
    title: "Titulo 1",
    automated: false,
    folderAssigned: "Cumpleaños",
    privated: false,
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 2",
    automated: false,
    folderAssigned: "Cumpleaños",
    privated: false,
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 3",
    automated: false,
    folderAssigned: "Cumpleaños",
    privated: false,
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 4",
    automated: false,
    folderAssigned: "Por hacer",
    privated: false,
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 5",
    automated: false,
    folderAssigned: "Por hacer",
    privated: false,
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 6",
    automated: false,
    folderAssigned: "Por hacer",
    privated: false,
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 7",
    automated: false,
    folderAssigned: "Por hacer",
    privated: false,
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 7",
    automated: false,
    folderAssigned: "Por hacer",
    privated: false,
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 7",
    automated: false,
    folderAssigned: "Contactar",
    privated: false,
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 7",
    automated: false,
    folderAssigned: "Contactar",
    privated: false,
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 7",
    automated: false,
    folderAssigned: "Contactar",
    privated: false,
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 7",
    automated: false,
    folderAssigned: "Contactar",
    privated: false,
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 7",
    automated: false,
    folderAssigned: "Estudiar",
    privated: false,
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 7",
    automated: false,
    folderAssigned: "Estudiar",
    privated: false,
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 7",
    automated: false,
    folderAssigned: "Estudiar",
    privated: false,
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 7",
    automated: false,
    folderAssigned: "Estudiar",
    privated: false,
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 7",
    automated: false,
    folderAssigned: "Estudiar",
    privated: false,
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 7",
    automated: false,
    folderAssigned: "Estudiar",
    privated: false,
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 7",
    automated: false,
    folderAssigned: "Estudiar",
    privated: false,
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
];

export const fakeAlarmDescription: AlarmObj = {
  folderAssigned: "Cumpleños",
  folderIcon: "😎",
  id: crypto.randomUUID(),
  alarmTitle: "Alarm's Title",
  color: "#FD0E78",
  icon: "🎂",
  createAt: new Date(),// dayjs().format("DD/MM/YYYY - hh: mm A"),
  toDate: new Date(),
  createdTo: "Simon Briceño",
  privateAlarm: true,
  automated: true,
  privateUser: "Simon Briceño",
  description: `t is a long established fact that a reader
    will be distracted by the readable content
    of a page when looking at its layout. The
    point of using Lorem Ipsum is that it has a
    more-or-less normal distribution of letters,
    as opposed to using Content here, content
    here, making it look like readable English.t
    is a long established fact that a reader
    will be distracted by the readable content
    of a page when looking at its layout. The
    point of using Lorem Ipsum is that it has a
    more-or-less normal distribution of letters,
    as opposed to using Content here, content
    here, making it look like readable English.t
    is a long established fact that a reader
    will be distracted by the readable content
    of a page when looking at its layout. The
    point of using Lorem Ipsum is that it has a
    more-or-less normal distribution of letters,
    as opposed to using Content here, content
    here, making it look like readable English.
    t is a long established fact that a reader
    will be distracted by the readable content
    of a page when looking at its layout. The
    point of using Lorem Ipsum is that it has a
    more-or-less normal distribution of letters,
    as opposed to using Content here, content
    here, making it look like readable English.t
    is a long established fact that a reader
    will be distracted by the readable content
    of a page when looking at its layout. The
    point of using Lorem Ipsum is that it has a
    more-or-less normal distribution of letters,
    as opposed to using Content here, content
    here, making it look like readable English.t
    is a long established fact that a reader
    will be distracted by the readable content
    of a page when looking at its layout. The
    point of using Lorem Ipsum is that it has a
    more-or-less normal distribution of letters,
    as opposed to using Content here, content
    here, making it look like readable English.`,
};

export const alarmFolderArray: AlarmFolderArray[] = [
  {
    idFolder: crypto.randomUUID(),
    title: "Cumpleaños",
    icon: "😎",
    alarmsArray: [
      {
        createdTo: "Mario Hurtado",
        icon: "🎂",
        id: crypto.randomUUID(),
        alarmTitle: "Titulo Cumpleaños 1",
        privateUser: "",
        color: "#FD0E78",
        folderIcon: "😎",
        automated: false,
        folderAssigned: "Cumpleaños",
        privateAlarm: false,
        createAt: new Date(),
        toDate: new Date(),
        description:
          "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
      },
      {
        createdTo: "Mario Hurtado",
        icon: "🎂",
        id: crypto.randomUUID(),
        alarmTitle: "Titulo Cumpleaños 2",
        privateUser: "",
        color: "#FD0E78",
        folderIcon: "😎",
        automated: false,
        folderAssigned: "Cumpleaños",
        privateAlarm: false,
        createAt: new Date(),
        toDate: new Date(),
        description:
          "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
      },
      {
        createdTo: "Mario Hurtado",
        icon: "🎂",
        id: crypto.randomUUID(),
        alarmTitle: "Titulo Cumpleaños 3",
        privateUser: "",
        color: "#FD0E78",
        folderIcon: "😎",
        automated: false,
        folderAssigned: "Cumpleaños",
        privateAlarm: false,
        createAt: new Date(),
        toDate: new Date(),
        description:
          "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
      },
    ],
    themeColor: "#FD0E78",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
  },
  {
    idFolder: crypto.randomUUID(),
    title: "Por hacer",
    icon: "📈",
    alarmsArray: [
      {
        createdTo: "Mario Hurtado",
        icon: "🎂",
        id: crypto.randomUUID(),
        alarmTitle: "Titulo Por hacer 1",
        privateUser: "",
        color: "#b609bc",
        folderIcon: "📈",
        automated: false,
        folderAssigned: "Por hacer",
        privateAlarm: false,
        createAt: new Date(),
        toDate: new Date(),
        description:
          "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
      },
      {
        createdTo: "Mario Hurtado",
        icon: "🎂",
        id: crypto.randomUUID(),
        alarmTitle: "Titulo Por hacer 2",
        privateUser: "",
        color: "#b609bc",
        folderIcon: "📈",
        automated: false,
        folderAssigned: "Por hacer",
        privateAlarm: false,
        createAt: new Date(),
        toDate: new Date(),
        description:
          "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
      },
      {
        createdTo: "Mario Hurtado",
        icon: "🎂",
        id: crypto.randomUUID(),
        alarmTitle: "Titulo Por hacer 3",
        privateUser: "",
        color: "#b609bc",
        folderIcon: "📈",
        automated: false,
        folderAssigned: "Por hacer",
        privateAlarm: false,
        createAt: new Date(),
        toDate: new Date(),
        description:
          "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
      },
      {
        createdTo: "Mario Hurtado",
        icon: "🎂",
        id: crypto.randomUUID(),
        alarmTitle: "Titulo Por hacer 4",
        privateUser: "",
        color: "#b609bc",
        folderIcon: "📈",
        automated: false,
        folderAssigned: "Por hacer",
        privateAlarm: false,
        createAt: new Date(),
        toDate: new Date(),
        description:
          "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
      },
      {
        createdTo: "Mario Hurtado",
        icon: "🎂",
        id: crypto.randomUUID(),
        alarmTitle: "Titulo Por hacer 5",
        privateUser: "",
        color: "#b609bc",
        folderIcon: "📈",
        automated: false,
        folderAssigned: "Por hacer",
        privateAlarm: false,
        createAt: new Date(),
        toDate: new Date(),
        description:
          "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
      },
    ],
    themeColor: "#b609bc",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
  },
  {
    idFolder: crypto.randomUUID(),
    title: "Contactar",
    icon: "📆",
    alarmsArray: [
      {
        createdTo: "Mario Hurtado",
        icon: "🎂",
        id: crypto.randomUUID(),
        alarmTitle: "Titulo Contactar 1",
        privateUser: "",
        color: "#0db404",
        folderIcon: "📆",
        automated: false,
        folderAssigned: "Contactar",
        privateAlarm: false,
        createAt: new Date(),
        toDate: new Date(),
        description:
          "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
      },
      {
        createdTo: "Mario Hurtado",
        icon: "🎂",
        id: crypto.randomUUID(),
        alarmTitle: "Titulo Contactar 2",
        privateUser: "",
        color: "#0db404",
        folderIcon: "📆",
        automated: false,
        folderAssigned: "Contactar",
        privateAlarm: false,
        createAt: new Date(),
        toDate: new Date(),
        description:
          "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
      },
      {
        createdTo: "Mario Hurtado",
        icon: "🎂",
        id: crypto.randomUUID(),
        alarmTitle: "Titulo Contactar 3",
        privateUser: "",
        color: "#0db404",
        folderIcon: "📆",
        automated: false,
        folderAssigned: "Contactar",
        privateAlarm: false,
        createAt: new Date(),
        toDate: new Date(),
        description:
          "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
      },
      {
        createdTo: "Mario Hurtado",
        icon: "🎂",
        id: crypto.randomUUID(),
        alarmTitle: "Titulo Contactar 4",
        privateUser: "",
        color: "#0db404",
        folderIcon: "📆",
        automated: false,
        folderAssigned: "Contactar",
        privateAlarm: false,
        createAt: new Date(),
        toDate: new Date(),
        description:
          "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
      },
    ],
    themeColor: "#0db404",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
  },
  {
    idFolder: crypto.randomUUID(),
    title: "Estudiar",
    icon: "🤖",
    alarmsArray: [
      {
        createdTo: "Mario Hurtado",
        icon: "🎂",
        id: crypto.randomUUID(),
        alarmTitle: "Titulo Contactar 4",
        privateUser: "",
        color: "#3a0efd",
        folderIcon: "🤖",
        automated: false,
        folderAssigned: "Contactar",
        privateAlarm: false,
        createAt: new Date(),
        toDate: new Date(),
        description:
          "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
      },
      {
        createdTo: "Mario Hurtado",
        icon: "🎂",
        id: crypto.randomUUID(),
        alarmTitle: "Titulo Contactar 4",
        privateUser: "",
        color: "#3a0efd",
        folderIcon: "🤖",
        automated: false,
        folderAssigned: "Contactar",
        privateAlarm: false,
        createAt: new Date(),
        toDate: new Date(),
        description:
          "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
      },
      {
        createdTo: "Mario Hurtado",
        icon: "🎂",
        id: crypto.randomUUID(),
        alarmTitle: "Titulo Contactar 4",
        privateUser: "",
        color: "#3a0efd",
        folderIcon: "🤖",
        automated: false,
        folderAssigned: "Contactar",
        privateAlarm: false,
        createAt: new Date(),
        toDate: new Date(),
        description:
          "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
      },
      {
        createdTo: "Mario Hurtado",
        icon: "🎂",
        id: crypto.randomUUID(),
        alarmTitle: "Titulo Contactar 4",
        privateUser: "",
        color: "#3a0efd",
        folderIcon: "🤖",
        automated: false,
        folderAssigned: "Contactar",
        privateAlarm: false,
        createAt: new Date(),
        toDate: new Date(),
        description:
          "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
      },
      {
        createdTo: "Mario Hurtado",
        icon: "🎂",
        id: crypto.randomUUID(),
        alarmTitle: "Titulo Contactar 4",
        privateUser: "",
        color: "#3a0efd",
        folderIcon: "🤖",
        automated: false,
        folderAssigned: "Contactar",
        privateAlarm: false,
        createAt: new Date(),
        toDate: new Date(),
        description:
          "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
      },
      {
        createdTo: "Mario Hurtado",
        icon: "🎂",
        id: crypto.randomUUID(),
        alarmTitle: "Titulo Contactar 4",
        privateUser: "",
        color: "#3a0efd",
        folderIcon: "🤖",
        automated: false,
        folderAssigned: "Contactar",
        privateAlarm: false,
        createAt: new Date(),
        toDate: new Date(),
        description:
          "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
      },
      {
        createdTo: "Mario Hurtado",
        icon: "🎂",
        id: crypto.randomUUID(),
        alarmTitle: "Titulo Contactar 4",
        privateUser: "",
        color: "#3a0efd",
        folderIcon: "🤖",
        automated: false,
        folderAssigned: "Contactar",
        privateAlarm: false,
        createAt: new Date(),
        toDate: new Date(),
        description:
          "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
      },
    ],
    themeColor: "#3a0efd",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
  },
  {
    idFolder: crypto.randomUUID(),
    title: "Miscelaneas",
    icon: "📄",
    alarmsArray: [],
    themeColor: "#0e95fd",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
  },
];
