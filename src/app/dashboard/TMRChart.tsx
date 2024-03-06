"use client";

import { ChartTooltip } from "@/components/charts/ChartTooltip";
import { ContainerInside } from "@/components/container/ContainerInside";
import { FaChartColumn, FaChartLine, /* HiOutlineDotsVertical */ } from "@/icons";
import { AreaChart, BarChart } from "@mantine/charts";
import {
  useMantineColorScheme,
  Center,
  Select,
  Switch,
  Stack,
  Title,
  Flex,
  Text,
} from "@mantine/core";
import { useState } from "react";
// import classes from "@/styles/dashboard.module.css";

interface DashboardChartContainerProps {
  dataArr: any[];
  title: string;
}

export const TMRChart = ({ dataArr, title }: DashboardChartContainerProps) => {
  const { colorScheme } = useMantineColorScheme();
  // const [chartType, setChartType] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <ContainerInside allWhite width="100%" withBorder>
      <Stack gap={12} style={{ /* padding: "0.5rem 1rem" */ padding: "0" }}>
        <Flex
          justify={"space-between"}
          style={{ padding: "0 1rem" }}
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? `${theme.colors.lightTheme[3]}`
                  : `${theme.colors.darkTheme[2]}`,
            },
          })}
        >
          <Flex align={"end"} gap={6}>
            <Title order={2}>{title}</Title>
            <Text>(Por hora)</Text>
          </Flex>
          <Flex gap={12}>
            <Select
              variant="unstyled"
              allowDeselect={false}
              defaultValue={["Mario Hurtado", "Simon Briceño"][0]}
              placeholder="Selecciona un admin"
              data={["Mario Hurtado", "Simon Briceño"]}
              styles={(theme) => ({
                root: { width: "100%" },
                input: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[3]}`
                      : `${theme.colors.darkTheme[2]}`,
                  width: "100%",
                  fontSize: "0.8rem",
                },
                section: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[3]}`
                      : `${theme.colors.darkTheme[2]}`,
                },
                options: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[3]}`
                      : `${theme.colors.darkTheme[2]}`,
                },
              })}
            />
            {/* <Menu
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
            </Menu> */}
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
        </Flex>
        {!checked ? (
          <AreaChart
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
            curveType="monotone"
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
            connectNulls={false}
          />
        ) : (
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
        )}
      </Stack>
    </ContainerInside>
  );
};