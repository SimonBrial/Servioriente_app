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
import { notifications } from "@mantine/notifications";

export const GlobalTheme = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <Stack gap={4}>
      <Flex justify={"space-between"} align={"center"}>
        <Text
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? theme.colors.lightTheme[3]
                  : theme.colors.darkTheme[2],
            },
          })}
        >
          Tema Global
        </Text>
        <Flex gap={6} align={"center"}>
          <Center
            styles={(theme) => ({
              root: {
                color:
                  colorScheme === "light"
                    ? theme.colors.lightTheme[3]
                    : theme.colors.darkTheme[2],
              },
            })}
          >
            <HiOutlineSun style={{ fontSize: "1.8rem" }} />
          </Center>
          <Switch
            size="md"
            color="#004EE5"
            checked={colorScheme === "light" ? false : true}
            onClick={() => {
              setColorScheme(
                computedColorScheme === "light" ? "dark" : "light",
              );
              notifications.show({
                id: `${crypto.randomUUID()}`,
                color: "blue",
                title:
                  colorScheme !== "light"
                    ? "Modo Claro Activado"
                    : "Modo Oscuro Activado",
                message:
                  colorScheme !== "light"
                    ? "El modo claro ha sido activado ☀️!"
                    : "El modo oscuro ha sido activado 🌛!",
                autoClose: 1000,
                withCloseButton: true,
              });
            }}
          />
          <Center
            styles={(theme) => ({
              root: {
                color:
                  colorScheme === "light"
                    ? theme.colors.lightTheme[3]
                    : theme.colors.darkTheme[2],
              },
            })}
          >
            <BsMoonStars style={{ fontSize: "1.4rem" }} />
          </Center>
        </Flex>
      </Flex>
      <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
    </Stack>
  );
};
