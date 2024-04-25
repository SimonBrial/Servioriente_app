"use client";

import React, { useEffect, useState } from "react";
import { Stack, useMantineColorScheme } from "@mantine/core";
import {
  HiOutlineChatBubbleLeftRight,
  MdOutlineAccessAlarms,
  HiOutlineDatabase,
  HiOutlineTemplate,
  HiOutlineCalendar,
  HiOutlineChartBar,
  HiOutlineLogout,
  AiOutlineIdcard,
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCog,
} from "@/icons";
import classes from "@/styles/general-styles.module.css";
import NavIcon from "./NavIcon";
import { sidebarItems } from "@/interface/interface";
import NotificationIcon from "./NotificationIcon";
import { usePathname } from "next/navigation";

const sections: sidebarItems[] = [
  {
    icon: <HiOutlineUser className={classes.icon} />,
    label: "User",
    direction: "",
  },
  {
    icon: <HiOutlineTemplate className={classes.icon} />,
    label: "Dashboard",
    direction: "/login/dashboard",
  },
  {
    icon: <AiOutlineIdcard className={classes.icon} />,
    label: "Procesos",
    direction: "/login/process",
  },
  {
    icon: <HiOutlineChatBubbleLeftRight className={classes.icon} />,
    label: "Chats",
    direction: "/login/chats",
  },
  {
    icon: <HiOutlineDatabase className={classes.icon} />,
    label: "Base de Datos",
    direction: "/login/data-base",
  },
  {
    icon: <HiOutlineCalendar className={classes.icon} />,
    label: "Calendario",
    direction: "/login/calendar",
  },
  {
    icon: <HiOutlineChartBar className={classes.icon} />,
    label: "Metricas",
    direction: "/login/metrics",
  },
  {
    icon: <HiOutlineMail className={classes.icon} />,
    label: "Correos",
    direction: "/login/mails",
  },
  {
    icon: <MdOutlineAccessAlarms className={classes.icon} />,
    label: "Recordatorios",
    direction: "/login/alarms",
  },
  {
    icon: <HiOutlineCog className={classes.icon} />,
    label: "Configuracion",
    direction: "/login/settings",
  },
];

export function Sidebar(): JSX.Element {
  const path = usePathname();
  const [active, setActive] = useState<number>(1);
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    setActive(
      sections.findIndex((section) =>
        section.direction.includes(path.split("/")[2]),
      ),
    );
  }, [path]);

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
        colorScheme === "light" ? classes.sidebar : classes.sidebar_dark
      }
    >
      <Stack style={{ height: "100%" }} justify="space-between" align="center">
        <Stack justify="center" gap={12} align="center">
          {links}
        </Stack>
        <Stack justify="center" gap={12} align="center">
          <NotificationIcon active key={crypto.randomUUID()} />
          <NavIcon
            key={crypto.randomUUID()}
            dir={"/"}
            icon={<HiOutlineLogout className={classes.icon} />}
            label={"Logout"}
          />
        </Stack>
      </Stack>
    </nav>
  );
}
