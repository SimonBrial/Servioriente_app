/* eslint-disable object-shorthand */
"use client";
// React
import { useId, useState } from "react";
// DnD
import {
  UniqueIdentifier,
  closestCorners,
  DragStartEvent,
  KeyboardSensor,
  DragMoveEvent,
  PointerSensor,
  DragEndEvent,
  DragOverlay,
  DndContext,
  useSensors,
  useSensor,
  defaultDropAnimation,
  DropAnimation,
  DragOverEvent,
} from "@dnd-kit/core";
import {
  sortableKeyboardCoordinates,
  SortableContext,
  arrayMove,
} from "@dnd-kit/sortable";
// Mantine
import { useMantineColorScheme, Grid, Container, Flex } from "@mantine/core";
// Others
import classes from "@/styles/card-process.module.css";
// import heightClasses from "@/styles/height-view.module.css";
import { CardProcessProps, DNDType } from "@/interface/interface";
import { Items } from "./Items";
import { ColumnContainer } from "./ColumnContainer";
import { useProcessStore } from "@/store/process-store";
import { dataFakeCard2 } from "@/data/initialCards";
import { processTitle } from "@/types/types";

// export type Status = "espera" | "generacion" | "pagado" | "entregado";

export type Task = {
  id: UniqueIdentifier;
  title: string;
  description: string;
  status: processTitle;
};

export type BoardSectionsType = {
  [name: string]: CardProcessProps[];
};

const initializeBoard = (tasks: CardProcessProps[]) => {
  const boardSections: BoardSectionsType = {};

  console.log("tasks", tasks);
  Object.keys(BOARD_SECTIONS).forEach((boardSectionKey) => {
    console.log(`"getTasksByStatus(
      tasks,
      boardSectionKey as processTitle,
    )"`, getTasksByStatus(
      tasks,
      boardSectionKey as processTitle,
    ));
    boardSections[boardSectionKey] = getTasksByStatus(
      tasks,
      boardSectionKey as processTitle,
    );
  });

  console.log("boardSections", boardSections);

  return boardSections;
};

const findBoardSectionContainer = (
  boardSections: BoardSectionsType,
  id: string,
) => {
  if (id in boardSections) {
    return id;
  }

  const container = Object.keys(boardSections).find((key) =>
    boardSections[key].find((item) => item.id as string === id),
  );
  return container;
};
const getStatusFromContainer = (container: string): processTitle => {
  const statusArray: processTitle[] = ["Entregado", "Espera", "Generacion", "Pagado"];
  if (!statusArray.includes(container as processTitle)) {
    return "Espera";
  }
  return container as processTitle;
};

const BOARD_SECTIONS: Record<string, processTitle> = {
  espera: "Espera",
  generacion: "Generacion",
  pagado: "Pagado",
  entregado: "Entregado",
};

export const getTasksByStatus = (tasks: CardProcessProps[], status: processTitle) => {
  console.log(tasks)
  console.log("status", status)
  return tasks.filter((task) => task.columnId.toLowerCase() === status);
};

export const getTaskById = (tasks: CardProcessProps[], id: string) => {
  return tasks.find((task) => task.id === id);
};

