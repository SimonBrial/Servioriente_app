/* eslint-disable no-unreachable */
"use client";

import { AreaChart } from "@mantine/charts";
import React, { useEffect, useState } from "react";
import { ChartTooltip } from "./ChartTooltip";
import { Checkbox, Flex } from "@mantine/core";

const data = [
  {
    date: "Mar 22",
    "Meta Planteada": 2890,
    "Ventas Actuales": 2338,
  },
  {
    date: "Mar 23",
    "Meta Planteada": 2756,
    "Ventas Actuales": 2103,
  },
  {
    date: "Mar 24",
    "Meta Planteada": 3180,
    "Ventas Actuales": 986,
  },
  {
    date: "Mar 25",
    "Meta Planteada": 3140,
    "Ventas Actuales": 2108,
  },
  {
    date: "Mar 26",
    "Meta Planteada": 3129,
    "Ventas Actuales": 1726,
  },
  {
    date: "Mar 27",
  },
  {
    date: "Mar 28",
    "Meta Planteada": 3139,
    "Ventas Actuales": 1736,
  },
  {
    date: "Mar 29",
    "Meta Planteada": 2756,
    "Ventas Actuales": 2103,
  },
];

const seriesArr = [
  { name: "Meta Planteada", color: "indigo.6" },
  { name: "Ventas Actuales", color: "green.6" },
  /* { name: "r: "teal.6" }, */
];
interface SeriesArray {
  name: string;
  color: string;
}

export const ChartContainer = () => {
  const [value, setValue] = useState<string[]>([]);
  const [series, setSeries] = useState<SeriesArray[]>(seriesArr);

  useEffect(() => {
    if (value === undefined || value.length === 0 || value.length === 2) {
      setSeries(seriesArr);
    }

    if (value.length < 2) {
      seriesArr.filter((serie: SeriesArray) => {
        if (serie.name.toLowerCase() === value[0]) {
          setSeries([serie]);
        }
      });
    }
  }, [value]);

  return (
    <>
      <AreaChart
        h={400}
        withLegend
        legendProps={{ verticalAlign: "bottom", height: 50 }}
        data={data}
        dataKey="date"
        series={series}
        curveType="monotone"
        tickLine="xy"
        gridAxis="xy"
        tooltipProps={{
          content: ({ label, payload }) => (
            <ChartTooltip label={label} payload={payload} />
          ),
        }}
        tooltipAnimationDuration={200}
        valueFormatter={(value) => new Intl.NumberFormat("es-VE").format(value)}
        yAxisProps={{ domain: [0, 3500] }}
        referenceLines={[{ y: 3200, label: "Meta", color: "red.6" }]}
        styles={(theme) => ({
          tooltipBody: { backgroundColor: "red" },
          tooltip: { backgroundColor: "blue", padding: "0.5rem" },
          legend: {
            display: "flex",
            gap: "1rem",
            justifyContent: "end",
            padding: "0.5rem",
          },
        })}
        // connectNulls={false}
      />
      <Checkbox.Group value={value} onChange={setValue}>
        <Flex gap={8} justify={"center"}>
          <Checkbox value={"meta planteada"} label={"Meta Planteada"} />
          <Checkbox value={"ventas actuales"} label={"Ventas Actuales"} />
        </Flex>
      </Checkbox.Group>
    </>
  );
};
