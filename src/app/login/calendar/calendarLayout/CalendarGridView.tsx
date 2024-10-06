"use client";

import InsideContainer from "@/components/container/InsideContainer";
import CalendarContainer from "./calendarStructure/CalendarContainer";
import { CountIndicator } from "@/components/CountIndicator";
import { Box, Container, Flex, Stack } from "@mantine/core";
import { HiOutlineCalendar } from "@/icons";
import { BtnFilter } from "@/components/buttons/BtnFilter";
import CalendarFilterLayout from "../layout/CalendarFilterLayout";
import { BtnReportGenerate } from "@/components/buttons/BtnReportGenerate";
import BtnAdd from "@/components/buttons/BtnAdd";
import CalendarNewEventLayout from "../layout/CalendarNewEventLayout";
import { AutoCompleteInput } from "@/components/inputs/AutoCompleteInput";
import { useCalendarStore } from "@/store/calendar-store";

export const CalendarGridView = () => {
  const { fnShowCreateEventLayout, showCreateEventLayout, eventsArray } = useCalendarStore();
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
            count={eventsArray.length}
            description="Total de eventos para el mes"
            iconSection={<HiOutlineCalendar />}
          />
          <AutoCompleteInput
            dataFilter={[]}
            fnResults={() => {}}
            fnSearchTerm={() => {}}
            term=""
          />
          <BtnFilter>
            <CalendarFilterLayout />
          </BtnFilter>
          <Box style={{ height: "100%", width: "25%" }}>
            <BtnReportGenerate />
          </Box>
          <Box>
            <BtnAdd
              // title="Evento Creado"

              // color="green"
              // description="El evento ha sido añadido al calendario 📆!"
              // labelBtn="Crear Evento"
              iconTag="add-event"
              label="Nuevo Evento"
              fnShow={() => fnShowCreateEventLayout(showCreateEventLayout)}
              showDrawer={showCreateEventLayout}
            >
              <CalendarNewEventLayout />
            </BtnAdd>
          </Box>
          {/* <ViewCalendarSelection /> */}
        </Flex>
        {/* <MonthNavigationBar /> */}
        <InsideContainer offset={110} withBackground withBorder>
          <CalendarContainer />
        </InsideContainer>
      </Stack>
    </Container>
  );
};
