"use client";

import {
  HiOutlineDocumentAdd,
  HiOutlineDatabase,
  HiOutlineUserAdd,
} from "@/icons";
import { Menu, Button, useMantineColorScheme } from "@mantine/core";
import Link from "next/link";
import classes from "@/styles/btn-styles.module.css";

export const BtnCreateRegister = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Menu shadow="md" width={210} position="bottom-end" withArrow>
      <Menu.Target>
        <Button
          leftSection={<HiOutlineDocumentAdd />}
          styles={(theme) => ({
            section: { fontSize: "1.2rem" },
            root: {
              padding: "0.6rem 1.5rem",
              height: "100%",
              width: "100%",
            },
          })}
          classNames={{
            root:
              colorScheme === "light" ? classes.btnAdd : classes.btnAdd_dark,
          }}
          key={crypto.randomUUID()}
        >
          Crear Registro
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Link href={"/login/process/user-selection"}>
          <Menu.Item leftSection={<HiOutlineDatabase />}>
            Desde la Base de Datos
          </Menu.Item>
        </Link>
        <Menu.Item leftSection={<HiOutlineUserAdd />}>
          Crear Nuevo Registro
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
