"use client";

import {
  HiOutlineDocumentText,
  HiOutlineTrash,
  TbStarFilled,
  HiMenu,
} from "@/icons";
import { ActionIcon, Menu, useMantineColorScheme } from "@mantine/core";
import Link from "next/link";

export const FilterMailTemplate = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Menu
      shadow="md"
      width={200}
      withArrow
      position="bottom-end"
      styles={(theme) => ({
        item: {
          color:
            colorScheme === "light"
              ? theme.colors.lightTheme[6]
              : theme.colors.darkTheme[1],
        },
        itemSection: {
          fontSize: "1.2rem",
        },
      })}
    >
      <Menu.Target>
        <ActionIcon
          // size={"sm"}
          variant="outline"
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? theme.colors.lightTheme[3]
                  : theme.colors.darkTheme[2],
              border: "none",
              padding: "0.1rem",
            },
          })}
        >
          <HiMenu style={{ fontSize: "2rem" }} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Mostrar Formatos</Menu.Label>
        <Menu.Divider></Menu.Divider>
        <Link href={"/login/mails/formats"}>
          <Menu.Item
            leftSection={<HiOutlineDocumentText />}
          >
            Todos
          </Menu.Item>
        </Link>
        <Link href={"/login/mails/formats/favorites"}>
          <Menu.Item
            leftSection={<TbStarFilled />}
          >
            Favoritos
          </Menu.Item>
        </Link>
        <Link href={"/login/mails/formats/deleted"}>
          <Menu.Item
            leftSection={<HiOutlineTrash />}
          >
            Borrados
          </Menu.Item>
        </Link>
      </Menu.Dropdown>
    </Menu>
  );
};
