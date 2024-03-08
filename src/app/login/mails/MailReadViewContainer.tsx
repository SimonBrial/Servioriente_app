import React from "react";
import MailReadView from "./MailReadView";
import { ContainerInside } from "@/components/container/ContainerInside";

export const MailReadViewContainer = () => {
  return (
    <ContainerInside width="70%" allWhite={false} withBorder>
      <MailReadView />
    </ContainerInside>
  );
};
