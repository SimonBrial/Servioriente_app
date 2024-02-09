"use client";

import { Tooltip, Button, useMantineColorScheme } from "@mantine/core";
import { CountIndicatorProps } from "@/interface/interface";

export function CountIndicator({
  count,
  iconSection,
  description,
}: CountIndicatorProps): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Tooltip
      withArrow
      offset={5}
      label={`${description}: ${count}`}
      position="bottom"
      color="#004EE5"
      transitionProps={{ transition: "skew-up", duration: 300 }}
      style={{ color: "#FFF" }}
    >
      <Button
        leftSection={iconSection}
        // fullWidth
        styles={(theme) => ({
          section: {
            fontSize: "1.6rem",
            color:
              colorScheme === "light"
                ? `${theme.colors.lightTheme[6]}`
                : `${theme.colors.darkTheme[1]}`,
          },
          root: {
            backgroundColor:
              colorScheme === "light"
                ? `${theme.colors.lightTheme[0]}`
                : `${theme.colors.darkTheme[7]}`,
            border:
              colorScheme === "light"
                ? `1px solid ${theme.colors.lightTheme[2]}`
                : `1px solid ${theme.colors.darkTheme[6]}`,
            color:
              colorScheme === "light"
                ? `${theme.colors.lightTheme[3]}`
                : `${theme.colors.darkTheme[2]}`,
            fontSize: "1.1rem",
            height: "100%",
            width: "12%",
          },
        })}
      >
        {count}
      </Button>
    </Tooltip>
  );
}
