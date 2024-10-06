"use client";

import TitleSimpleLayout from "@/components/layout/TitleSimpleLayout";
import { IoClose } from "@/icons";
import { Button, ScrollArea, Stack } from "@mantine/core";
import { EventCardLayout } from "../calendarLayout/calendarStructure/cards/EventCardLayout";
import { useCalendarStore } from "@/store/calendar-store";

interface EventListLayoutProps {
  close: () => void;
  day: Date;
}

export default function EventListLayout({ close, day }: EventListLayoutProps) {
  const { fnEventListGenerator } = useCalendarStore();

  return (
    <Stack
      justify="space-between"
      style={{
        padding: "0 0.5rem",
        height: "95vh",
      }}
      gap={6}
    >
      <Stack gap={6} style={{ width: "100%" }}>
        <TitleSimpleLayout title="Eventos del dia" />
        <ScrollArea h={500} scrollbarSize={2} offsetScrollbars>
          <Stack gap={6}>
          {fnEventListGenerator(day).map((event) => {
            const { date, degree, description, id, title, userToassign } =
              event;
            return (
              <EventCardLayout
                userToassign={userToassign}
                description={description}
                degree={degree}
                cardSize="big"
                title={title}
                date={date}
                key={id}
                id={id}
              />
            );
          })}
          </Stack>
        </ScrollArea>
      </Stack>
      <Button
        onClick={close}
        fullWidth
        variant="white"
        leftSection={<IoClose />}
        styles={(theme) => ({
          root: {
            border: `2px solid ${theme.colors.lightTheme[6]}`,
            color: `${theme.colors.lightTheme[6]}`,
          },
          section: { fontSize: "1.2rem" },
        })}
      >
        Cancelar
      </Button>
    </Stack>
  );
}
