"use client";

import { RegisterInfoProps } from "@/interface/interface";
import { Box, Flex, Title, useMantineColorScheme } from "@mantine/core";
import { GeneralDivider } from "./GeneralDivider";

export default function RegisterInfo({
  keyInput,
  valueInput,
}: RegisterInfoProps): JSX.Element {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Box>
      <Flex
        justify={"space-between"}
        styles={(theme) => ({
          root: {
            color:
              colorScheme === "light"
                ? theme.colors.lightTheme[3]
                : theme.colors.darkTheme[2],
            marginBottom: "0.2rem",
          },
        })}
      >
        <Title order={5}>{keyInput}</Title>
        <Title order={5}>{valueInput}</Title>
      </Flex>
      <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
    </Box>
  );
}
