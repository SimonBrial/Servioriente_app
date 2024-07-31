"use client";

import {
  HiOutlineDocumentAdd,
  HiOutlineDatabase,
  HiOutlineUserAdd,
} from "@/icons";
import {
  useMantineColorScheme,
  Button,
  Drawer,
  Portal,
  Stack,
  Menu,
} from "@mantine/core";
import Link from "next/link";
import classes from "@/styles/btn-styles.module.css";
import { usePathname } from "next/navigation";
import CreateClientLayout from "../layouts/CreateClientLayout";
import { useProcessStore } from "@/store/process-store";

export default function BtnCreateRegister() {
  const { colorScheme } = useMantineColorScheme();
  const { showClientLayout, setShowCreateClient } = useProcessStore();
  const path = usePathname();
  return (
    <>
      <Portal>
        <Drawer
          onClose={() => setShowCreateClient(false)}
          closeOnClickOutside={false}
          withCloseButton={false}
          opened={showClientLayout}
          position="right"
          styles={{
            content: {
              backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
            },
          }}
        >
          <Stack justify="space-between" style={{ height: "95vh" }}>
            <CreateClientLayout />
            {/* <Flex
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
                styles={{
                  section: { fontSize: "1.2rem" },
                }}
                onClick={() => {
                  setShowDrawer(false);
                  notifications.show({
                    id: crypto.randomUUID(),
                    color: "#2BDD66",
                    title: "Registro Creado",
                    message:
                      "El Registro ha sido creado y agregado a la Base de Datos satisfactoriamente 😎!",
                    autoClose: 1000,
                    withCloseButton: true,
                  });
                }}
              >
                Guardar
              </Button>
            </Flex> */}
          </Stack>
        </Drawer>
      </Portal>
      <Menu shadow="md" width={210} position="bottom-end" withArrow>
        <Menu.Target>
          <Button
            leftSection={<HiOutlineDocumentAdd />}
            styles={{
              section: { fontSize: "1.2rem" },
              root: {
                padding: "0.6rem 1.5rem",
                height: "100%",
                width: "100%",
              },
            }}
            classNames={{
              root:
                colorScheme === "light" ? classes.btnAdd : classes.btnAdd_dark,
            }}
            key={crypto.randomUUID()}
          >
            Crear RCV
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Link href={"/login/process/user-selection"}>
            <Menu.Item
              leftSection={<HiOutlineDatabase />}
              color={colorScheme === "light" ? "#696969" : "#52a5e0"}
            >
              Desde la Base de Datos
            </Menu.Item>
          </Link>
          <Menu.Item
            leftSection={<HiOutlineUserAdd />}
            color={colorScheme === "light" ? "#696969" : "#52a5e0"}
            disabled={path === "/login/process/user-selection"}
            onClick={() => setShowCreateClient(true)}
          >
            Crear Nuevo Registro
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
