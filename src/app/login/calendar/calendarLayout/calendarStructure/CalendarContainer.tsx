/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";

import { GeneralDivider } from "@/components/GeneralDivider";
import { IoChevronBack, IoChevronForward } from "@/icons";
import btnClasses from "@/styles/BtnStyles.module.css";
import {
  useMantineColorScheme,
  UnstyledButton,
  ScrollArea,
  Container,
  Center,
  Stack,
  Badge,
  Flex,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import classes from "@/styles/calendar.module.css";
import InsideContainer from "@/components/container/InsideContainer";
import {
  areDateOnSameDay,
  getSortedDays,
  getDateObjet,
} from "@/utils/calendarFunctions";
import { months, MOCKEVENTS, weekDays } from "@/data/calendarDaysAndMonth";
import { EventCardLayout } from "./cards/EventCardLayout";
import heightClasses from "@/styles/heightView.module.css";
import { EventsArray } from "@/interface/interface";

// TODO: Agregar la opcion para añadir eventos.
// TODO: Ajustar los dias del mes, que no se muevan.
// TODO: Refactorizar todo el codigo.

export const CalendarContainer = () => {
  const dt = new Date();
  const { colorScheme } = useMantineColorScheme();
  const [currentMonth, setCurrentMonth] = useState(dt.getMonth());
  const [currentYear, setCurrentYear] = useState(dt.getFullYear());
  const [events, setEvents] = useState<EventsArray[]>(MOCKEVENTS);

  const addEvent = (date: Date, event: any) => {
    if (!event.target.classList.contains("StyledEvent")) {
      const text = window.prompt("name");
      if (text !== null) {
        date.setHours(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        setEvents((prev) => [
          ...prev,
          { date, title: text, degree: "Importante", _id: crypto.randomUUID() },
        ]);
      }
    }
  };

  function generateEventList(day: number, eventsArray: any[]) {
    return eventsArray.map((event, index) => {
      const { date, title, degree } = event;
      if (day === date.getDate()) {
        return (
          <div key={index} className="StyledEvent">
            {areDateOnSameDay(
              getDateObjet(day, currentMonth, currentYear),
              event.date,
            ) && (
              <EventCardLayout
                id={crypto.randomUUID()}
                cardSize="small"
                userToassign=""
                degree={degree}
                desription=""
                title={title}
                key={index}
                date={date}
              />
            )}
          </div>
        );
      }
    });
  }

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

  function eventsOfDay(day: number, eventsArray: EventsArray[]) {
    return eventsArray.filter((event) => day === event.date.getDate());
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
              {weekDays.map((day: string, index: number) => (
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
              ))}
            </Flex>
            {/* -------------- Calendar's body -------------- */}
            <ScrollArea
              scrollbarSize={2}
              p={0}
              // h={matches ? "71.5vh" : "65.5vh"}
              // classNames={{ root: classes.columnCard_container }}
              className={heightClasses.calendarGrid_container}
              offsetScrollbars
              scrollHideDelay={0}
            >
              <Container p={0} style={{ maxWidth: "100%", margin: "0" }}>
                <Flex wrap="wrap">
                  {getSortedDays(currentMonth, currentYear).map(
                    (day, index) => {
                      // console.log("Prueba: ", day);
                      // TODO: Se debe mostrar el badge segun el mes al qeu se asigne el evento
                      const sameDay = areDateOnSameDay(
                        new Date(),
                        getDateObjet(day, currentMonth, currentYear),
                      );
                      /* console.log(
                        "Eventos del dia: ",
                        eventsOfDay(day, events).filter((event: EventsArray, index) => {
                          return event !== null ? event : null;
                        }),
                      ); */
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
                          onClick={(e) =>
                            addEvent(
                              new Date(currentYear, currentMonth, day),
                              e,
                            )
                          }
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
                            style={{
                              position: "relative",
                            }}
                            align={"center"}
                          >
                            <Text
                              style={{
                                margin: "0 auto",
                              }}
                            >
                              {day}
                            </Text>
                            {eventsOfDay(day, events).length > 3 ? (
                              <Badge
                                style={{
                                  position: "absolute",
                                  right: "0.2rem",
                                }}
                                color={
                                  colorScheme === "light"
                                    ? "#115dfe"
                                    : "#52A5E0"
                                }
                              >
                                +{eventsOfDay(day, events).length - 3}
                              </Badge>
                            ) : (
                              <></>
                            )}
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
                              {generateEventList(day, events)}
                            </Stack>
                          </Container>
                        </Container>
                      );
                    },
                  )}
                </Flex>
              </Container>
            </ScrollArea>
          </Stack>
        </Stack>
      </Container>
    </InsideContainer>
  );
};
