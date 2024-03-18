import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function DonutChart() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Total", "Generacion de RCV", "Clientes captados"],
    datasets: [
      {
        label: "Total",
        data: [120],
        backgroundColor: ["rgba(255, 99, 132, 0.5)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
        circumference: (120 * 360) / 150,
      },
      {
        label: "Generacion de RCV",
        data: [30],
        backgroundColor: ["rgba(136, 132, 216, 0.5)"],
        borderColor: ["rgba(136, 132, 216, 1)"],
        borderWidth: 1,
        circumference: (30 * 360) / 50,
      },
      {
        label: "Clientes captados",
        data: [80],
        backgroundColor: ["rgba(130, 202, 157, 0.5)"],
        borderColor: ["rgba(130, 202, 157, 1)"],
        borderWidth: 1,
        circumference: (80 * 360) / 100,
      },
    ],
  };
  const options = {
    responsive: true,
    tension: 0.4,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };
  return <Doughnut data={data} options={options} />;
}
