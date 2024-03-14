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

export const BarChart = () => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
  const labels = months;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
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
        backgroundColor: "rgba(132, 0, 179, 0.5)",
      },
      {
        label: "Ventas Actuales",
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: "rgba(0, 102, 168, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};
