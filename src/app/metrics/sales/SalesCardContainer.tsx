"use client";

import { AreaChart } from '@mantine/charts';
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

const data = [
  {
    date: "Mar 22",
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: "Mar 23",
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: "Mar 24",
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: "Mar 25",
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: "Mar 26",
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
export const SalesCardContainer = () => {
  const { colorScheme } = useMantineColorScheme();
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Container
      p={12}
      style={{ maxWidth: "100%", width: "100%" }}
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
      <Collapse in={opened}>
        <AreaChart
          h={300}
          data={data}
          dataKey="date"
          series={[
            { name: "Apples", color: "indigo.6" },
            { name: "Oranges", color: "blue.6" },
            { name: "Tomatoes", color: "teal.6" },
          ]}
          curveType="natural"
        />
        prueba
      </Collapse>
    </Container>
  );
};
