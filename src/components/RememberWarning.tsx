import { HiOutlineExclamationTriangle } from "@/icons";
import { Box, Center, Flex, useMantineColorScheme, Text } from "@mantine/core";
import React from "react";
import { GeneralDivider } from "./GeneralDivider";

export default function RememberWarning() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Box
      style={{
        border:
          colorScheme === "light" ? "1px solid #696969" : "1px solid #EFF3F5",
        padding: "0.5rem 0.8rem ",
        borderRadius: "6px",
        cursor: "default",
      }}
    >
      <Flex
        gap={10}
        styles={(theme) => ({
          root: {
            color:
              colorScheme === "light"
                ? theme.colors.lightTheme[3]
                : theme.colors.darkTheme[2],
          },
        })}
      >
        <Center style={{ fontSize: "1.5rem" }}>
          <HiOutlineExclamationTriangle />
        </Center>
        <GeneralDivider orientation="vertical" />
        <Text size="xs">
          Todos los campos que tiene <span style={{ color: "red" }}>*</span>{" "}
          deben ser rellenados, no se pueden dejar vacios
        </Text>
      </Flex>
    </Box>
  );
}
