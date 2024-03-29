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
import DeleteCardLayout from "../layouts/DeleteCardLayout";
import { useState } from "react";
import EditCardLayout from "../layouts/EditCardLayout";

export default function BtnCardAction() {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  return (
    <>
      {/* This modal is to delete the card */}
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
          <DeleteCardLayout />
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
                  title: "Tarjeta Eliminada",
                  message: "Tarjeta de proceso eliminada satisfactoriamente!",
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
      {/* This drawer is to edit the card */}
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
          <Stack justify="space-between" style={{ height: "96vh" }}>
            <EditCardLayout />
            <Flex
              align={"center"}
              gap={"sm"}
              style={{ height: "2.25rem", padding: "0 16px" }}
            >
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
                    title: "Registro Editado",
                    message:
                      "El Registro ha sido editado satisfactoriamente 😎!",
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
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
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
              root: {
                position: "absolute",
                right: "0.4rem",
                top: "0.5rem",
                fontSize: "0.9rem",
              },
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
