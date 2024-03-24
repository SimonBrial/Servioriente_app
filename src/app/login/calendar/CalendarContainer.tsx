import InsideContainer from "@/components/container/InsideContainer";
import React from "react";

export const CalendarContainer = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <InsideContainer offset={182} withBackground={false} withBorder={false} key={crypto.randomUUID()}>
      {children}
    </InsideContainer>
  );
};
