"use client";

import { ContainerInside } from "@/components/container/ContainerInside";
import { Box, Stack, Table, Title, useMantineColorScheme } from "@mantine/core";
import classes from "@/styles/dashboard.module.css";

import DonutChart from "@/components/charts/DonutChart";
import { useDashboardStore } from "@/store/dashboard-store";

/*
Para determinar el valor total de la grafica a mostrar, se deben conocer el valor de referencia y el valor a mostrar
----------------------------------------------------------------
        X = ((Valor a mostrar) * (360 deg))/ Valor de referencia
----------------------------------------------------------------
*/

// Se deben evaluar mejor las estadisticas, ya que faltan datos por escalar y procesar, para indicar los vlores reales

// console.log(totalData);

/* const colors01 = ["rgb(177, 130, 202)", "transparent"]; // Data01
const colors02 = ["rgb(136, 132, 216)", "transparent"]; // Data02
const colors03 = ["rgb(130, 202, 157)", "transparent"]; // Data03 */

export const DonutChartContainer = () => {
  const { colorScheme } = useMantineColorScheme();
  const { DonutData } = useDashboardStore();
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
        <Box style={{ paddingBottom: "1rem", width: "65%" }}>
          <DonutChart />
        </Box>
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
              ? classes.donut_row
              : classes.donut_row_dark,
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
          {DonutData.map((element) => (
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

{
  /* (ctx: any) => {
        const dataPoints = ctx.chart.data.datasets.map((dataset: any) => {
          return dataset.data[0];
        });
        max = Math.max(...dataPoints);
        return (ctx.dataset.data / max) * 360;
      }, */
}

{
  /*
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
*/
}
