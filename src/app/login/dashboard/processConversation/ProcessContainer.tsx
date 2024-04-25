"use client";

import {
  useMantineColorScheme,
  Container,
  Stack,
  Text,
  Grid,
} from "@mantine/core";
import { DashboardProcessListItems } from "@/interface/interface";
import { DashboardProcessListItem } from "./DashboardProcessListItem";
import { GeneralDivider } from "@/components/GeneralDivider";
import {
  KeyboardSensor,
  PointerSensor,
  useSensors,
  DndContext,
  useSensor,
} from "@dnd-kit/core";
import {
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  SortableContext,
  arrayMove,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { useId, useState } from "react";
import TitleSimpleLayout from "@/components/layout/TitleSimpleLayout";
import { useDashboardStore } from "@/store/dashboard-store";

export default function ProcessContainer() {
  const { processData } = useDashboardStore();

  const idDnD = useId();
  const { colorScheme } = useMantineColorScheme();
  const [process, setProcess] =
    useState<DashboardProcessListItems[]>(processData);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!active.id !== over.id) {
      setProcess((process) => {
        const oldIndex = process.findIndex((p) => p.id === active.id);
        const newIndex = process.findIndex((p) => p.id === over.id);
        return arrayMove(process, oldIndex, newIndex);
      });
    }
  };

  const rows = process.map((p) => {
    const { id, process, today, yesterday, processTitle } = p;
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

  return (
    <Stack gap={2} p={0}>
      <TitleSimpleLayout title="Procesos" />
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
      <Container style={{ maxWidth: "100%", width: "100%", padding: "0" }}>
        <DndContext
          modifiers={[restrictToVerticalAxis]}
          onDragEnd={handleDragEnd}
          sensors={sensors}
          id={idDnD}
        >
          <SortableContext
            strategy={verticalListSortingStrategy}
            items={process}
          >
            {rows}
          </SortableContext>
        </DndContext>
      </Container>
    </Stack>
  );
}