export function ProcessContainer() {
  // Global State Management
  // const { data } = useProcessStore();

  const DNDid = useId();
  const { colorScheme } = useMantineColorScheme();
  /* const [containers, setContainers] =
    useState<CardProcessProps[]>(dataFakeCard2);
  const [activeCard, setActiveCard] = useState<CardProcessProps[]>();
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null); */

  const tasks = dataFakeCard2;
  const initialBoardSections = initializeBoard(dataFakeCard2);
  const [boardSections, setBoardSections] =
    useState<BoardSectionsType>(initialBoardSections);
  const [activeTaskId, setActiveTaskId] = useState<null | string>(null);


  console.log("initialBoardSections", initialBoardSections);
  // Find the value of the items
  /* function findValueOfItems(id: UniqueIdentifier | undefined, type: string) {
    if (type === "container") {
      return containers.find((item) => item.id === id);
    }
    if (type === "item") {
      return containers.find((container) =>
        container.items.find((item) => item.id === id),
      );
    }
  } */

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const dropAnimation: DropAnimation = {
    ...defaultDropAnimation,
  };

  // ✅ When the user drag the item, this function is called
  const handleDragStart = ({ active }: DragStartEvent) => {
    // console.log("from handleDragStart", active);
    setActiveTaskId(active.id as string);
  };
  // When the user is on the container (same container or next container), this function is called
  const handleDragOver = ({ active, over }: DragOverEvent) => {
    // 1. Find the containers
    const activeContainer = findBoardSectionContainer(
      boardSections,
      active.id as string,
    );
    const overContainer = findBoardSectionContainer(
      boardSections,
      over?.id as string,
    );
    // if the item didn't move to a new container
    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    // 2. Update the container status
    setBoardSections((boardSection) => {
      const activeItems = boardSections[activeContainer];
      const overItems = boardSections[overContainer];
      // Find the index for the items
      const activeIndex = activeItems.findIndex(
        (item) => item.id === active.id,
      );
      const overIndex = overItems.findIndex((item) => item.id !== over?.id);

      const updatedTask = {
        ...boardSection[activeContainer][activeIndex],
        status: getStatusFromContainer(overContainer), // Function to get the new state
      };
      // TODO: console.log(updatedTask) --> When the app needs to send the information about the user that had updated, with this variable can do it.
      return {
        ...boardSection,
        [activeContainer]: [
          ...boardSection[activeContainer].filter(
            (item) => item.id !== active.id,
          ),
        ],
        [overContainer]: [
          ...boardSection[overContainer].slice(0, overIndex),
          updatedTask,
          ...boardSection[overContainer].slice(
            overIndex,
            boardSection[overContainer].length,
          ),
        ],
      };
    });
  };

  // When the user is on the container (same container or next container) and drag the item in the another container, this function is called
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
    // Item active inside the container/ Item dragging
    const activeIndex = boardSections[activeContainer].findIndex(
      (item: CardProcessProps) => item.id === active.id,
    );
    // Item that inside the containers being flown over
    const overIndex = boardSections[overContainer].findIndex(
      (item: CardProcessProps) => item.id === over?.id,
    );
    if (activeIndex !== overIndex) {
      // If the item change the position in the container, the postion in the array will be updated
      setBoardSections((boardSection) => ({
        ...boardSection,
        [overContainer]: arrayMove(
          boardSection[overContainer],
          activeIndex,
          overIndex,
        ),
      }));
    }

    setActiveTaskId(null);
  };
  const dragCard = activeTaskId ? getTaskById(tasks, activeTaskId) : null;

  console.log("dragCard", dragCard);
  return (
    <Container
      className={
        colorScheme === "light"
          ? classes.containercolumns
          : classes.containercolumns_dark
      }
      style={{ width: "100%", maxWidth: "100%" }}
    >
      <DndContext
        id={DNDid}
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        {/* <Grid
          style={{
            width: "100%",
            maxWidth: "100%",
          }}
          className={
            colorScheme === "light"
              ? classes.containercolumns
              : classes.containercolumns_dark
          }
        >
          
        </Grid> */}
        <Flex gap={8}>
          {Object.keys(boardSections).map((columnKey) => {
            {
              /* <Grid.Col key={columnKey} span={3}>
              
              </Grid.Col> */
            }
            console.log(boardSections[columnKey])
            return (
              <ColumnContainer
                key={columnKey}
                cardArray={boardSections[columnKey]}
                title={columnKey}
                id={columnKey}
              />
            );
          })}
        </Flex>
        <DragOverlay dropAnimation={dropAnimation}>
          {dragCard ? (
            <Items
              card={{
                columnId: "Entregado",
                id: `item-${crypto.randomUUID()}`,
                vehicle: "servioriente",
                carID: "123asd",
                createdAt: new Date(),
                firstName: "Servi",
                lastName: "Oriente",
                phonePost: "5986342",
                phonePre: "0412",
                state: "Carabobo",
                updatedAt: new Date(),
                birthday: new Date(),
                facebook: "servioriente",
                instagram: "servioriente_117",
                mail: "servioriente@correo.com",
                tag: {
                  CValue: 0,
                  LCapacity: 0,
                  NSeats: 0,
                  services: [false, false, false, false],
                },
              }}
            />
          ) : null}
          {/* Drag Overlay For item Item */}
          {/* {activeId &&
            activeId.toString().includes("item") &&
            dragCard !== undefined && (
              <Items
                card={
                  dragCard
                    ? dragCard[0]
                    : {
                        columnId: "Entregado",
                        id: `item-${crypto.randomUUID()}`,
                        vehicle: "servioriente",
                        carID: "123asd",
                        createdAt: new Date(),
                        firstName: "Servi",
                        lastName: "Oriente",
                        phonePost: "5986342",
                        phonePre: "0412",
                        state: "Carabobo",
                        updatedAt: new Date(),
                        birthday: new Date(),
                        facebook: "servioriente",
                        instagram: "servioriente_117",
                        mail: "servioriente@correo.com",
                        tag: {
                          CValue: 0,
                          LCapacity: 0,
                          NSeats: 0,
                          services: [false, false, false, false],
                        },
                      }
                }
              />
            )} */}
        </DragOverlay>
      </DndContext>
    </Container>
  );
}

