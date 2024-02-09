/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { processTitle } from "../types/types";
import { CardProcessProps } from "@/interface/interface";

export const getCardsByStatus = (
  cards: CardProcessProps[],
  status: processTitle,
) => {
  return cards.filter((card) => card.columnId === status);
};

export const getCardById = (cards: CardProcessProps[], id: string) => {
  return cards.find((card) => card.id === id);
};
