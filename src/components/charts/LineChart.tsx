/* eslint-disable no-unreachable */
"use client";

// import { ChartTooltip } from "./ChartTooltip";
import { Container, useMantineColorScheme } from "@mantine/core";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { months } from "@/data/calendarDaysAndMonth";

const labels = months;
const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Meta Planteada",
      data: labels.map(() => faker.number.int({ min: 0, max: 3500 })),
      borderColor: "rgb(216, 99, 255)",
      backgroundColor: (context: any) => {
        const bgColor = [
          "rgba(254, 233, 255, 0.1)",
          "rgba(245, 207, 255, 0.2)",
          "rgba(231, 156, 255, 0.3)",
          "rgba(216, 100, 255, 0.4)",
          "rgba(205, 55, 254, 0.5)",
          "rgba(197, 26, 254, 0.6)",
          "rgba(194, 9, 255, 0.7)",
          "rgba(170, 0, 228, 0.8)",
          "rgba(152, 0, 203, 0.9)",
          "rgba(132, 0, 179, 1)",
        ].reverse();
        if (!context.chart.chartArea) return null;
        const {
          ctx,
          chartArea: { top, bottom },
        } = context.chart;
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
        const colorTraches = 1 / (bgColor.length - 1);
        for (let i = 0; i < bgColor.length - 1; i++) {
          gradientBg.addColorStop(0 + i * colorTraches, bgColor[i]);
        }
        return gradientBg;
      },
    },
    {
      fill: true,
      label: "Ventas Actuales",
      data: months.map(() => faker.number.int({ min: 0, max: 3500 })),
      borderColor: "#35a2eb",
      backgroundColor: (context: any) => {
        const bgColor = [
          "rgb(225, 248, 255, 0.0)",
          "rgb(206, 236, 255, 0.1)",
          "rgb(162, 213, 249, 0.2)",
          "rgb(112, 190, 242, 0.3)",
          "rgb(72, 171, 237, 0.4)",
          "rgb(45, 158, 234, 0.5)",
          "rgb(45, 158, 234, 0.6)",
          "rgba(23, 153, 234, 0.7)",
          "rgba(0, 133, 210, 0.8)",
          "rgba(0, 116, 188, 0.9)",
          "rgb(0, 102, 168, 1)",
        ].reverse();
        if (!context.chart.chartArea) return null;
        const {
          ctx,
          chartArea: { top, bottom },
        } = context.chart;
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
        const colorTraches = 1 / (bgColor.length - 1);
        for (let i = 0; i < bgColor.length - 1; i++) {
          gradientBg.addColorStop(0 + i * colorTraches, bgColor[i]);
        }
        return gradientBg;
      },
    },
  ],
};

export default function LineChart() {
  const { colorScheme } = useMantineColorScheme();
  ChartJS.register(
    CategoryScale,
    PointElement,
    LineElement,
    LinearScale,
    Tooltip,
    Filler,
    Legend,
    Title,
  );

  const options = {
    responsive: true,
    tension: 0.4,
    scales: {
      y: {
        border: {
          color: colorScheme === "light" ? "#696969" : "#EFF3F5",
          dash: [5, 5],
        },
        ticks: {
          color: colorScheme === "light" ? "#696969" : "#EFF3F5",
          beginAtZero: true,
        },
      },
      x: {
        border: {
          color: colorScheme === "light" ? "#696969" : "#EFF3F5",
          dash: [5, 5],
        },
        ticks: {
          color: colorScheme === "light" ? "#696969" : "#EFF3F5",
          beginAtZero: true,
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: colorScheme === "light" ? "#696969" : "#EFF3F5",
        },
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  return (
    <Container style={{ maxWidth: "100%", width: "100%" }}>
      <Line options={options} data={data} />
    </Container>
  );
}
