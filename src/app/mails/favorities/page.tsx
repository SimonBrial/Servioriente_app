import { Flex } from "@mantine/core";
import { MailReadViewContainer } from "../MailReadViewContainer";
import { AsideMailContainer } from "../AsideMailContainer";

export default function page(): JSX.Element {
  return (
    <Flex gap={"sm"} style={{ height: "100%" }}>
      <AsideMailContainer />
      <MailReadViewContainer />
    </Flex>
  );
}
