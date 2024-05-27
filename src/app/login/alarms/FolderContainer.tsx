"use client";

import {
  Center,
  Flex,
  ScrollArea,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import AlarmFolder from "./AlarmFolder";
import { ContainerInside } from "@/components/container/ContainerInside";
import { useAlarmStore } from "@/store/alarm-store";
import { PiFolderSimpleDashed } from "@/icons";

export default function FolderContainer(): JSX.Element {
  const { alarmFolderArray } = useAlarmStore();
  const { colorScheme } = useMantineColorScheme();
  function folderArray() {
    if (alarmFolderArray.length > 0) {
      return (
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
      );
    }
    return (
      <Flex
        gap={8}
        align={"center"}
        justify={"center"}
        styles={(theme) => ({
          root: {
            height: "100%",
            color:
              colorScheme === "light"
                ? theme.colors.lightTheme[3]
                : theme.colors.darkTheme[2],
          },
        })}
      >
        <Center>
          <PiFolderSimpleDashed style={{ fontSize: "4.5rem" }} />
        </Center>
        <Text size="3rem">No hay carpetas existentes</Text>
      </Flex>
    );
  }
  return (
    <ContainerInside width="70%" allWhite={false} withBorder>
      {folderArray()}
    </ContainerInside>
  );
}
