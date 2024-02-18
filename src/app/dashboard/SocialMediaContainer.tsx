"use client";

import React, { useState } from "react";
import { Stack, Table, useMantineColorScheme } from "@mantine/core";
import { DndContext } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { SocialMedia } from "@/interface/interface";
import classes from "@/styles/dashboard.module.css";
import { SocialMediaItem } from "./SocialMediaItem";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { TitleLayout } from "@/components/layout/TitleLayout";

export const SocialMediaContainer = () => {
  const [items, setItems] = useState<SocialMedia[]>([
    { title: "instagram", rating: 3, id: crypto.randomUUID() },
    { title: "facebook", rating: 3, id: crypto.randomUUID() },
    { title: "whatsapp", rating: 3, id: crypto.randomUUID() },
  ]);
  const { colorScheme } = useMantineColorScheme();

  const rows = items.map((item) => {
    const { rating, title, id } = item;
    return <SocialMediaItem id={id} rating={rating} title={title} key={id} />;
  });

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!active.id !== over.id) {
      setItems((item) => {
        const oldIndex = item.findIndex((it) => it.id === active.id);
        const newIndex = item.findIndex((it) => it.id === over.id);
        return arrayMove(item, oldIndex, newIndex);
      });
    }
  };

  return (
    <Stack gap={2}>
      <TitleLayout color="" icon="" onText title="Redes Sociales" />
      <Table
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
        styles={{ td: { textAlign: "center" }, th: { textAlign: "center" } }}
        horizontalSpacing={5}
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th></Table.Th>
            <Table.Th>Red Social</Table.Th>
            <Table.Th>Rating</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <DndContext
          onDragEnd={handleDragEnd}
          modifiers={[restrictToVerticalAxis]}
        >
          <SortableContext items={items}>
            <Table.Tbody>{rows}</Table.Tbody>
          </SortableContext>
        </DndContext>
      </Table>
    </Stack>
  );
};
