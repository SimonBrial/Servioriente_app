import React from "react";
import { EventCardProps } from "@/interface/interface";
import { SmallEventCard } from "./SmallEventCard";
import { EventCard } from "./EventCard";
import { BigEventCard } from "./BigEventCard";

export const EventCardLayout = ({
  userToassign,
  desription,
  cardSize,
  degree,
  title,
  date,
  id,
}: EventCardProps) => {
  if (cardSize === "small") {
    return <SmallEventCard degree={degree} title={title} date={date} />;
  }

  if (cardSize === "medium") {
    return (
      <EventCard
        userToassign={userToassign}
        desription={desription}
        degree={degree}
        title={title}
      />
    );
  }

  if (cardSize === "big") {
    return (
      <BigEventCard
        admin
        userToassign={userToassign}
        desription={desription}
        degree={degree}
        title={title}
      />
    );
  }
};
