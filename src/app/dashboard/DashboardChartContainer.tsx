"use client";

import { ChartTooltip } from "@/components/charts/ChartTooltip";
import { ContainerInside } from "@/components/container/ContainerInside";
import { HiOutlineDotsVertical } from "@/icons";
import { AreaChart } from "@mantine/charts";
import {
  useMantineColorScheme,
  Center,
  Stack,
  Title,
  Flex,
} from "@mantine/core";

interface DashboardChartContainerProps {
  dataArr: any[];
  title: string;
}

export const DashboardChartContainer = ({
  dataArr,
  title,
}: DashboardChartContainerProps) => {
  const { colorScheme } = useMantineColorScheme();
  /* function XAxisDescription(data: socialMediaData[]) {
    return data.map((data) => {
      return {
        ...data,
        date: data.date.slice(0, 3),
      };
    });
  } */

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
          <Title order={2}>{title}</Title>
          <Center style={{ fontSize: "1.5rem" }}>
            <HiOutlineDotsVertical />
          </Center>
        </Flex>
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
      </Stack>
    </ContainerInside>
  );
};
