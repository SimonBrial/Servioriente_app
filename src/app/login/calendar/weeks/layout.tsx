import TabsNavigation from "@/components/TabsNavigation";
import { ContainerInside } from "@/components/container/ContainerInside";
import { HiOutlineCalendar } from "@/icons";
import { Container, Flex, Stack } from "@mantine/core";
import { ColumnEventList } from "../calendarLayout/calendarStructure/columnView/ColumnEventList";
import { MonthNavigationBar } from "../MonthNavegationBar";

export default function layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const calendarSections = [
    {
      value: "Semana 1",
      icon: <HiOutlineCalendar />,
      dir: "/calendar/weeks",
    },
    {
      value: "Semana 2",
      icon: <HiOutlineCalendar />,
      dir: "/calendar/weeks/02",
    },
    {
      value: "Semana 3",
      icon: <HiOutlineCalendar />,
      dir: "/calendar/weeks/03",
    },
    {
      value: "Semana 4",
      icon: <HiOutlineCalendar />,
      dir: "/calendar/weeks/04",
    },
  ];
  return (
    <Container
      style={{ maxWidth: "100%", width: "100%", margin: "0", padding: "0" }}
    >
      <Stack gap={8}>
        <MonthNavigationBar />
        <Flex gap={16} p={0}>
          <ContainerInside width="65%" allWhite={false} withBorder>
            <Stack gap={4}>
              <TabsNavigation sectionsArray={calendarSections} orientation />
              {children}
            </Stack>
          </ContainerInside>
          <ContainerInside width="35%" allWhite={false} withBorder>
            <ColumnEventList />
          </ContainerInside>
        </Flex>
      </Stack>
    </Container>
  );
}
