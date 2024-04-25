"use client";

import {
  HiOutlineDotsVertical,
  HiOutlineCheck,
  HiOutlineTrash,
  IoClose,
} from "@/icons";
import {
  useMantineColorScheme,
  Center,
  Button,
  Modal,
  Stack,
  Text,
  Flex,
  Menu,
} from "@mantine/core";
import classes from "@/styles/btn-styles.module.css";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import { TaskDeleteLayout } from "./TaskDeleteLayout";

export const BtnTaskAction = ({ themeColor }: { themeColor: string }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
        styles={{
          content: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
          },
        }}
      >
        <Stack>
          <TaskDeleteLayout />
          <Flex align={"center"} gap={"sm"} style={{ height: "2.25rem" }}>
            <Button
              onClick={close}
              fullWidth
              variant="white"
              leftSection={<IoClose />}
              styles={(theme) => ({
                root: {
                  border: `2px solid ${theme.colors.lightTheme[6]}`,
                  color: `${theme.colors.lightTheme[6]}`,
                },
                section: { fontSize: "1.2rem" },
              })}
            >
              Cancelar
            </Button>
            <Button
              fullWidth
              variant="filled"
              leftSection={<HiOutlineCheck />}
              classNames={{
                root:
                  colorScheme === "light"
                    ? classes.btnAdd
                    : classes.btnAdd_dark,
              }}
              styles={(theme) => ({
                section: { fontSize: "1.2rem" },
              })}
              onClick={() => {
                notifications.show({
                  id: crypto.randomUUID(),
                  color: "#115dfe",
                  title: "Tarea Eliminada",
                  message: "Tarea eliminada satisfactoriamente!",
                  autoClose: 1000,
                  withCloseButton: true,
                });
                close();
              }}
            >
              Aceptar
            </Button>
          </Flex>
        </Stack>
      </Modal>

      <Menu
        withArrow
        shadow="md"
        closeOnClickOutside
        closeOnItemClick
        position="bottom-end"
      >
        <Menu.Target>
          <Center
            className={classes.btnDot_icon}
            styles={{
              root: {
                position: "absolute",
                right: "0.4rem",
                top: "0.5rem",
                fontSize: "1.2rem",
                color: themeColor,
              },
            }}
          >
            <HiOutlineDotsVertical />
          </Center>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            color="#2BDD66"
            onClick={() =>
              notifications.show({
                id: crypto.randomUUID(),
                color: "#2BDD66",
                title: "Tarea Completada",
                message: "La tarea ha sido completada satisfactoriamente 😎!",
                autoClose: 1000,
                withCloseButton: true,
              })
            }
          >
            <Flex gap={6}>
              <Center style={{ fontSize: "1.2rem" }}>
                <HiOutlineCheck />
              </Center>
              <Text>Completado</Text>
            </Flex>
          </Menu.Item>
          <Menu.Item color="#F0185C" onClick={open}>
            <Flex gap={6}>
              <Center style={{ fontSize: "1.2rem" }}>
                <HiOutlineTrash />
              </Center>
              <Text>Eliminar</Text>
            </Flex>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};
