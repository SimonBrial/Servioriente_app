"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Container, ScrollArea, SimpleGrid } from "@mantine/core";
import { DayHeader } from "./DayHeader";
import { DayContainer } from "./DayContainer";
import { eventCardArray } from "@/data/eventCardsData";
import { useMediaQuery } from "@mantine/hooks";
import { weekDays /* months */ } from "@/data/calendarDaysAndMonth";
import { useState } from "react";

// TODO: https://fullcalendar.io/docs/react

// TODO: the weeks start on Sunday [0] - Saturday [6]
// TODO: Visualizar todo como si fuera un mes de 35 dias, asi se puede agregar elementos al principio o al final del arrglo completo
// TODO: Necesito determinar por cada mes, la cantidad de dias que tiene.
// TODO: Necesito determinar el dia de la semana de la fecha 1 de cada mes.
// TODO:Se deben rellenar con dias del siguiente y el anterior mes en el mes actual pero opacando su visibilidad.
// TODO:Debo indicar el actual resaltado de un color
// TODO:Se debe poder visualizar los meses siguientes anteriores del mes actual.
// TODO:Debe mostrarse en el navegador cada mes con sus dias determinados.
export const CalendarGridView = () => {
  const matches = useMediaQuery("(max-width: 1280px)");
  const [nav, setNav] = useState<number>(0);

  const dt = new Date(); // Creamos el objeto de new Date()
  const month = dt.getMonth(); // Se obtiene el mes actual
  const year = dt.getFullYear(); // Se obtiene el año actual

  const firstDayOfMonth = new Date(year, month, 1); // Para obtener el primer dia del mes

  const dateString = firstDayOfMonth.toLocaleString("es-VE", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }); // Wednesday, 11/1/2023 ---> PAra la configuracion de las fechar y la internalizacion

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const monthArray = [...Array(12).keys()]; // Para generar un array de longitud 12, corresponde a los meses del año
  const dayArray = [...Array(7).keys()]; // Para generar un array de longitud 7 que corresponde a los dias de la semana
  /* console.log(monthArray);
  console.log(dayArray); */

  const getFirstDayMonth = dateString.split(", ")[0];
  const days = weekDays.indexOf(getFirstDayMonth);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysAndMonthTotal = days + daysInMonth;
  const daysArr = new Array(daysAndMonthTotal);
  const day = dt.getDate();
  const lastDayOfLastMonth = new Date(year, month, 0).getDate();
  /* console.log("lastDayOfLastMonth: ", lastDayOfLastMonth);
  console.log("getFirstDayMonth: ", getFirstDayMonth);
  console.log("days: ", days);
  console.log("daysInMonth: ", daysInMonth);
  console.log("daysAndMonthTotal: ", daysAndMonthTotal);
  console.log("day: ", day);

  console.log("daysArr: ", daysArr); */
  function generateDays() {
    let divs = [];
    for (let i = 0; i <= daysInMonth - 1; i++) {
      const addedDay = i - days;
      if (i > days) {
        if (addedDay === day && nav === 0) {
          divs.push(
            <DayContainer
              dayNumber={addedDay}
              key={i}
              dayEventArray={eventCardArray}
              currentDay={true}
            />,
          );
        } else {
          console.log(lastDayOfLastMonth - days + i);
          divs.push(
            <DayContainer
              dayNumber={addedDay}
              key={i}
              dayEventArray={eventCardArray}
              currentDay={false}
            />,
          );
        }
      }
    }
    return divs;
  }
  return (
    <Container
      style={{
        maxWidth: "100%",
        width: "100%",
        padding: "0",
      }}
    >
      {/*
  <Flex gap={4} m={5} align={"center"}>
    <Button onClick={() => setNav(nav - 1)}>Previous</Button>
    <Button onClick={() => setNav(nav + 1)}>Next</Button>
    <Title order={3}>
      {months.find((str, index) => (nav === index ? str : ""))}
    </Title>
  </Flex> */}
      {/* <SimpleGrid
        style={{
          width: "100%",
          padding: "0",
          margin: "0",
        }}
        cols={7}
        spacing={0}
        verticalSpacing={0}
      >
        <DayHeader />
      </SimpleGrid>
      <ScrollArea scrollbarSize={2} h={matches ? 665 : 508} p={0}>
        <SimpleGrid cols={7} spacing={0} verticalSpacing={0} p={0}>
          {generateDays()}
        </SimpleGrid>
      </ScrollArea> */}
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "event 1", date: "2024-02-01" },
          { title: "event 2", date: "2024-02-02" },
        ]}
      />
    </Container>
  );
};
