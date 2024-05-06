"use client";

import {
  MdOutlineMarkChatUnread,
  HiOutlineDocumentText,
  HiOutlineUserGroup,
  HiHeart,
  HiMenu,
} from "@/icons";
import { TabsSectionesProps } from "@/interface/interface";
import { ActionIcon, Menu, useMantineColorScheme } from "@mantine/core";
import Link from "next/link";
import classes from "@/styles/general-styles.module.css";

export default function HamburgerMenu(): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  const menuOptions = [
    {
      value: "Lista de Difusion",
      icon: <HiOutlineUserGroup />,
      dir: "/login/chats/difusion-list",
    },
    {
      value: "No Leidos",
      icon: <MdOutlineMarkChatUnread />,
      dir: "/login/chats/not-read",
    },
    {
      value: "Plantillas",
      icon: <HiOutlineDocumentText />,
      dir: "/login/chats/formats",
    },
    { value: "Favoritos", icon: <HiHeart />, dir: "/login/chats/favorities" },
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
        itemLabel: {
          color:
            colorScheme === "light"
              ? `${theme.colors.lightTheme[3]}`
              : `${theme.colors.darkTheme[2]}`,
        },
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
              ? `${theme.colors.lightTheme[3]}`
              : `${theme.colors.darkTheme[2]}`,
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
}
