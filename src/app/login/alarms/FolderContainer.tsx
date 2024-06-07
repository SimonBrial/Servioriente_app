"use client";

import {
  useMantineColorScheme,
  ScrollArea,
  Center,
  Stack,
  Flex,
  Text,
} from "@mantine/core";
import AlarmFolder from "./AlarmFolder";
import { ContainerInside } from "@/components/container/ContainerInside";
import { useAlarmStore } from "@/store/alarm-store";
import { PiFolderSimpleDashed } from "@/icons";
import { useEffect, useState } from "react";
import { AlarmFolderArray } from "@/interface/interface";

export default function FolderContainer(): JSX.Element {
  const { alarmFolderArray, searchTerm, results } = useAlarmStore();
  const { colorScheme } = useMantineColorScheme();

  const [showData, setShowData] = useState<AlarmFolderArray[]>(alarmFolderArray);

  useEffect(() => {
    // Establece los datos mostrados basado en si searchTerm está vacío o no
    setShowData(searchTerm !== "" ? results : alarmFolderArray);
    console.log("inside the useEffect: ", searchTerm)
  }, [searchTerm, alarmFolderArray, results]);
  console.log("outside the useEffect: ", searchTerm)
  function folderArray() {
    if (showData.length > 0) {
      return (
        <ScrollArea
          h={"100%"}
          style={{ borderRadius: "6px" }}
          scrollbarSize={2}
          offsetScrollbars
        >
          <Stack gap={12}>
            {showData.map((folder) => {
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