/* const DATA: Task[] = [
  {
    description: "description 1",
    id: "1",
    status: "Espera",
    title: "title 1",
  },
  {
    description: "description 2",
    id: "2",
    status: "Entregado",
    title: "title 2",
  },
  {
    description: "description 3",
    id: "3",
    status: "Generacion",
    title: "title 3",
  },
  {
    description: "description 4",
    id: "4",
    status: "pagado",
    title: "title 4",
  },
  {
    description: "description 5",
    id: "5",
    status: "entregado",
    title: "title 5",
  },
  {
    description: "description 6",
    id: "6",
    status: "entregado",
    title: "title 6",
  },
  {
    description: "description 7",
    id: "7",
    status: "entregado",
    title: "title 7",
  },
  {
    description: "description 8",
    id: "8",
    status: "entregado",
    title: "title 8",
  },
  {
    description: "description 9",
    id: "9",
    status: "entregado",
    title: "title 9",
  },
  {
    description: "description 10",
    id: "10",
    status: "entregado",
    title: "title 10",
  },
  {
    description: "description 11",
    id: "11",
    status: "entregado",
    title: "title 11",
  },
  {
    description: "description 12",
    id: "12",
    status: "entregado",
    title: "title 12",
  },
  {
    description: "description 13",
    id: "13",
    status: "entregado",
    title: "title 13",
  },
  {
    description: "description 14",
    id: "14",
    status: "entregado",
    title: "title 14",
  },
  {
    description: "description 15",
    id: "15",
    status: "entregado",
    title: "title 15",
  },
  {
    description: "description 16",
    id: "16",
    status: "entregado",
    title: "title 16",
  },
  {
    description: "description 17",
    id: "17",
    status: "entregado",
    title: "title 17",
  },
  {
    description: "description 18",
    id: "18",
    status: "entregado",
    title: "title 18",
  },
  {
    description: "description 19",
    id: "19",
    status: "entregado",
    title: "title 19",
  },
  {
    description: "description 20",
    id: "20",
    status: "entregado",
    title: "title 20",
  },
  {
    description: "description 21",
    id: "21",
    status: "entregado",
    title: "title 21",
  },
  {
    description: "description 22",
    id: "22",
    status: "entregado",
    title: "title 22",
  },
  {
    description: "description 23",
    id: "23",
    status: "entregado",
    title: "title 23",
  },
  {
    description: "description 24",
    id: "24",
    status: "entregado",
    title: "title 24",
  },
  {
    description: "description 25",
    id: "25",
    status: "entregado",
    title: "title 25",
  },
  {
    description: "description 26",
    id: "26",
    status: "entregado",
    title: "title 26",
  },
  {
    description: "description 27",
    id: "27",
    status: "entregado",
    title: "title 27",
  },
  {
    description: "description 28",
    id: "28",
    status: "entregado",
    title: "title 28",
  },
  {
    description: "description 29",
    id: "29",
    status: "entregado",
    title: "title 29",
  },
  {
    description: "description 30",
    id: "30",
    status: "entregado",
    title: "title 30",
  },
]; */
