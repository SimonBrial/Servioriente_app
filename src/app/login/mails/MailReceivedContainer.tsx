import { Flex } from "@mantine/core";
import React from "react";
import { AsideMailContainer } from "./AsideMailContainer";
import { MailReadViewContainer } from "./MailReadViewContainer";

export default function MailReceivedContainer() {
  return (
    <Flex gap={"sm"} style={{ height: "100%" }}>
      <AsideMailContainer />
      <MailReadViewContainer />
    </Flex>
  );
}
