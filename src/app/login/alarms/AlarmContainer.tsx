"use client";

import InsideContainer from "@/components/container/InsideContainer";
import { Flex } from "@mantine/core";
import FolderContainer from "./FolderContainer";
import AlarmDescription from "./AlarmDescription";
import { useAlarmStore } from "@/store/alarm-store";

export const AlarmContainer = () => {
  const { alarmDescription } = useAlarmStore();
  return (
    <InsideContainer
      offset={120}
      withBackground={false}
      withBorder={false}
      key={crypto.randomUUID()}
    >
      <Flex gap={"sm"} style={{ height: "100%" }}>
        <FolderContainer />
        <AlarmDescription objAlarm={alarmDescription} />
      </Flex>
    </InsideContainer>
  );
};
