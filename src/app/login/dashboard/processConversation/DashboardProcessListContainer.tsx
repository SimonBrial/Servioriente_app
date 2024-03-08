"use client";

import React, { useState } from "react";
import { useMantineColorScheme, Stack, Table } from "@mantine/core";
import { DndContext } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { DashboardProcessListItems } from "@/interface/interface";
import { dashboardProcessList } from "@/data/dashboardProcessList";
import { DashboardProcessListItem } from "./DashboardProcessListItem";
import classes from "@/styles/dashboard.module.css";
import { ContainerInside } from "@/components/container/ContainerInside";
import { SocialMediaContainer } from "../rating/SocialMediaContainer";
import { RatingContainer } from "../rating/RatingContainer";
import { TitleLayout } from "@/components/layout/TitleLayout";

export const DashboardProcessListContainer = () => {
  const [itemsTable, setItemsTable] =
    useState<DashboardProcessListItems[]>(dashboardProcessList);
  const { colorScheme } = useMantineColorScheme();

  const rows = itemsTable.map((item) => {
    const { id, process, today, yesterday, processTitle } = item;
    return (
      <DashboardProcessListItem
        processTitle={processTitle}
        yesterday={yesterday}
        process={process}
        today={today}
        key={id}
        id={id}
      />
    );
  });

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!active.id !== over.id) {
      setItemsTable((item) => {
        const oldIndex = item.findIndex((it) => it.id === active.id);
        const newIndex = item.findIndex((it) => it.id === over.id);
        return arrayMove(item, oldIndex, newIndex);
      });
    }
  };

  return (
    <ContainerInside allWhite withBorder width="100%">
      <Stack gap={2}>
        <TitleLayout color="" icon="" onText title="Procesos"/>
        <Table
          styles={{ th: { textAlign: "center" }, td: { textAlign: "center" } }}
          classNames={{
            thead:
              colorScheme === "light"
                ? classes.dashboardItem_header
                : classes.dashboardItem_header_dark,
            td:
              colorScheme === "light"
                ? classes.dashboardItem_row
                : classes.dashboardItem_row_dark,
          }}
          // verticalSpacing={5}
          horizontalSpacing={5}
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th></Table.Th>
              <Table.Th>Proceso</Table.Th>
              <Table.Th>Hoy</Table.Th>
              <Table.Th>Ayer</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <DndContext
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis]}
          >
            <SortableContext items={itemsTable}>
              <Table.Tbody>{rows}</Table.Tbody>
            </SortableContext>
          </DndContext>
        </Table>
        <SocialMediaContainer />
        <RatingContainer value={3.5} />
      </Stack>
    </ContainerInside>
  );
};
