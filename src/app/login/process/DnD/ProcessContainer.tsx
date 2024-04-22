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
} from "@dnd-kit/core";
import {
  sortableKeyboardCoordinates,
  SortableContext,
  arrayMove,
} from "@dnd-kit/sortable";
// Mantine
import { useMantineColorScheme, Grid } from "@mantine/core";
// Others
import classes from "@/styles/card-process.module.css";
// import heightClasses from "@/styles/height-view.module.css";
import { DNDType } from "@/interface/interface";
import { Items } from "./Items";
import { ColumnContainer } from "./ColumnContainer";
import { useProcessStore } from "@/store/process-store";

export function ProcessContainer() {
  // Global State Management
  const ProcessData = useProcessStore((state) => state.data);

  const DNDid = useId();
  const { colorScheme } = useMantineColorScheme();
  const [containers, setContainers] = useState<DNDType[]>(ProcessData);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  /* const [cardsArray, setCardsArray] = useState<CardProcessProps[]>(ProcessData.map(c => c.items)); */

  // --> This code's block is for change the drag section od the card item container
  /* function changeProperty(
    id: string,
    arr: CardProcessProps[],
  ): CardProcessProps[] {
    arr.forEach((arrCards) => {
      if (arrCards.columnId !== id) {
        arrCards.columnId = id;
      }
    });
    return arr;
  } */
  /* useEffect(() => {
    setCardsArray(changeProperty(id, cardArray));
  }, [cardArray.length]); */

  // Find the value of the items
  function findValueOfItems(id: UniqueIdentifier | undefined, type: string) {
    if (type === "container") {
      return containers.find((item) => item.id === id);
    }
    if (type === "item") {
      return containers.find((container) =>
        container.items.find((item) => item.id === id),
      );
    }
  }

  function findItemClientName(id: UniqueIdentifier | undefined) {
    const container = findValueOfItems(id, "item");
    if (!container) return "";
    const item = container.items.find((item) => item.id === id);
    if (!item) return "";
    return item.clientName;
  }

  // DND Handlers
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const { id } = active;
    setActiveId(id);
  }

  function handleDragMove(event: DragMoveEvent) {
    const { active, over } = event;

    // Handle Items Sorting
    if (
      active.id.toString().includes("item") &&
      over?.id.toString().includes("item") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the active container and over container
      const activeContainer = findValueOfItems(active.id, "item");
      const overContainer = findValueOfItems(over.id, "item");

      // If the active or over container is not found, return
      if (!activeContainer || !overContainer) return;

      // Find the index of the active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id,
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id,
      );

      // Find the index of the active and over item
      const activeitemIndex = activeContainer.items.findIndex(
        (item) => item.id === active.id,
      );
      const overitemIndex = overContainer.items.findIndex(
        (item) => item.id === over.id,
      );
      // In the same container
      if (activeContainerIndex === overContainerIndex) {
        let newItems = [...containers];
        newItems[activeContainerIndex].items = arrayMove(
          newItems[activeContainerIndex].items,
          activeitemIndex,
          overitemIndex,
        );

        setContainers(newItems);
      } else {
        // In different containers
        let newItems = [...containers];
        const [removeditem] = newItems[activeContainerIndex].items.splice(
          activeitemIndex,
          1,
        );
        newItems[overContainerIndex].items.splice(
          overitemIndex,
          0,
          removeditem,
        );
        setContainers(newItems);
      }
    }

    // Handling Item Drop Into a Container
    if (
      active.id.toString().includes("item") &&
      over?.id.toString().includes("container") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the active and over container
      const activeContainer = findValueOfItems(active.id, "item");
      const overContainer = findValueOfItems(over.id, "container");

      // If the active or over container is not found, return
      if (!activeContainer || !overContainer) return;

      // Find the index of the active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id,
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id,
      );

      // Find the index of the active and over item
      const activeitemIndex = activeContainer.items.findIndex(
        (item) => item.id === active.id,
      );

      // Remove the active item from the active container and add it to the over container
      let newItems = [...containers];
      const [removeditem] = newItems[activeContainerIndex].items.splice(
        activeitemIndex,
        1,
      );
      newItems[overContainerIndex].items.push(removeditem);
      setContainers(newItems);
    }
  }

  // This is the function that handles the sorting of the containers and items when the user is done dragging.
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    // Handling Container Sorting
    if (
      active.id.toString().includes("container") &&
      over?.id.toString().includes("container") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the index of the active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === active.id,
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === over.id,
      );
      // Swap the active and over container
      let newItems = [...containers];
      newItems = arrayMove(newItems, activeContainerIndex, overContainerIndex);
      setContainers(newItems);
    }

    // Handling item Sorting
    if (
      active.id.toString().includes("item") &&
      over?.id.toString().includes("item") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the active and over container
      const activeContainer = findValueOfItems(active.id, "item");
      const overContainer = findValueOfItems(over.id, "item");

      // If the active or over container is not found, return
      if (!activeContainer || !overContainer) return;
      // Find the index of the active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id,
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id,
      );
      // Find the index of the active and over item
      const activeitemIndex = activeContainer.items.findIndex(
        (item) => item.id === active.id,
      );
      const overitemIndex = overContainer.items.findIndex(
        (item) => item.id === over.id,
      );

      // In the same container
      if (activeContainerIndex === overContainerIndex) {
        let newItems = [...containers];
        newItems[activeContainerIndex].items = arrayMove(
          newItems[activeContainerIndex].items,
          activeitemIndex,
          overitemIndex,
        );
        setContainers(newItems);
      } else {
        // In different containers
        let newItems = [...containers];
        const [removeditem] = newItems[activeContainerIndex].items.splice(
          activeitemIndex,
          1,
        );
        newItems[overContainerIndex].items.splice(
          overitemIndex,
          0,
          removeditem,
        );
        setContainers(newItems);
      }
    }
    // Handling item dropping into Container
    if (
      active.id.toString().includes("item") &&
      over?.id.toString().includes("container") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the active and over container
      const activeContainer = findValueOfItems(active.id, "item");
      const overContainer = findValueOfItems(over.id, "container");

      // If the active or over container is not found, return
      if (!activeContainer || !overContainer) return;
      // Find the index of the active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id,
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id,
      );
      // Find the index of the active and over item
      const activeitemIndex = activeContainer.items.findIndex(
        (item) => item.id === active.id,
      );

      let newItems = [...containers];
      console.log("newItems: ", newItems);
      const [removeditem] = newItems[activeContainerIndex].items.splice(
        activeitemIndex,
        1,
      );
      newItems[overContainerIndex].items.push(removeditem);
      setContainers(newItems);
    }
    setActiveId(null);
  }

  return (
    <DndContext
      id={DNDid}
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragMove={handleDragMove}
      onDragEnd={handleDragEnd}
    >
      <Grid
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
        {containers.map((container) => (
          <Grid.Col key={container.id} span={3}>
            <ColumnContainer
              cardArray={container.items}
              title={container.title}
              id={container.id}
            >
              <SortableContext items={container.items.map((i) => i.id)}>
                <div>
                  {container.items.map((i) => (
                    <Items
                      clientName={i.clientName}
                      columnId={i.columnId}
                      vehicle={i.vehicle}
                      date={i.date}
                      tag={i.tag}
                      key={i.id}
                      id={i.id}
                    />
                  ))}
                </div>
              </SortableContext>
            </ColumnContainer>
          </Grid.Col>
        ))}
      </Grid>
      <DragOverlay adjustScale={false}>
        {/* Drag Overlay For item Item */}
        {activeId && activeId.toString().includes("item") && (
          <Items
            clientName={findItemClientName(activeId)}
            key={activeId}
            id={activeId}
            columnId=""
            vehicle="Vehicle"
            date="24/03/2024"
            tag={0}
          />
        )}
      </DragOverlay>
    </DndContext>
  );
}

{
  /* <div
    className={
      colorScheme === "light"
        ? heightClasses.column_process_container
        : heightClasses.column_process_container
    }
  >
  </div> */
}
