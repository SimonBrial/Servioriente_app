"use client";

import { ScrollArea, Stack } from "@mantine/core";
import AlarmFolder from "./AlarmFolder";
import { ContainerInside } from "@/components/container/ContainerInside";
import { useAlarmStore } from "@/store/alarm-store";

export default function FolderContainer(): JSX.Element {
  const { alarmFolderArray } = useAlarmStore();
  return (
    <ContainerInside width="70%" allWhite={false} withBorder>
      <ScrollArea
        h={"100%"}
        style={{ borderRadius: "6px" }}
        scrollbarSize={2}
        offsetScrollbars
      >
        <Stack gap={12}>
          {alarmFolderArray.map((folder) => {
            const {
              alarmsArray,
              description,
              themeColor,
              idFolder,
              title,
              icon,
            } = folder;
            return (
              <AlarmFolder
                description={description}
                key={crypto.randomUUID()}
                alarmsArray={alarmsArray}
                themeColor={themeColor}
                idFolder={idFolder}
                title={title}
                icon={icon}
              />
            );
          })}
        </Stack>
      </ScrollArea>
    </ContainerInside>
  );
}
