"use client";

import { Center, useMantineColorScheme } from "@mantine/core";
import { IoWarningOutline } from "../icons";
import TooltipLayout from "./TooltipLayout";

export default function WarningInfo({
  description,
}: {
  description: string;
}): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <TooltipLayout label={description} position="top-end">
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
    </TooltipLayout>
  );
}
