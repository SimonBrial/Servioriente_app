"use client";

import { Center, Tooltip, useMantineColorScheme } from "@mantine/core";
import { IoWarningOutline } from "../icons";

export default function WarningInfo({
  description,
}: {
  description: string;
}): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Tooltip
      label={description}
      color="blue"
      styles={(theme) => ({
        tooltip: {
          backgroundColor: `${theme.colors.lightTheme[6]}`,
          color: "#FFF",
        },
      })}
      arrowOffset={5}
      arrowSize={4}
      withArrow
      position="top-end"
    >
      <Center
        styles={(theme) => ({
          root: {
            color:
              colorScheme === "light"
                ? `${theme.colors.lightTheme[6]}`
                : `${theme.colors.darkTheme[1]}`,
          },
        })}
      >
        <IoWarningOutline />
      </Center>
    </Tooltip>
  );
}
