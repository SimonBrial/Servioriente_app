"use client";

import React, { useState } from "react";
import { Stack, useMantineColorScheme } from "@mantine/core";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineExclamationCircle,
  HiOutlineDatabase,
  HiOutlineTemplate,
  HiOutlineCalendar,
  HiOutlineChartBar,
  HiOutlineLogout,
  AiOutlineIdcard,
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCog,
} from "../../icons";
import sidebarClass from "@/styles/sidebar.module.css";
import NavIcon from "./NavIcon";
import { sidebarItems } from "@/interface/interface";
import NotificationIcon from "./NotificationIcon";

const sections: sidebarItems[] = [
  {
    icon: <HiOutlineUser className={sidebarClass.icon} />,
    label: "UserName",
    direction: "",
  },
  {
    icon: <HiOutlineTemplate className={sidebarClass.icon} />,
    label: "Dashboard",
    direction: "/login/dashboard",
  },
  {
    icon: <AiOutlineIdcard className={sidebarClass.icon} />,
    label: "Cards",
    direction: "/login/process",
  },
  {
    icon: <HiOutlineChatBubbleLeftRight className={sidebarClass.icon} />,
    label: "Chats",
    direction: "/login/chats",
  },
  {
    icon: <HiOutlineDatabase className={sidebarClass.icon} />,
    label: "Base de Datos",
    direction: "/login/data-base",
  },
  {
    icon: <HiOutlineCalendar className={sidebarClass.icon} />,
    label: "Calendario",
    direction: "/login/calendar",
  },
  {
    icon: <HiOutlineChartBar className={sidebarClass.icon} />,
    label: "Metricas",
    direction: "/login/metrics",
  },
  {
    icon: <HiOutlineMail className={sidebarClass.icon} />,
    label: "Correos",
    direction: "/login/mails",
  },
  {
    icon: <HiOutlineExclamationCircle className={sidebarClass.icon} />,
    label: "Recordatorios",
    direction: "/login/alarms",
  },
  {
    icon: <HiOutlineCog className={sidebarClass.icon} />,
    label: "Configuraciones",
    direction: "/login/settings",
  },
];

export function Sidebar(): JSX.Element {
  const [active, setActive] = useState<number>(1);
  const { colorScheme } = useMantineColorScheme();

  const links = sections.map((section: sidebarItems, index) => {
    return (
      <NavIcon
        key={index}
        icon={section.icon}
        label={section.label}
        dir={section.direction}
        active={index === active}
        onClick={() => {
          setActive(index);
        }}
      />
    );
  });

  return (
    <nav
      className={
        colorScheme === "light"
          ? sidebarClass.sidebar
          : sidebarClass.sidebar_dark
      }
    >
      <Stack
        style={{ height: "100%" /* paddingBottom: "1rem" */ }}
        justify="space-between"
        align="center"
      >
        <Stack justify="center" gap={12} align="center">
          {links}
        </Stack>
        <Stack justify="center" gap={12}>
          <NotificationIcon active key={crypto.randomUUID()} />
          <NavIcon
            dir={"/"}
            icon={<HiOutlineLogout className={sidebarClass.icon} />}
            label={"Logout"}
          />
        </Stack>
      </Stack>
    </nav>
  );
}
