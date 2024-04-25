import {
  AlarmFolderArray,
  AlarmCardArray,
  AlarmObj,
} from "@/interface/interface";

export const alarmDataArray: AlarmCardArray[] = [
  {
    id: crypto.randomUUID(),
    title: "Titulo 1",
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
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
];

export const fakeAlarmDescription: AlarmObj = {
  id: crypto.randomUUID(),
  title: "Cumpleaños",
  color: "#FD0E78",
  icon: "😎",
  createAt: "20/9/2023 - 10:58 AM",
  createdTo: "Simon Briceño",
  privateAlarm: true,
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
  automated: true,
};

export const alarmFolderArray: AlarmFolderArray[] = [
  {
    idFolder: crypto.randomUUID(),
    title: "Cumpleaños",
    icon: "😎",
    alarmsArray: alarmDataArray.slice(0, 3),
    themeColor: "#FD0E78",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
  },
  {
    idFolder: crypto.randomUUID(),
    title: "Por hacer",
    icon: "😎",
    alarmsArray: alarmDataArray.slice(0, 5),
    themeColor: "#b609bc",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
  },
  {
    idFolder: crypto.randomUUID(),
    title: "Contactar",
    icon: "😎",
    alarmsArray: alarmDataArray.slice(0, 4),
    themeColor: "#0db404",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
  },
  {
    idFolder: crypto.randomUUID(),
    title: "Estudiar",
    icon: "😎",
    alarmsArray: alarmDataArray,
    themeColor: "#3a0efd",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
  },
];
