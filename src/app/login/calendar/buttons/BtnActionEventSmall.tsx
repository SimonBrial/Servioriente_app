"use client";

import {
  HiOutlineCheck,
  HiOutlineDotsVertical,
  HiOutlinePencil,
  HiOutlineSave,
  HiOutlineTrash,
  IoClose,
} from "@/icons";
import {
  Menu,
  Center,
  Text,
  Flex,
  useMantineColorScheme,
  Modal,
  Stack,
  Button,
  Portal,
  Drawer,
} from "@mantine/core";
import btnClasses from "@/styles/btn-styles.module.css";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import classes from "@/styles/btn-styles.module.css";
import { notifications } from "@mantine/notifications";
import DeleteEventLayout from "../layout/DeleteEventLayout";
import React from "react";

export default function BtnActionEventSmall() {
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
          <DeleteEventLayout />
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
            prueba
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
        width={200}
        withArrow
        shadow="md"
        closeOnClickOutside
        closeOnItemClick
        position="bottom-end"
      >
        <Menu.Target>
          <Center className={btnClasses.btnDot_icon_event}>
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
