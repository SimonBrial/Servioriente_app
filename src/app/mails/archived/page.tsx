import { Flex } from "@mantine/core";
import { AsideMailContainer } from "../AsideMailContainer";
import { MailReadViewContainer } from "../MailReadViewContainer";

export default function page(): JSX.Element {
  return (
    <Flex gap={"sm"} style={{ height: "100%" }}>
      <AsideMailContainer />
      <MailReadViewContainer />
    </Flex>
  );
}
