import TabsNavigation from "@/components/TabsNavigation";
import {
  AiOutlineFundProjectionScreen,
  MdOutlineEmojiEvents,
  MdOutlineSell,
  MdHistory,
} from "@/icons";
import { Container } from "@mantine/core";

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
    <Container p={0} style={{ maxWidth: "100%", width: "100%" }}>
      <TabsNavigation sectionsArray={metricsSections} orientation />
      {children}
    </Container>
  );
}
