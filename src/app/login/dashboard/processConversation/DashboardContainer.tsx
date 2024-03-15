"use client";

import React from "react";
import { DashboardProcessListContainer } from "./DashboardProcessListContainer";
import { DashboardChartContainer } from "../charts/DashboardChartContainer";
import { Grid, ScrollArea, Stack } from "@mantine/core";
import InsideContainer from "@/components/container/InsideContainer";
import heightViewClass from "@/styles/height-view.module.css";
import { data, tmrArray, tmrPerHour } from "@/data/socialMediaData";
import { ProcessedConversationContainer } from "./ProcessedConversationContainer";
import { DonutChartContainer } from "../charts/DonutChartContainer";
import TMRChartContainer from "../charts/TMRChartContainer";

export default function DashboardContainer() {
  return (
    <InsideContainer
      withBackground
      offset={118}
      withBorder
      key={crypto.randomUUID()}
    >
      <ScrollArea
        offsetScrollbars
        scrollbarSize={2}
        classNames={{ root: heightViewClass.InsideContainer_scrollarea }}
      >
        <Grid gutter="xs" style={{ padding: "1rem" }}>
          <Grid.Col span={8.5}>
            <Stack gap={"xs"} style={{ height: "100%" }}>
              <ProcessedConversationContainer />
              <DashboardChartContainer
                dataArr={data}
                title="Puntuacion por Red Social"
              />
            </Stack>
          </Grid.Col>
          <Grid.Col span={3.5}>
            <DashboardProcessListContainer key={crypto.randomUUID()} />
          </Grid.Col>
          <Grid.Col span={3.5}><DonutChartContainer /></Grid.Col>
          <Grid.Col span={8.5}>
            <DashboardChartContainer
              dataArr={tmrArray}
              title="Tiempo medio de Respuesta"
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <TMRChartContainer dataArr={tmrPerHour} title="TMR" />
          </Grid.Col>
        </Grid>
      </ScrollArea>
    </InsideContainer>
  );
}
