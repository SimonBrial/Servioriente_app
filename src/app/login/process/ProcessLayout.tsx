/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

"use client";

import React, { useState } from "react";
import {
  defaultDropAnimation,
  KeyboardSensor,
  closestCorners,
  DragStartEvent,
  PointerSensor,
  DragOverEvent,
  DropAnimation,
  DragEndEvent,
  DragOverlay,
  useSensors,
  DndContext,
  useSensor,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates, arrayMove } from "@dnd-kit/sortable";
import { INITIAL_CARDS } from "@/data/initialCards";
import { ColumnSection as BoardSectionsType } from "@/interface/interface";
import { getCardById } from "@/utils/tasks";
import {
  findBoardSectionContainer,
  initializeColumns,
} from "../../../utils/board";
import { ProcessColumnLayout } from "./ProcessColumnLayout";
import { CardProcess } from "./CardProcess";
import { Container, Grid, useMantineColorScheme } from "@mantine/core";
import InsideContainer from "@/components/container/InsideContainer";

export const ProcessLayout = (): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  const tasks = INITIAL_CARDS;
  const initialBoardSections = initializeColumns(INITIAL_CARDS);
  const [boardSections, setBoardSections] =
    useState<BoardSectionsType>(initialBoardSections);

  const [activeCardId, setActiveCardId] = useState<null | string>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragStart = ({ active }: DragStartEvent) => {
    setActiveCardId(active.id as string);
  };

  const handleDragOver = ({ active, over }: DragOverEvent) => {
    // Find the containers
    const activeContainer = findBoardSectionContainer(
      boardSections,
      active.id as string,
    );
    const overContainer = findBoardSectionContainer(
      boardSections,
      over?.id as string,
    );

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setBoardSections((boardSection) => {
      const activeItems = boardSection[activeContainer];
      const overItems = boardSection[overContainer];

      // Find the indexes for the items
      const activeIndex = activeItems.findIndex(
        (item) => item.id === active.id,
      );
      const overIndex = overItems.findIndex((item) => item.id !== over?.id);

      return {
        ...boardSection,
        [activeContainer]: [
          ...boardSection[activeContainer].filter(
            (item) => item.id !== active.id,
          ),
        ],
        [overContainer]: [
          ...boardSection[overContainer].slice(0, overIndex),
          boardSections[activeContainer][activeIndex],
          ...boardSection[overContainer].slice(
            overIndex,
            boardSection[overContainer].length,
          ),
        ],
      };
    });
  };

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    const activeContainer = findBoardSectionContainer(
      boardSections,
      active.id as string,
    );
    const overContainer = findBoardSectionContainer(
      boardSections,
      over?.id as string,
    );

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    const activeIndex = boardSections[activeContainer].findIndex(
      (task) => task.id === active.id,
    );
    const overIndex = boardSections[overContainer].findIndex(
      (task) => task.id === over?.id,
    );

    if (activeIndex !== overIndex) {
      setBoardSections((boardSection) => ({
        ...boardSection,
        [overContainer]: arrayMove(
          boardSection[overContainer],
          activeIndex,
          overIndex,
        ),
      }));
    }

    setActiveCardId(null);
  };

  const dropAnimation: DropAnimation = {
    ...defaultDropAnimation,
  };

  const task = activeCardId ? getCardById(tasks, activeCardId) : null;

  return (
    <InsideContainer
      key={crypto.randomUUID()}
      withBackground
      offset={124}
      withBorder
    >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        autoScroll={{ layoutShiftCompensation: false }}
      >
        <Container
          styles={(theme) => ({
            root: {
              maxWidth: "100%",
              border:
                colorScheme === "light"
                  ? `1px solid ${theme.colors.lightTheme[2]}` // `1px solid ${theme.colors.lightTheme[2]}`
                  : `1px solid ${theme.colors.darkTheme[9]}`,
              backgroundColor:
                colorScheme === "light"
                  ? "#fff"
                  : `${theme.colors.darkTheme[7]}`,
              borderRadius: "6px",
              padding: "0.5rem",
            },
          })}
        >
          <Grid style={{ padding: "0.5rem" }}>
            {Object.keys(boardSections).map((boardSectionKey) => {
              return (
                <div
                  key={boardSectionKey}
                  style={{
                    width:
                      "25%" /* border: "1px solid blue", padding: "0.5rem", height: "80%" */,
                  }}
                >
                  <ProcessColumnLayout
                    id={boardSectionKey}
                    title={boardSectionKey}
                    tasks={boardSections[boardSectionKey]}
                  />
                </div>
              );
            })}
            <DragOverlay dropAnimation={dropAnimation}>
              {task ? <CardProcess card={task} /> : null}
            </DragOverlay>
          </Grid>
        </Container>
      </DndContext>
    </InsideContainer>
  );
};
