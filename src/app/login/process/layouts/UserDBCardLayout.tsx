"use client";

import { useMantineColorScheme, Center, Text, Flex, Box } from "@mantine/core";
import classes from "@/styles/card-process.module.css";
import { HiOutlineUser } from "@/icons";

export default function UserDBCardLayout() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Box
      className={
        colorScheme === "light" ? classes.userDbCard : classes.userDbCard_dark
      }
    >
      <Flex
        gap={6}
        /* className={
          colorScheme === "light"
            ? classes.userDbCard_item
            : classes.userDbCard_item_dark
        } */
        style={{ width: "100%" }}
        align={"center"}
      >
        <Center style={{ fontSize: "1.5rem" }}>
          <HiOutlineUser />
        </Center>
        <Text>Simon Briceño</Text>
      </Flex>
    </Box>
  );
}

{
  /*
  <Box
      className={
        colorScheme === "light"
          ? classes.userDbCard
          : classes.userDbCard_dark
      }
    >
      <Group mb={5}>
        <Flex
          gap={6}
          className={
            opened
              ? colorScheme === "light"
                ? classes.userDbCard_item
                : classes.userDbCard_item_dark
              : ""
          }
          onClick={toggle}
          style={{ width: "100%" }}
          align={"center"}
        >
          <Center style={{ fontSize: "1.5rem" }}>
            <HiOutlineUser />
          </Center>
          <Text>Simon Briceño</Text>
        </Flex>
      </Group>

      <Collapse in={opened}>
        <Stack gap={6} my={2}>
          <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
          <Flex
            gap={0}
            className={
              colorScheme === "light"
                ? classes.userDbCard_item
                : classes.userDbCard_item_dark
            }
            align={"center"}
            justify={"space-between"}
          >
            <Text size="xs">Vehiculo</Text>
            <Text style={{ marginTop: "-0.25rem" }}>Jeep</Text>
          </Flex>
          <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
          <Flex
            gap={0}
            className={
              colorScheme === "light"
                ? classes.userDbCard_item
                : classes.userDbCard_item_dark
            }
            align={"center"}
            justify={"space-between"}
          >
            <Text size="xs">Zona</Text>
            <Text style={{ marginTop: "-0.25rem" }}>Carabobo</Text>
          </Flex>
          <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
          <Flex
            justify={"space-between"}
            className={
              colorScheme === "light"
                ? classes.userDbCard_item
                : classes.userDbCard_item_dark
            }
            align={"center"}
          >
            <Text size="xs">Placa del vehiculo</Text>
            <Text style={{ marginTop: "-0.25rem" }}>DA58TG</Text>
          </Flex>
          <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
          <Flex
            justify={"space-between"}
            className={
              colorScheme === "light"
                ? classes.userDbCard_item
                : classes.userDbCard_item_dark
            }
            align={"center"}
          >
            <Text size="xs">Correo</Text>
            <Text style={{ marginTop: "-0.25rem" }}>corre@correo.com</Text>
          </Flex>
        </Stack>
        <Stack gap={6} my={2}>
          <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
          <Flex
            justify={"space-between"}
            className={
              colorScheme === "light"
                ? classes.userDbCard_item
                : classes.userDbCard_item_dark
            }
            align={"center"}
          >
            <Text size="xs">Cumpleaños</Text>
            <Text style={{ marginTop: "-0.25rem" }}>02/05/1992</Text>
          </Flex>
        </Stack>
        <Stack gap={6} my={2}>
          <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
          <Flex
            justify={"space-between"}
            className={
              colorScheme === "light"
                ? classes.userDbCard_item
                : classes.userDbCard_item_dark
            }
            align={"center"}
          >
            <Text size="xs">Instagram</Text>
            <Text style={{ marginTop: "-0.25rem" }}>@instagram</Text>
          </Flex>
        </Stack>
        <Stack gap={6} my={2}>
          <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
          <Flex
            justify={"space-between"}
            className={
              colorScheme === "light"
                ? classes.userDbCard_item
                : classes.userDbCard_item_dark
            }
            align={"center"}
          >
            <Text size="xs">Facebook</Text>
            <Text style={{ marginTop: "-0.25rem" }}>Facebook</Text>
          </Flex>
        </Stack>
        <Stack gap={6} my={2}>
          <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
          <Flex
            justify={"space-between"}
            className={
              colorScheme === "light"
                ? classes.userDbCard_item
                : classes.userDbCard_item_dark
            }
            align={"center"}
          >
            <Text size="xs">Telefono/ Whatsapp</Text>
            <Text style={{ marginTop: "-0.25rem" }}>0416-684.95.78</Text>
          </Flex>
        </Stack>
      </Collapse>
    </Box>
  */
}
