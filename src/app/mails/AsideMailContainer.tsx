"use client";

import React from "react";
import MailItem from "./MailItem";
import { ScrollArea } from "@mantine/core";
import { ContainerInside } from "@/components/container/ContainerInside";

export const AsideMailContainer = () => {
  return (
    <ContainerInside width="35%" allWhite={false} withBorder>
      <ScrollArea
        h={"100%"}
        style={{ borderRadius: "6px" }}
        offsetScrollbars
        scrollbarSize={2}
      >
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
      </ScrollArea>
    </ContainerInside>
  );
};
