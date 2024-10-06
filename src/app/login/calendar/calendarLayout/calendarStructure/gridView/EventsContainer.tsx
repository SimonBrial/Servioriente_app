"use client";

import { useMantineColorScheme, Container, Stack } from "@mantine/core";
import classes from "@/styles/calendar.module.css";
import { SmallEventCard } from "../cards/SmallEventCard";
import { useCalendarStore } from "@/store/calendar-store";

export default function EventsContainer({ eventDay }: { eventDay: Date }) {
  const { colorScheme } = useMantineColorScheme();
  const { fnEventListGenerator, eventsArray } = useCalendarStore();

  return (
    <Container
      classNames={{
        root:
          colorScheme === "light"
            ? classes.container_dayEvents
            : classes.container_dayEvents_dark,
      }}
    >
      <Stack
        gap={2}
        p={0}
        style={{
          height: "100%",
        }}
        className={classes.dayEvents}
      >
        {fnEventListGenerator(eventDay).map((event) => {
          const { date, degree, description, id, title, userToassign } = event;

          // console.log(event)
          return (
            <SmallEventCard
              userToassign={userToassign}
              description={description}
              cardSize="small"
              degree={degree}
              title={title}
              key={id}
              date={date}
              id={id}
            />
          );
        })}
      </Stack>
    </Container>
  );
}

/* const generateEventList = (
    day: number,
    eventsArray: EventsArray[],
  ): (React.JSX.Element | undefined)[] => {
    return eventsArray.map((event, index) => {
      const { date, title, degree, description, id, userToassign } = event;
      if (day === date.getDate()) {
        return (
          <div key={index} className="StyledEvent">
            {areDateOnSameDay(
              getDateObjet(day, currentMonth, currentYear),
              event.date,
            ) && (
              <SmallEventCard
                userToassign={userToassign}
                description={description}
                cardSize="small"
                degree={degree}
                title={title}
                key={index}
                date={date}
                id={id}
              />
            )}
          </div>
        );
      }
    });
  }; */
