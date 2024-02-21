import { Container, Flex, Stack } from "@mantine/core";
import React from "react";
import { CountIndicator } from "../../components/CountIndicator";
import { HiOutlineCalendar } from "@/icons";
import { AutoCompleteInput } from "@/components/inputs/AutoCompleteInput";
import { BtnFilter } from "@/components/buttons/BtnFilter";
import { BtnReportGenerate } from "@/components/buttons/BtnReportGenerate";
import { ViewCalendarSelection } from "./ViewCalendarSelection";
import BtnAdd from "@/components/buttons/BtnAdd";
import { MonthNavigationBar } from "./MonthNavegationBar";

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
          <BtnFilter>Prueba</BtnFilter>
          <BtnReportGenerate>Prueba</BtnReportGenerate>
          <BtnAdd iconTag="add-event" label="Nuevo Evento">
            Prueba Prueba Prueba
          </BtnAdd>
          <ViewCalendarSelection />
        </Flex>
        {/* <MonthNavigationBar /> */}
        {children}
      </Stack>
    </Container>
  );
}
