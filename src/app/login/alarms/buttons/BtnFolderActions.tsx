"use client";

import {
  HiOutlineDotsVertical,
  HiOutlinePencil,
  HiOutlineCheck,
  HiOutlineTrash,
  HiOutlineSave,
  IoClose,
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
  Popover,
} from "@mantine/core";
import classes from "@/styles/btn-styles.module.css";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import DeleteFolderLayout from "../layouts/DeleteFolderLayout";
import CreateFolderLayout from "../layouts/CreateFolderLayout";
import { useAlarmStore } from "@/store/alarm-store";

function CorrectItem(props: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button type="button" {...props}>
      My custom Menu item
    </button>
  );
}

export default function BtnFolderActions({
  theme,
  idFolder,
}: {
  theme: string;
  idFolder: string;
}) {
  const { colorScheme } = useMantineColorScheme();
  const [opened, { open, close }] = useDisclosure(false);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const { fnDeleteFolder } = useAlarmStore();
  // console.log("idFolder: ", idFolder);


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
          <DeleteFolderLayout idFolder={idFolder} />
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
                fnDeleteFolder(idFolder);
                notifications.show({
                  id: crypto.randomUUID(),
                  color: "#2BDD66",
                  title: "Carpeta Eliminada",
                  message: "Carpeta eliminado satisfactoriamente 😎!",
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
            justify="space-between"
            style={{ height: "95vh", padding: "0 16px" }}
          >
            {/* <CreateFolderLayout
              title="Editar Carpeta"
              key={crypto.randomUUID()}
            /> */}
            editar
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
                styles={{
                  section: { fontSize: "1.2rem" },
                }}
                onClick={() => {
                  setShowDrawer(false);
                  notifications.show({
                    id: crypto.randomUUID(),
                    color: "#2BDD66",
                    title: "Carpeta Editada",
                    message:
                      "Los datos de la carpeta han sido editado satisfactoriamente 😎!",
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
        zIndex={10}
        position="bottom-end"
        closeOnClickOutside
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
            className={classes.btnEdit_folder}
            styles={{
              root: { color: theme, fontSize: "1.5rem", cursor: "pointer" },
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
          <Menu.Item color="#F0185C" type="button" onClick={open}>
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

