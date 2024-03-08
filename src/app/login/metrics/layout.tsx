import TabsNavigation from "@/components/TabsNavigation";
import MetricsContainer from "./MetricsContainer";
import {
  AiOutlineFundProjectionScreen,
  MdOutlineEmojiEvents,
  MdOutlineSell,
  MdHistory,
} from "@/icons";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const metricsSections = [
    {
      value: "Proyecciones",
      icon: <AiOutlineFundProjectionScreen />,
      dir: "/login/metrics",
    },
    {
      value: "Ventas",
      icon: <MdOutlineSell />,
      dir: "/login/metrics/sales",
    },
    {
      value: "Tareas",
      icon: <MdOutlineEmojiEvents />,
      dir: "/login/metrics/events",
    },
    {
      value: "Historial",
      icon: <MdHistory />,
      dir: "/login/metrics/history",
    },
  ];
  return (
    <MetricsContainer>
      <TabsNavigation sectionsArray={metricsSections} orientation />
      {children}
    </MetricsContainer>
  );
}
