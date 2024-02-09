"use client";

import { Container, useMantineColorScheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export default function InsideContainer({
  withBackground,
  children,
  offset,
}: {
  children: React.ReactNode;
  offset: number;
  withBackground: boolean;
}): JSX.Element {
  const { height } = useViewportSize();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Container
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
          // border: "1px solid red",
        },
      })}
    >
      {children}
    </Container>
  );
}
