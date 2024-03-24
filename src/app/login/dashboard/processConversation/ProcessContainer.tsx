"use client";

import React, { RefObject } from "react";
import {
  useMantineColorScheme,
  Container,
  Stack,
  Text,
  Grid,
} from "@mantine/core";
import { DashboardProcessListItems } from "@/interface/interface";
import { dashboardProcessList } from "@/data/dashboardProcessList";
import { DashboardProcessListItem } from "./DashboardProcessListItem";
import { GeneralDivider } from "@/components/GeneralDivider";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { animations } from "@formkit/drag-and-drop";

export default function ProcessContainer() {
  const { colorScheme } = useMantineColorScheme();
  const [parent, items] = useDragAndDrop<
  HTMLUListElement,
  DashboardProcessListItems
  >(dashboardProcessList, {
    plugins: [animations()],
    dragHandle: ".handler",
  });

  const rows = items.map((item) => {
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
      <Container
        style={{ maxWidth: "100%", width: "100%", padding: "0" }}
        ref={parent as RefObject<any>}
      >
        {rows}
      </Container>
    </Stack>
  );
}
