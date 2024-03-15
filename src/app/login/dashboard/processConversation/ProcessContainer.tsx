"use client";

import React, { useId, useState } from "react";
import {
  useMantineColorScheme,
  Container,
  Stack,
  Text,
  Grid,
} from "@mantine/core";
import { DndContext } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { DashboardProcessListItems } from "@/interface/interface";
import { dashboardProcessList } from "@/data/dashboardProcessList";
import { DashboardProcessListItem } from "./DashboardProcessListItem";
import { GeneralDivider } from "@/components/GeneralDivider";

export default function ProcessContainer() {
  const id = useId();
  const [itemsTable, setItemsTable] =
    useState<DashboardProcessListItems[]>(dashboardProcessList);
  const { colorScheme } = useMantineColorScheme();

  const rows = itemsTable.map((item) => {
    const { id, process, today, yesterday, processTitle } = item;
    return (
      <Stack key={id} gap={1}>
        <DashboardProcessListItem
          processTitle={processTitle}
          yesterday={yesterday}
          process={process}
          today={today}
          key={id}
          id={id}
        />
        <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
      </Stack>
    );
  });
  /*

*/
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
    <Stack gap={2} p={0}>
      <Stack gap={1}>
        <Grid gutter="xs" style={{ width: "100%", paddingRight: "0.4rem" }}>
          <Grid.Col span={2}></Grid.Col>
          <Grid.Col span={6}>
            <Text
              styles={(theme) => ({
                root: {
                  textAlign: "center",
                  color:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[3]
                      : theme.colors.darkTheme[2],
                  cursor: "default",
                },
              })}
            >
              Proceso
            </Text>
          </Grid.Col>
          <Grid.Col span={2}>
            <Text
              styles={(theme) => ({
                root: {
                  textAlign: "center",
                  color:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[3]
                      : theme.colors.darkTheme[2],
                  cursor: "default",
                },
              })}
            >
              Hoy
            </Text>
          </Grid.Col>
          <Grid.Col span={2}>
            <Text
              styles={(theme) => ({
                root: {
                  textAlign: "center",
                  color:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[3]
                      : theme.colors.darkTheme[2],
                  cursor: "default",
                },
              })}
            >
              Ayer
            </Text>
          </Grid.Col>
        </Grid>
        <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
      </Stack>
      <DndContext
        id={id}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext items={itemsTable}>
          <Container style={{ maxWidth: "100%", width: "100%", padding: "0" }}>
            {rows}
          </Container>
        </SortableContext>
      </DndContext>
    </Stack>
  );
}
