"use client";

import {
  useMantineColorScheme,
  Container,
  Collapse,
  Avatar,
  Center,
  Stack,
  Flex,
  Text,
} from "@mantine/core";
import classes from "@/styles/metrics.module.css";
import { HiOutlineDotsVertical } from "@/icons";
import { useDisclosure } from "@mantine/hooks";
import ChartContainer from "@/components/charts/LineChart";

export const SalesCardContainer = () => {
  const { colorScheme } = useMantineColorScheme();
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Container
      p={12}
      style={{ maxWidth: "100%", width: "100%", padding: "0.5rem 1rem" }}
      classNames={{
        root:
          colorScheme === "light"
            ? classes.events_container_card
            : classes.events_container_card_dark,
      }}
    >
      <Flex gap={8} align={"center"} justify={"space-between"}>
        <Flex gap={8} align={"center"} onClick={toggle}>
          <Avatar size={50} />
          <Stack gap={0}>
            <Text
              styles={(theme) => ({
                root: {
                  fontSize: "1.5rem",
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[3]}`
                      : `${theme.colors.darkTheme[2]}`,
                },
              })}
            >
              Mario Hurtado
            </Text>
            <Text
              styles={(theme) => ({
                root: {
                  marginTop: "-0.5rem",
                  fontSize: "1rem",
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[6]}`
                      : `${theme.colors.darkTheme[1]}`,
                },
              })}
            >
              Admin
            </Text>
          </Stack>
        </Flex>
        <Flex gap={8} align={"center"}>
          <Center>
            <HiOutlineDotsVertical
              className={
                colorScheme === "light"
                  ? classes.btn_dots
                  : classes.btn_dots_dark
              }
            />
          </Center>
        </Flex>
      </Flex>
      <Collapse in={opened} style={{ marginBottom: "0.5rem" }}>
        <ChartContainer />
      </Collapse>
    </Container>
  );
};
