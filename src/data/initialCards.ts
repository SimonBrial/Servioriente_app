import { CardProcessProps } from "@/interface/interface";
import { processTitle } from "@/types/types";
import { UniqueIdentifier } from "@dnd-kit/core";

interface DNDType {
  id: UniqueIdentifier;
  title: string | processTitle;
  items: CardProcessProps[];
}
export const INITIAL_CARDS: CardProcessProps[] = [
  {
    columnId: "espera",
    id: `item-${crypto.randomUUID()}`,
    vehicle: "spark",
    date: new Date(),
    tag: 1,
    clientName: "Simon 1",
  },

  {
    columnId: "espera",
    id: `item-${crypto.randomUUID()}`,
    vehicle: "spark",
    date: new Date(),
    tag: 2,
    clientName: "Simon 2",
  },
  {
    columnId: "generacion",
    id: `item-${crypto.randomUUID()}`,
    vehicle: "spark",
    date: new Date(),
    tag: 3,
    clientName: "Simon 3",
  },
  {
    columnId: "generacion",
    id: `item-${crypto.randomUUID()}`,
    vehicle: "spark",
    date: new Date(),
    tag: 4,
    clientName: "Simon 4",
  },
  {
    columnId: "generacion",
    id: `item-${crypto.randomUUID()}`,
    vehicle: "spark",
    date: new Date(),
    tag: 4,
    clientName: "Simon 4",
  },
  {
    columnId: "generacion",
    id: `item-${crypto.randomUUID()}`,
    vehicle: "spark",
    date: new Date(),
    tag: 4,
    clientName: "Simon 4",
  },
  {
    columnId: "pagado",
    id: `item-${crypto.randomUUID()}`,
    vehicle: "spark",
    date: new Date(),
    tag: 5,
    clientName: "Simon 5",
  },
  {
    columnId: "pagado",
    id: `item-${crypto.randomUUID()}`,
    vehicle: "spark",
    date: new Date(),
    tag: 6,
    clientName: "Simon 6",
  },
  {
    columnId: "entregado",
    id: `item-${crypto.randomUUID()}`,
    vehicle: "spark",
    date: new Date(),
    tag: 7,
    clientName: "Simon 7",
  },
  {
    columnId: "entregado",
    id: `item-${crypto.randomUUID()}`,
    vehicle: "spark",
    date: new Date(),
    tag: 8,
    clientName: "Simon 8",
  },
  {
    columnId: "entregado",
    id: `item-${crypto.randomUUID()}`,
    vehicle: "spark",
    date: new Date(),
    tag: 8,
    clientName: "Simon 9",
  },
  {
    columnId: "entregado",
    id: `item-${crypto.randomUUID()}`,
    vehicle: "spark",
    date: new Date(),
    tag: 8,
    clientName: "Simon 9",
  },
  {
    columnId: "entregado",
    id: `item-${crypto.randomUUID()}`,
    vehicle: "spark",
    date: new Date(),
    tag: 8,
    clientName: "Simon 9",
  },
];

export const dataFakeCard: DNDType[] = [
  {
    id: `container-${crypto.randomUUID()}`,
    title: "Espera",
    items: [
      {
        columnId: "espera",
        id: `item-${crypto.randomUUID()}`,
        vehicle: "spark",
        date: new Date(),
        tag: 1,
        clientName: "Simon 1",
      },
      {
        columnId: "espera",
        id: `item-${crypto.randomUUID()}`,
        vehicle: "spark",
        date: new Date(),
        tag: 2,
        clientName: "Simon 2",
      },
    ],
  },
  {
    id: `container-${crypto.randomUUID()}`,
    title: "Generacion",
    items: [
      {
        columnId: "generacion",
        id: `item-${crypto.randomUUID()}`,
        vehicle: "spark",
        date: new Date(),
        tag: 3,
        clientName: "Simon 3",
      },
      {
        columnId: "generacion",
        id: `item-${crypto.randomUUID()}`,
        vehicle: "spark",
        date: new Date(),
        tag: 4,
        clientName: "Simon 4",
      },
      {
        columnId: "generacion",
        id: `item-${crypto.randomUUID()}`,
        vehicle: "spark",
        date: new Date(),
        tag: 4,
        clientName: "Simon 4",
      },
      {
        columnId: "generacion",
        id: `item-${crypto.randomUUID()}`,
        vehicle: "spark",
        date: new Date(),
        tag: 4,
        clientName: "Simon 4",
      },
    ],
  },
  {
    id: `container-${crypto.randomUUID()}`,
    title: "Pagado",
    items: [
      {
        columnId: "pagado",
        id: `item-${crypto.randomUUID()}`,
        vehicle: "spark",
        date: new Date(),
        tag: 5,
        clientName: "Simon 5",
      },
      {
        columnId: "pagado",
        id: `item-${crypto.randomUUID()}`,
        vehicle: "spark",
        date: new Date(),
        tag: 6,
        clientName: "Simon 6",
      },
    ],
  },
  {
    id: `container-${crypto.randomUUID()}`,
    title: "Entregado",
    items: [
      {
        columnId: "entregado",
        id: `item-${crypto.randomUUID()}`,
        vehicle: "spark",
        date: new Date(),
        tag: 7,
        clientName: "Simon 7",
      },
      {
        columnId: "entregado",
        id: `item-${crypto.randomUUID()}`,
        vehicle: "spark",
        date: new Date(),
        tag: 8,
        clientName: "Simon 8",
      },
      {
        columnId: "entregado",
        id: `item-${crypto.randomUUID()}`,
        vehicle: "spark",
        date: new Date(),
        tag: 8,
        clientName: "Simon 9",
      },
      {
        columnId: "entregado",
        id: `item-${crypto.randomUUID()}`,
        vehicle: "spark",
        date: new Date(),
        tag: 8,
        clientName: "Simon 9",
      },
      {
        columnId: "entregado",
        id: `item-${crypto.randomUUID()}`,
        vehicle: "spark",
        date: "06/11/2023",
        tag: 8,
        clientName: "Simon 9",
      },
    ],
  },
];
