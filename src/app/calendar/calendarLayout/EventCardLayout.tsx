import React from "react";
import { EventCardProps } from "@/interface/interface";
import { EventSmallCard } from "./gridView/EventSmallCard";
import { EventCard } from "./gridView/EventCard";

export const EventCardLayout = ({
  userToassign,
  desription,
  smallSize,
  degree,
  title,
  id,
}: EventCardProps) => {
  return (
    <>
      {smallSize ? (
        <>
          <EventSmallCard degree={degree} title={title} />
        </>
      ) : (
        <EventCard
          userToassign={userToassign}
          desription={desription}
          degree={degree}
          title={title}
        />
      )}
    </>
  );
};
