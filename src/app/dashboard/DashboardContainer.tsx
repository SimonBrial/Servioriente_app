"use client";

import React from "react";
import { DashboardProcessListContainer } from "./DashboardProcessListContainer";
import { DashboardChartContainer } from "./DashboardChartContainer";
import { Grid, ScrollArea, Stack } from "@mantine/core";
import InsideContainer from "@/components/container/InsideContainer";
import heightViewClass from "@/styles/heightView.module.css";
import { data, tmrArry, tmrPerHour } from "@/data/socialMediaData";
import { ProcessedConversationContainer } from "./ProcessedConversationContainer";
import { DonutChartContainer } from "./DonutChartContainer";
import { TMRChart } from "./TMRChart";

export const DashboardContainer = () => {
  return (
    <InsideContainer withBackground offset={112} withBorder>
      <ScrollArea
        offsetScrollbars
        scrollbarSize={2}
        classNames={{ root: heightViewClass.drawer_scrollarea }}
      >
        <Grid gutter="xs" style={{ padding: "1rem" }}>
          <Grid.Col span={8.5}>
            <Stack gap={"xs"}>
              <ProcessedConversationContainer />
              <DashboardChartContainer
                dataArr={data}
                title="Puntuacion por Red Social"
              />
            </Stack>
          </Grid.Col>
          <Grid.Col span={3.5}>
            <DashboardProcessListContainer />
          </Grid.Col>
          <Grid.Col span={4}>
            <DonutChartContainer />
          </Grid.Col>
          <Grid.Col span={8}>
            <DashboardChartContainer
              dataArr={tmrArry}
              title="Tiempo medio de Respuesta"
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <TMRChart
              dataArr={tmrPerHour}
              title="TMR"
            />
          </Grid.Col>
          {/*
          <Grid.Col span={4}>4</Grid.Col>
          <Grid.Col span={4}>5</Grid.Col> */}
        </Grid>

        {/* <DonutChartContainer /> */}
      </ScrollArea>
    </InsideContainer>
  );
};
