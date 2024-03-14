"use client";

import LineChart from "@/components/charts/LineChart";
import { ContainerInside } from "@/components/container/ContainerInside";
import {
  FaChartLine,
  FaChartColumn /* HiOutlineDotsVertical */,
} from "@/icons";
import {
  useMantineColorScheme,
  Center,
  Stack,
  Title,
  Flex,
  Switch,
  Box,
} from "@mantine/core";
// import classes from "@/styles/dashboard.module.css";
import { useState } from "react";
import { BarChart } from "@/components/charts/BarChart";

interface DashboardChartContainerProps {
  dataArr: any[];
  title: string;
}

export const DashboardChartContainer = ({
  dataArr,
  title,
}: DashboardChartContainerProps) => {
  const { colorScheme } = useMantineColorScheme();
  // const [chartType, setChartType] = useState<boolean>(false);

  const [checked, setChecked] = useState<boolean>(false);
  /* function XAxisDescription(data: socialMediaData[]) {
    return data.map((data) => {
      return {
        ...data,
        date: data.date.slice(0, 3),
      };
    });
  } */

  // console.log(chartType);
  return (
    <ContainerInside allWhite width="100%" withBorder>
      <Stack gap={12} style={{ /* padding: "0.5rem 1rem" */ padding: "0" }}>
        <Flex
          justify={"space-between"}
          align={"center"}
          style={{ padding: "0 1rem", marginTop: "1rem" }}
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? `${theme.colors.lightTheme[3]}`
                  : `${theme.colors.darkTheme[2]}`,
            },
          })}
        >
          <Title order={2}>{title}</Title>

          <Flex gap={6} align={"center"}>
            <Center
              styles={(theme) => ({
                root: {
                  color: checked
                    ? colorScheme === "light"
                      ? `${theme.colors.lightTheme[3]}`
                      : `${theme.colors.darkTheme[2]}`
                    : colorScheme === "light"
                      ? `${theme.colors.lightTheme[6]}`
                      : `${theme.colors.darkTheme[1]}`,
                  fontSize: "1.3rem",
                },
              })}
            >
              <FaChartLine />
            </Center>
            <Switch
              size="md"
              onLabel="Barras"
              offLabel="Lineas"
              checked={checked}
              onChange={(event) => setChecked(event.currentTarget.checked)}
              styles={(theme) => ({
                track: {
                  backgroundColor: checked
                    ? colorScheme === "light"
                      ? `${theme.colors.lightTheme[6]}`
                      : `${theme.colors.darkTheme[1]}`
                    : "",
                },
                trackLabel: {
                  color: checked
                    ? colorScheme === "light"
                      ? `${theme.colors.lightTheme[0]}`
                      : `${theme.colors.darkTheme[10]}`
                    : "",
                },
              })}
            />
            <Center
              styles={(theme) => ({
                root: {
                  color: !checked
                    ? colorScheme === "light"
                      ? `${theme.colors.lightTheme[3]}`
                      : `${theme.colors.darkTheme[2]}`
                    : colorScheme === "light"
                      ? `${theme.colors.lightTheme[6]}`
                      : `${theme.colors.darkTheme[1]}`,
                  fontSize: "1.3rem",
                },
              })}
            >
              <FaChartColumn />
            </Center>
          </Flex>
        </Flex>
        {!checked ? (
          <Box style={{ paddingTop: "1rem" }}>
            <LineChart key={crypto.randomUUID()} />
          </Box>
        ) : (
          <Box style={{ paddingTop: "1rem" }}>
            <BarChart key={crypto.randomUUID()} />
          </Box>
        )}
      </Stack>
    </ContainerInside>
  );
};

{
  /*
<Menu
  shadow="md"
  width={200}
  position="right-start"
  offset={5}
  withArrow
  arrowPosition="center"
  styles={(theme) => ({
    itemLabel: {
      color:
        colorScheme === "light"
          ? `${theme.colors.lightTheme[3]}`
          : `${theme.colors.darkTheme[2]}`,
    },
    itemSection: {
      color:
        colorScheme === "light"
          ? `${theme.colors.lightTheme[6]}`
          : `${theme.colors.darkTheme[1]}`,
      fontSize: "1.3rem",
      marginRight: "0.5rem",
    },
    label: {
      color:
        colorScheme === "light"
          ? `${theme.colors.lightTheme[3]}`
          : `${theme.colors.darkTheme[2]}`,
      fontSize: "0.9rem",
    },
  })}
  classNames={{
    dropdown:
      colorScheme === "light"
        ? classes.menuDropdown
        : classes.menuDropdown_dark,
    item:
      colorScheme === "light"
        ? classes.menuDropdown_item
        : classes.menuDropdown_item_dark,
  }}
>
  <Menu.Target>
    <Center>
      <HiOutlineDotsVertical
        className={
          colorScheme === "light"
            ? classes.verticalDots
            : classes.verticalDots_dark
        }
      />
    </Center>
  </Menu.Target>
  <Menu.Dropdown>
    <Menu.Label>Tipo de Grafica</Menu.Label>
    <Menu.Divider />
    <Menu.Item
      leftSection={<FaChartLine />}
      onClick={() => setChartType(false)}
    >
      Grafica de Lineas
    </Menu.Item>
    <Menu.Item
      leftSection={<FaChartColumn />}
      onClick={() => setChartType(true)}
    >
      Grafica de Barras
    </Menu.Item>
  </Menu.Dropdown>
</Menu>
*/
}

/*
<BarChart
            h={400}
            withLegend
            legendProps={{ verticalAlign: "bottom", height: 50 }}
            data={dataArr}
            dataKey="date"
            series={[
              { name: "Instagram", color: "pink.6" },
              { name: "Facebook", color: "blue.6" },
              { name: "Whatsapp", color: "teal.6" },
            ]}
            tickLine="xy"
            gridAxis="xy"
            tooltipProps={{
              content: ({ label, payload }) => (
                <ChartTooltip label={label} payload={payload} />
              ),
            }}
            tooltipAnimationDuration={200}
            valueFormatter={(value) =>
              new Intl.NumberFormat("es-VE").format(value)
            }
            yAxisProps={{ domain: [0, 6] }}
            // referenceLines={[{ y: 3200, label: "Meta", color: "red.6" }]}
            styles={(theme) => ({
              tooltipBody: { backgroundColor: "red" },
              tooltip: { backgroundColor: "blue", padding: "0.5rem" },
              legend: {
                display: "flex",
                gap: "1rem",
                justifyContent: "end",
                paddingTop: "0.5rem",
                marginLeft: "1.5rem",
              },
              root: {
                padding: "0.5rem 1rem 0.5rem 0",
                marginLeft: "-1.5rem",
                color:
                  colorScheme === "light"
                    ? `${theme.colors.lightTheme[3]}`
                    : `${theme.colors.darkTheme[2]}`,
              },
              legendItem: {
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              },
              axis: {
                color:
                  colorScheme === "light"
                    ? `${theme.colors.lightTheme[3]}`
                    : `${theme.colors.darkTheme[2]}`,
              },
            })}
          />
*/
