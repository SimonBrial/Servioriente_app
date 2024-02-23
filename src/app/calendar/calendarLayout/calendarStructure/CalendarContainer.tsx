/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";

import { GeneralDivider } from "@/components/GeneralDivider";
import { IoChevronBack, IoChevronForward } from "@/icons";
import btnClasses from "@/styles/BtnStyles.module.css";
// import { months } from "@/data/calendarDaysAndMonth";

import {
  useMantineColorScheme,
  UnstyledButton,
  Container,
  Center,
  Stack,
  Flex,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import classes from "@/styles/calendar.module.css";
import InsideContainer from "@/components/container/InsideContainer";
import {
  areDateOnSameDay,
  getDateObjet,
  getDaysInMonth,
  getSortedDays,
  range,
} from "@/utils/calendarFunctions";
import { months, weekDays } from "@/data/calendarDaysAndMonth";
import { EventSmallCard } from "../gridView/EventSmallCard";
// import { DayHeader } from "../DayHeader";
/* import { DayContainer } from "../DayContainer";
import { calendarData } from "@/data/calendarData";
import { eventCardArray } from "@/data/eventCardsData"; */
// import { ContainerInside } from "@/components/container/ContainerInside";

export const CalendarContainer = ({
  startingDate,
  eventsArr,
}: {
  startingDate: Date;
  eventsArr: any[];
}) => {
  const { colorScheme } = useMantineColorScheme();
  const [currentMonth, setCurrentMonth] = useState(startingDate.getMonth());
  const [currentYear, setCurrentYear] = useState(startingDate.getFullYear());
  /* const [showPortal, setShowPortal] = useState(false);
  const [portalData, setPortalData] = useState({}); */

  function nextMonth() {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
  }

  function prevMonth() {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
  }

  return (
    <InsideContainer withBackground withBorder={false} offset={114}>
      <Container className={classes.calendarContainer}>
        <Stack style={{ width: "100%" }}>
          {/* -------------- Calendar's title -------------- */}
          <Container style={{ maxWidth: "100%", width: "100%", padding: "0" }}>
            <Stack gap={4} style={{ width: "100%" }}>
              <Flex gap={10} align={"center"}>
                <Flex gap={4}>
                  <UnstyledButton
                    onClick={prevMonth}
                    variant="white"
                    size={"lg"}
                    classNames={{
                      root:
                        colorScheme === "light"
                          ? btnClasses.btnMonth
                          : btnClasses.btnMonth_dark,
                    }}
                  >
                    <Center>
                      <IoChevronBack />
                    </Center>
                  </UnstyledButton>
                  <UnstyledButton
                    onClick={nextMonth}
                    variant="white"
                    size={"lg"}
                    classNames={{
                      root:
                        colorScheme === "light"
                          ? btnClasses.btnMonth
                          : btnClasses.btnMonth_dark,
                    }}
                  >
                    <Center>
                      <IoChevronForward />
                    </Center>
                  </UnstyledButton>
                </Flex>
                <Text
                  styles={(theme) => ({
                    root: {
                      fontSize: "1.5rem",
                      color:
                        colorScheme === "light"
                          ? `${theme.colors.lightTheme[3]}`
                          : `${theme.colors.darkTheme[2]}`,
                    },
                  })}
                >
                  {/* {months.find((month, index) =>
                  monthCount === index ? month : "",
                )}{" "}
                - {yearCount} */}
                  {months[currentMonth]} {currentYear}
                </Text>
              </Flex>
              <GeneralDivider />
            </Stack>
          </Container>
          <Stack gap={0}>
            {/* -------------- Calendar's Day Header -------------- */}
            <Flex gap={0}>
              {getSortedDays(currentMonth, currentYear).map(
                (day: string, index: number) => (
                  <Container
                    key={index}
                    classNames={{
                      root:
                        colorScheme === "light"
                          ? classes.dayHeader
                          : classes.dayHeader_dark,
                    }}
                  >
                    {day}
                  </Container>
                ),
              )}
            </Flex>
            {/* -------------- Calendar's body -------------- */}
            <Container p={0} style={{ maxWidth: "100%", margin: "0" }}>
              <Flex wrap="wrap">
                {range(getDaysInMonth(currentMonth, currentYear)).map(
                  (day, index) => {
                    // console.log(typeof day === "number", day);
                    const sameDay = areDateOnSameDay(
                      new Date(),
                      getDateObjet(day, currentMonth, currentYear),
                    );
                    return (
                      <Container
                        style={{ width: "calc(100%/7)" }}
                        key={index}
                        classNames={{
                          root:
                            colorScheme === "light"
                              ? classes.weekday_container
                              : classes.weekday_container_dark,
                        }}
                        // styles={{ root: { backgroundColor: sameDay ? "red" : "" } }}
                      >
                        <Flex
                          classNames={{
                            root:
                              colorScheme === "light"
                                ? sameDay
                                  ? classes.weekday_active
                                  : classes.weekday
                                : sameDay
                                ? classes.weekday_dark_active
                                : classes.weekday_dark,
                          }}
                          /* style={{
                            position: "relative",
                          }} */
                          align={"center"}
                        >
                          <Text
                            style={{
                              margin: "0 auto",
                            }}
                          >
                            {day}
                          </Text>
                        </Flex>
                        <Container
                          classNames={{
                            root:
                              colorScheme === "light"
                                ? classes.dayEvents
                                : classes.dayEvents_dark,
                          }}
                        >
                          <Stack gap={2} p={0}>
                            {eventsArr.map((event, index) => {
                              const { date, title, degree } = event;
                              return (
                                <div key={index}>
                                  {areDateOnSameDay(
                                    getDateObjet(
                                      day,
                                      currentMonth,
                                      currentYear,
                                    ),
                                    event.date,
                                  ) && (
                                    <EventSmallCard
                                      date={date}
                                      degree={degree}
                                      title={title}
                                    />
                                  )}
                                </div>
                              );
                            })}
                          </Stack>
                        </Container>
                      </Container>
                    );
                  },
                )}
              </Flex>
            </Container>
          </Stack>
          {/* <ContainerInside allWhite={false} width="100%" withBorder>
          </ContainerInside> */}
        </Stack>
      </Container>
    </InsideContainer>
  );
};

/* onClick={() => {
  setMonthCount(monthCount === 0 ? 11 : monthCount - 1);
  setYearCount(monthCount === 0 ? yearCount - 1 : yearCount);
}} */

/* onClick={() => {
  setMonthCount((monthCount + 1) % 12);
  setYearCount(monthCount === 11 ? yearCount + 1 : yearCount);
}} */

/*
<DayContainer
  currentDay
  dayNumber={5}
  dayEventArray={[
    {
      title: "Generar RCV",
      desription:
        "Se debeen generar 5 RCV para el cliente de Caracas",
      degree: "Muy Importante",
      userToassign: "Mario Hurtado",
      id: crypto.randomUUID(),
    },
    {
      title: "Generar RCV",
      desription:
        "Se debeen generar 5 RCV para el cliente de Caracas",
      degree: "Importante",
      userToassign: "Mario Hurtado",
      id: crypto.randomUUID(),
    },
    {
      title: "Generar RCV",
      desription:
        "Se debeen generar 5 RCV para el cliente de Caracas",
      degree: "Normal",
      userToassign: "Mario Hurtado",
      id: crypto.randomUUID(),
    },
  ]}
/>
*/
