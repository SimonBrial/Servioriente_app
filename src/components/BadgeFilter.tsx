"use client";

import { Pill, useMantineColorScheme } from "@mantine/core";

export function BadgeFilter({ tag }: { tag: string }): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Pill
      withRemoveButton
      styles={(theme) => ({
        root: {
          color:
            colorScheme === "light"
              ? `${theme.colors.lightTheme[6]}`
              : "#0ec7e0",
          backgroundColor: colorScheme === "light" ? "#004ce54c" : "#52a5e03f",
          fontWeight: "bold",
          borderRadius: "6px",
        },
      })}
    >
      {tag}
    </Pill>
  );
}
