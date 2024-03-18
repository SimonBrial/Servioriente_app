import { months } from "@/data/calendarDaysAndMonth";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { useMantineColorScheme } from "@mantine/core";

export const BarChart = () => {
  const { colorScheme } = useMantineColorScheme();
  ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
  const labels = months;

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
        text: "Chart.js Bar Chart",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Meta Planteada",
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: "rgba(132, 0, 179, 0.7)",
      },
      {
        label: "Ventas Actuales",
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: "rgba(0, 102, 168, 0.7)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};
