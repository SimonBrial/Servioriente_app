"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { useMantineColorScheme } from "@mantine/core";

export default function TMRLineChart() {
  const { colorScheme } = useMantineColorScheme();
  ChartJS.register(
    CategoryScale,
    PointElement,
    LineElement,
    LinearScale,
    Tooltip,
    Filler,
    Legend,
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
        gridLines: {
          display: true,
          color: "black",
          borderDash: [5, 5],
        },
      },
      x: {
        border: {
          color: colorScheme === "light" ? "#696969" : "#EFF3F5",
          dash: [10, 5],
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
  const labels = [
    "07:00AM",
    "08:00AM",
    "09:00AM",
    "10:00AM",
    "11:00AM",
    "12:00PM",
    "01:00PM",
    "02:00PM",
    "03:00PM",
    "04:00PM",
    "06:00PM",
  ];
  const dataLine = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Instagram",
        data: labels.map(() => faker.number.int({ min: 0, max: 3500 })),
        borderColor: "rgb(253, 14, 120)",
        backgroundColor: (context: any) => {
          const bgColor = [
            "rgba(253, 14, 120, 0.1)",
            "rgba(253, 14, 120, 0.2)",
            "rgba(253, 14, 120, 0.3)",
            "rgba(253, 14, 120, 0.4)",
            "rgba(253, 14, 120, 0.5)",
            "rgba(253, 14, 120, 0.6)",
            "rgba(253, 14, 120, 0.7)",
            "rgba(253, 14, 120, 0.8)",
            "rgba(253, 14, 120, 0.9)",
            "rgba(253, 14, 120,1)",
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
        label: "Facebook",
        data: labels.map(() => faker.number.int({ min: 0, max: 3500 })),
        borderColor: "#35a2eb",
        backgroundColor: (context: any) => {
          const bgColor = [
            "rgba(206, 236, 255, 0.1)",
            "rgba(162, 213, 249, 0.2)",
            "rgba(112, 190, 242, 0.3)",
            "rgba(72, 171, 237, 0.4)",
            "rgba(45, 158, 234, 0.5)",
            "rgba(45, 158, 234, 0.6)",
            "rgba(23, 153, 234, 0.7)",
            "rgba(0, 133, 210, 0.8)",
            "rgba(0, 116, 188, 0.9)",
            "rgba(0, 102, 168, 1)",
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
        label: "Whatsapp",
        data: labels.map(() => faker.number.int({ min: 0, max: 3500 })),
        borderColor: "rgba(0, 188, 38, 1)",
        backgroundColor: (context: any) => {
          const bgColor = [
            "rgba(0, 188, 38, 0.1)",
            "rgba(0, 188, 38, 0.2)",
            "rgba(0, 188, 38, 0.3)",
            "rgba(0, 188, 38, 0.4)",
            "rgba(0, 188, 38, 0.5)",
            "rgba(0, 188, 38, 0.6)",
            "rgba(0, 188, 38, 0.7)",
            "rgba(0, 188, 38, 0.8)",
            "rgba(0, 188, 38, 0.9)",
            "rgba(0, 188, 38, 1)",
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

  return <Line options={options} data={dataLine} />;
}
