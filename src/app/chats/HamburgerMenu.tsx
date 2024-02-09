"use client";

import {
  MdOutlineMarkChatUnread,
  HiOutlineDocumentAdd,
  HiOutlineUserGroup,
  HiHeart,
  HiMenu,
} from "@/icons";
import { TabsSectionesProps } from "@/interface/interface";
import { ActionIcon, Menu, useMantineColorScheme } from "@mantine/core";
import Link from "next/link";
import classes from "@/styles/menu.module.css";

export const HamburgerMenu = (): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  const menuOptions = [
    {
      value: "Lista de Difusion",
      icon: <HiOutlineUserGroup />,
      dir: "/chats/difusion-list",
    },
    {
      value: "No Leidos",
      icon: <MdOutlineMarkChatUnread />,
      dir: "/chats/not-read",
    },
    {
      value: "Plantillas",
      icon: <HiOutlineDocumentAdd />,
      dir: "/chats/formats",
    },
    { value: "Favoritos", icon: <HiHeart />, dir: "/chats/favorities" },
  ];

  const sections = (): JSX.Element => {
    return (
      <Menu.Dropdown>
        <Menu.Label>Opciones</Menu.Label>
        <Menu.Divider />
        {menuOptions.map((section: TabsSectionesProps, index: number) => (
          <Link href={section.dir} key={index}>
            <Menu.Item leftSection={section.icon}>{section.value}</Menu.Item>
          </Link>
        ))}
      </Menu.Dropdown>
    );
  };

  return (
    <Menu
      shadow="md"
      width={200}
      position="right-start"
      offset={5}
      withArrow
      arrowPosition="center"
      styles={(theme) => ({
        root: { color: "#696969" },
        itemSection: {
          color:
            colorScheme === "light"
              ? `${theme.colors.lightTheme[6]}`
              : `${theme.colors.darkTheme[1]}`,
          fontSize: "1.3rem",
          marginRight: "0.5rem",
        },
        label: {
          color:
            colorScheme === "light"
              ? `${theme.colors.lightTheme[2]}`
              : `${theme.colors.darkTheme[3]}`,
          fontSize: "0.9rem",
        },
      })}
      classNames={{
        dropdown:
          colorScheme === "light"
            ? classes.menuDropdown
            : classes.menuDropdown_dark,
        item:
          colorScheme === "light"
            ? classes.menuDropdown_item
            : classes.menuDropdown_item_dark,
      }}
    >
      <Menu.Target>
        <ActionIcon
          variant="transparent"
          size={"xl"}
          aria-label="Search"
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? `${theme.colors.lightTheme[3]}`
                  : `${theme.colors.darkTheme[2]}`,
            },
          })}
        >
          <HiMenu style={{ fontSize: "2rem" }} />
        </ActionIcon>
      </Menu.Target>
      {sections()}
    </Menu>
  );
};
