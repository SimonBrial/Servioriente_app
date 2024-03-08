import InsideContainer from "@/components/container/InsideContainer";
import { Stack } from "@mantine/core";
import React, { ReactNode } from "react";

export const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <InsideContainer offset={130} withBackground={false} withBorder>
      <Stack
        gap={4}
        style={{
          width: "70%",
          margin: "0 auto",
          height: "100%",
          padding: "1rem",
        }}
        justify="space-between"
      >
        {children}
      </Stack>
      {/* <Container
        styles={(theme) => ({
          root: {
            // border: "1px solid #cdcdcd",
            borderRadius: "6px",
            padding: "1rem",
            height: "100%",
            border:
              colorScheme === "light"
                ? "1px solid #cdcdcd"
                : `1px solid ${theme.colors.darkTheme[7]}`,
          },
        })}
      >
      </Container> */}
    </InsideContainer>
  );
};
