"use client";

import { Button, useMantineColorScheme } from "@mantine/core";
import { CountIndicatorProps } from "@/interface/interface";
import TooltipLayout from "./TooltipLayout";

export function CountIndicator({
  count,
  iconSection,
  description,
}: CountIndicatorProps): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <TooltipLayout
      label={`${description}: ${count}`}
      position="bottom"
      key={crypto.randomUUID()}
    >
      <Button
        leftSection={iconSection}
        fullWidth
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
    </TooltipLayout>
  );
}
