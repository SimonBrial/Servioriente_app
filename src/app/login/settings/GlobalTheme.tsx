/* eslint-disable no-unneeded-ternary */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
"use client";

import { GeneralDivider } from "@/components/GeneralDivider";
import { BsMoonStars, HiOutlineSun } from "@/icons";
import {
  useComputedColorScheme,
  useMantineColorScheme,
  Switch,
  Center,
  Stack,
  Flex,
  Text,
} from "@mantine/core";

export const GlobalTheme = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <Stack gap={4}>
      <Flex justify={"space-between"} align={"center"}>
        <Text>Tema Global</Text>
        <Flex gap={6} align={"center"}>
          <Center>
            <HiOutlineSun style={{ fontSize: "1.8rem" }} />
          </Center>
          <Switch
            size="md"
            color="#004EE5"
            checked={colorScheme === "light" ? false : true}
            onClick={() =>
              setColorScheme(computedColorScheme === "light" ? "dark" : "light")
            }
          />
          <Center>
            <BsMoonStars style={{ fontSize: "1.4rem" }} />
          </Center>
        </Flex>
      </Flex>
      <GeneralDivider />
    </Stack>
  );
};
