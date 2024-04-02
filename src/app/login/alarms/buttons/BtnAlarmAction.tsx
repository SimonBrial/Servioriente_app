"use client";

import {
  HiOutlineDotsVertical,
  HiOutlinePencil,
  HiOutlineCheck,
  HiOutlineTrash,
  IoClose,
  HiOutlineSave,
} from "@/icons";
import {
  useMantineColorScheme,
  Drawer,
  Center,
  Button,
  Portal,
  Modal,
  Stack,
  Text,
  Flex,
  Menu,
} from "@mantine/core";
import classes from "@/styles/btn-styles.module.css";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import DeleteAlarmLayout from "../layouts/DeleteAlarmLayout";
import CreateAlarmLayout from "../layouts/CreateAlarmLayout";

export default function BtnAlarmAction() {
  const { colorScheme } = useMantineColorScheme();
  const [opened, { open, close }] = useDisclosure(false);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  return (
    <>
      {/* This modal is to delete the alarm */}
      <Modal
        centered
        opened={opened}
        onClose={close}
        withCloseButton={false}
        styles={{
          content: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
          },
        }}
      >
        <Stack>
          <DeleteAlarmLayout />
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
              styles={{ section: { fontSize: "1.2rem" } }}
              onClick={() => {
                notifications.show({
                  id: crypto.randomUUID(),
                  color: "#2BDD66",
                  title: "Recordatorio Eliminado",
                  message: "Recordatorio eliminado satisfactoriamente!",
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
      {/* This drawer is to edit the alarm */}
      <Portal>
        <Drawer
          onClose={() => setShowDrawer(false)}
          closeOnClickOutside={false}
          withCloseButton={false}
          opened={showDrawer}
          position="right"
          styles={{
            content: {
              backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
            },
          }}
        >
          <Stack
            style={{
              height: "95vh",
              padding: "0 16px",
              // border: "1px solid red",
            }}
          >
            <CreateAlarmLayout
              title="Editar Recordatorio"
              key={crypto.randomUUID()}
            />
            <Flex align={"center"} gap={"sm"} style={{ height: "2.25rem" }}>
              <Button
                onClick={() => setShowDrawer(false)}
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
                leftSection={<HiOutlineSave />}
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
                  setShowDrawer(false);
                  notifications.show({
                    id: crypto.randomUUID(),
                    color: "#2BDD66",
                    title: "Recordatorio Editado",
                    message:
                      "El Recordatorio ha sido editado satisfactoriamente 😎!",
                    autoClose: 1000,
                    withCloseButton: true,
                  });
                }}
              >
                Guardar
              </Button>
            </Flex>
          </Stack>
        </Drawer>
      </Portal>
      <Menu
        position="bottom-end"
        closeOnClickOutside
        closeOnItemClick
        shadow="md"
        withArrow
        styles={{
          dropdown: {
            backgroundColor: colorScheme === "light" ? "#fff" : "#262749",
          },
        }}
      >
        <Menu.Target>
          <Center
            className={
              colorScheme === "light"
                ? classes.btnDot_icon
                : classes.btnDot_icon_dark
            }
            styles={{
              root: { color: "#FD0E78", fontSize: "1.2rem" },
            }}
          >
            <HiOutlineDotsVertical />
          </Center>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            color="#F06418"
            onClick={() => setShowDrawer((drawer) => !drawer)}
          >
            <Flex gap={6}>
              <Center style={{ fontSize: "1.2rem" }}>
                <HiOutlinePencil />
              </Center>
              <Text>Editar</Text>
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
}
