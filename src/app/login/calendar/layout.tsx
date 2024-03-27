import { Box, Container, Flex, Stack } from "@mantine/core";
import React from "react";
import { CountIndicator } from "@/components/CountIndicator";
import { HiOutlineCalendar } from "@/icons";
import { AutoCompleteInput } from "@/components/inputs/AutoCompleteInput";
import { BtnFilter } from "@/components/buttons/BtnFilter";
import { BtnReportGenerate } from "@/components/buttons/BtnReportGenerate";
import { ViewCalendarSelection } from "./ViewCalendarSelection";
import BtnAdd from "@/components/buttons/BtnAdd";
import CalendarFilterLayout from "./CalendarFilterLayout";
import CalendarNewEventLayout from "./CalendarNewEventLayout";
// import { MonthNavigationBar } from "./MonthNavegationBar";

export default function layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Container
      p={0}
      style={{
        height: "2.5rem",
        maxWidth: "100%",
      }}
    >
      <Stack p={2} gap={6}>
        <Flex
          gap={6}
          align={"center"}
          style={{ height: "2.5rem", width: "100%" }}
        >
          <CountIndicator
            count={8}
            description="Total de eventos para el mes"
            iconSection={<HiOutlineCalendar />}
          />
          <AutoCompleteInput />
          <BtnFilter>
            <CalendarFilterLayout />
          </BtnFilter>
          <BtnReportGenerate />
          <Box>
            <BtnAdd
              title="Evento Creado"
              color="green"
              description="El evento ha sido añadido al calendario 📆!"
              labelBtn="Crear Evento"
              iconTag="add-event"
              label="Nuevo Evento"
              key={crypto.randomUUID()}
              id={crypto.randomUUID()}
            >
              <CalendarNewEventLayout />
            </BtnAdd>
          </Box>
          <ViewCalendarSelection />
        </Flex>
        {/* <MonthNavigationBar /> */}
        {children}
      </Stack>
    </Container>
  );
}
