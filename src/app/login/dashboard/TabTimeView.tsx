"use client";

import { Flex, Tabs, useMantineColorScheme } from "@mantine/core";
import React from "react";
import classes from "@/styles/dashboard.module.css";
import { TaskContainer } from "./tasks/TaskContainer";

export const TabTimeView = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex align={"center"} justify={"space-between"}>
      <Tabs
        variant="pills"
        defaultValue="Mes"
        style={{ width: "100%" }}
        classNames={{
          tab:
            colorScheme === "light"
              ? classes.tabViewList
              : classes.tabViewList_dark,
        }}
      >
        <Tabs.List justify="center">
          <Tabs.Tab value="Mes">Mes</Tabs.Tab>
          <Tabs.Tab value="Semana">Semana</Tabs.Tab>
          <Tabs.Tab value="Dia">Dia</Tabs.Tab>
          <Tabs.Tab value="Pendientes">Pendientes</Tabs.Tab>
          <Tabs.Tab value="Por Iniciar">Por Iniciar</Tabs.Tab>
          <Tabs.Tab value="Completados">Completados</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <TaskContainer />
    </Flex>
  );
};
