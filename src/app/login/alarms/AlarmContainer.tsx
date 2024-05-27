import InsideContainer from "@/components/container/InsideContainer";
import { Flex } from "@mantine/core";
import FolderContainer from "./FolderContainer";
import AlarmDescription from "./AlarmDescription";

export default function AlarmContainer() {
  return (
    <InsideContainer
      offset={120}
      withBackground={false}
      withBorder={false}
      key={crypto.randomUUID()}
    >
      <Flex gap={"sm"} style={{ height: "100%" }}>
        <FolderContainer />
        <AlarmDescription />
      </Flex>
    </InsideContainer>
  );
}
