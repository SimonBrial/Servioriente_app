"use client";

import { ContainerInside } from "@/components/container/ContainerInside";
import { Stack, Table, Title, useMantineColorScheme } from "@mantine/core";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import classes from "@/styles/dashboard.module.css";

/* const datadata = [
  {
    name: "18-24",
    uv: 21.47,
    pv: 2400,
    fill: "#291fdc",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#10c506",
  },
  {
    name: "30-34",
    uv: -15.69,
    pv: 1398,
    fill: "#22bcde",
  },
]; */

/*
Para determinar el valor total de la grafica a mostrar, se deben conocer el valor de referencia y el valor a mostrar
----------------------------------------------------------------
        X = ((Valor a mostrar) * (360 deg))/ Valor de referencia
----------------------------------------------------------------
*/

// Se deben evaluar mejor las estadisticas, ya que faltan datos por escalar y procesar, para indicar los vlores reales

const data01 = [
  {
    name: "Generacion de RCV",
    value: 80,
  },
  {
    name: "Falta",
    value: 20,
  },
];
const data02 = [
  {
    name: "Clientes captados",
    value: 30,
  },
  {
    name: "Falta",
    value: 20,
  },
];
const data03 = [
  {
    name: "Total",
    value: 120,
  },
  {
    name: "Falta",
    value: 40,
  },
];

const totalData = [
  {
    name: "Generacion de RCV",
    currentValue: 80,
    goal: 100,
  },
  {
    name: "Clientes captados",
    currentValue: 30,
    goal: 50,
  },
  {
    name: "Total",
    currentValue: 120,
    goal: 150,
  },
];
console.log(totalData);

const colors01 = ["#b182ca", "transparent"]; // Data01
const colors02 = ["#8884d8", "transparent"]; // Data02
const colors03 = ["#82ca9d", "transparent"]; // Data03

export const DonutChartContainer = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <ContainerInside allWhite width="100%" withBorder>
      <Stack gap={6} align="center">
        <Title
          order={1}
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? `${theme.colors.lightTheme[3]}`
                  : `${theme.colors.darkTheme[2]}`,
            },
          })}
        >
          Metas
        </Title>
        <PieChart width={300} height={250}>
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={59}
            fill="#95b71b"
            legendType="circle"
            inactiveShape
            label
            labelLine
          >
            {data03.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors01[index % colors01.length]}
                stroke={"transparent"}
              />
            ))}
          </Pie>
          <Pie
            data={data02}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={79}
            fill="#8884d8"
          >
            {data01.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors02[index % colors02.length]}
                stroke={"transparent"}
              />
            ))}
          </Pie>
          <Pie
            data={data03}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={99}
            fill="#82ca9d"
          >
            {data02.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors03[index % colors03.length]}
                stroke={"transparent"}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </Stack>
      {/* Aqui va la descripcion de la informacion mostrada en las graficas, son:
        - Generacion de RCV
        - Captacion de clientes
        - Total
      */}
      <Table
        // highlightOnHover
        classNames={{
          thead:
            colorScheme === "light"
              ? classes.dashboardItem_header
              : classes.dashboardItem_header_dark,
          tr:
            colorScheme === "light"
              ? classes.dashboardItem_row
              : classes.dashboardItem_row_dark,
          td:
            colorScheme === "light"
              ? classes.dashboardItem_row
              : classes.dashboardItem_row_dark,
        }}
        styles={{ td: { textAlign: "center" }, th: { textAlign: "center" } }}
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Meta</Table.Th>
            <Table.Th>Actual (%)</Table.Th>
            <Table.Th>Objetivo (%)</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {totalData.map((element) => (
            <Table.Tr key={crypto.randomUUID()}>
              <Table.Td>{element.name}</Table.Td>
              <Table.Td>{element.currentValue}</Table.Td>
              <Table.Td>{element.goal}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </ContainerInside>
  );
};
