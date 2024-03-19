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
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { useMantineColorScheme } from "@mantine/core";

export default function TMRBarChart() {
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
  const data = {
    labels,
    datasets: [
      {
        label: "Instagram",
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: "rgba(253, 14, 120, 0.7)",
      },
      {
        label: "Facebook",
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: "rgba(0, 102, 168, 0.7)",
      },
      {
        label: "Whatsapp",
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: "rgba(0, 188, 38, 0.7)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
