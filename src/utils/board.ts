/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { processTitle } from "../types/types";
import { COLUMNS_SECTIONS } from "./constants";
import { getCardsByStatus } from "./tasks";
import { ColumnSection, CardProcessProps } from "@/interface/interface";

export const initializeColumns = (tasks: CardProcessProps[]) => {
  const boardSections: ColumnSection = {};

  Object.keys(COLUMNS_SECTIONS).forEach((columnSectionKey) => {
    boardSections[columnSectionKey] = getCardsByStatus(
      tasks,
      columnSectionKey as processTitle,
    );
  });

  return boardSections;
};

export const findBoardSectionContainer = (
  boardSections: ColumnSection,
  id: string,
) => {
  if (id in boardSections) {
    return id;
  }
  const container = Object.keys(boardSections).find((key) =>
    boardSections[key].find((item) => item.id === id),
  );
  return container;
};
