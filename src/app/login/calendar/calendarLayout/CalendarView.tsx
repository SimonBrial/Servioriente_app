"use client";

import { Container } from "@mantine/core";
import { CalendarGridView } from "./CalendarGridView";
import { usePathname } from "next/navigation";

export default function CalendarView() {
  const pathname = usePathname();
  return (
    <Container style={{ padding: "0", maxWidth: "100%", width: "100%" }} className="prueba">
      {pathname === "/login/calendar" ? <CalendarGridView /> : <></>}
    </Container>
  );
};

// https://dev.to/elihood/building-a-simple-calendar-with-vanilla-js-1g70
