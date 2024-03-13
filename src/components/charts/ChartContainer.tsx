/* eslint-disable no-unreachable */
"use client";

// import { ChartTooltip } from "./ChartTooltip";
import { Container } from "@mantine/core";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { months } from "@/data/calendarDaysAndMonth";

/* const data = [
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
]; */
const options = {
  responsive: true,
  tension: 0.4,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = months;
const dataLine = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Meta Planteada",
      data: labels.map(() => faker.number.int({ min: 0, max: 3500 })),
      borderColor: "rgb(216, 99, 255)",
      backgroundColor: "rgba(216, 99, 255, 0.5)",
    },
    {
      fill: true,
      label: "Ventas Actuales",
      data: months.map(() => faker.number.int({ min: 0, max: 3500 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

/* const seriesArr = [
  { name: "Meta Planteada", color: "indigo.6" },
  { name: "Ventas Actuales", color: "green.6" },
  { name: "r: "teal.6" },
];
interface SeriesArray {
  name: string;
  color: string;
} */

export const ChartContainer = () => {
  /* const [value, setValue] = useState<string[]>([]);
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
  }, [value]); */
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

  return (
    <Container style={{ maxWidth: "100%", width: "100%" }}>
      {/* <AreaChart
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
        // yAxisProps={{ domain: [0, 3500] }}
        yAxisProps={<YAxis type="number" domain={[0, 2000]} />}
        referenceLines={[{ y: 3200, label: "Meta", color: "red.6" }]}
        styles={(theme) => ({
          root: { padding: "1rem 1rem 0 0" },
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
      </Checkbox.Group> */}
      <Line options={options} data={dataLine} />
    </Container>
  );
};
