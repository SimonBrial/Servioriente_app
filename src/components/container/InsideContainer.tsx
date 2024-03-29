"use client";

import { Container, useMantineColorScheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export default function InsideContainer({
  withBackground,
  withBorder,
  children,
  offset,
}: {
  children: React.ReactNode;
  offset: number;
  withBackground: boolean;
  withBorder: boolean;
}): JSX.Element {
  const { height } = useViewportSize();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Container
      className="aqui_hay_un_problema"
      px={0}
      m={0}
      h={height - offset}
      styles={(theme) => ({
        root: {
          maxWidth: "100%",
          maxHeight: "100%",
          backgroundColor: withBackground
            ? colorScheme === "light"
              ? "#FFFFFF"
              : `${theme.colors.darkTheme[7]}`
            : "none",
          borderRadius: "6px",
          border: withBorder
            ? colorScheme === "light"
              ? `2px solid ${theme.colors.lightTheme[2]}`
              : `2px solid ${theme.colors.darkTheme[5]}`
            : "none",
        },
      })}
    >
      {children}
    </Container>
  );
}
