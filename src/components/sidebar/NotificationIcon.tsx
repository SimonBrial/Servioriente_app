import { HiOutlineBell } from "@/icons";
import {
  Box,
  Center,
  Divider,
  Menu,
  UnstyledButton,
  useMantineColorScheme,
} from "@mantine/core";
import classes from "@/styles/general-styles.module.css";
import NotificationItem from "./NotificationItem";
import { SectionTypes } from "@/types/types";
import { useState } from "react";

interface NotificationItems {
  id: string | number;
  description: string;
  dir: string;
}
interface NotificationArray {
  sectionName: SectionTypes;
  notificationItem: NotificationItems[];
  idSection: string | number;
}

const notificationArrayFake: NotificationArray[] = [
  {
    sectionName: "Base de Datos",
    idSection: crypto.randomUUID(),
    notificationItem: [
      {
        id: 1,
        description: "Prueba de datos",
        dir: "/login/data-base",
      },
      {
        id: 2,
        description: "Prueba de datos 2",
        dir: "/login/data-base",
      },
      {
        id: 20,
        description: "Prueba de datos 3",
        dir: "/login/data-base",
      },
    ],
  },
  {
    sectionName: "Chats",
    idSection: crypto.randomUUID(),
    notificationItem: [
      {
        id: 3,
        description: "Chats",
        dir: "/login/chats",
      },
      {
        id: 4,
        description: "Chats 2",
        dir: "/login/chats",
      },
    ],
  },
  {
    sectionName: "Calendario",
    idSection: crypto.randomUUID(),
    notificationItem: [
      {
        id: 41,
        description: "Calendario 2",
        dir: "/login/calendar",
      },
    ],
  },
  {
    sectionName: "Configuracion",
    idSection: crypto.randomUUID(),
    notificationItem: [],
  },
  {
    sectionName: "Correos",
    idSection: crypto.randomUUID(),
    notificationItem: [],
  },
  {
    sectionName: "Dashboard",
    idSection: crypto.randomUUID(),
    notificationItem: [],
  },
  {
    sectionName: "Metricas",
    idSection: crypto.randomUUID(),
    notificationItem: [],
  },
  {
    sectionName: "Procesos",
    idSection: crypto.randomUUID(),
    notificationItem: [
      {
        id: 5,
        description: "Procesos 1",
        dir: "/login/process",
      },
    ],
  },
  {
    sectionName: "Recordatorios",
    idSection: crypto.randomUUID(),
    notificationItem: [],
  },
  {
    sectionName: "User",
    idSection: crypto.randomUUID(),
    notificationItem: [],
  },
];

export default function NotificationIcon({ active }: { active: boolean }) {
  const { colorScheme } = useMantineColorScheme();
  const [closeMenu, setCloseMenu] = useState(false);
  // const [showMenu, setShowMenu] = useState(false);

  // To close the Modal
  const handleCloseMenu = () => {
    if (!closeMenu) {
      setCloseMenu((closeMenu) => !closeMenu);
    }
    setCloseMenu(true);
  };

  // To close the menu when the user click on the notification item
  /* const handleShowMenu = () => {
    if (!showMenu) {
      setShowMenu((showMenu) => !showMenu);
    }
    setShowMenu(true);
  }; */

  return (
    <Menu
      zIndex={closeMenu ? 0 : 300}
      closeOnClickOutside={false}
      closeOnItemClick={false}
      arrowPosition="center"
      position="right-end"
      width={300}
      shadow="md"
      offset={8}
      withArrow
    >
      <Menu.Target>
        <Box style={{ position: "relative" }}>
          <UnstyledButton
            styles={{ root: { color: "black", padding: "0.8rem" } }}
            data-active={active || undefined}
          >
            <Center>
              <HiOutlineBell
                className={
                  colorScheme === "light" ? classes.icon : classes.icon_dark
                }
              />
            </Center>
          </UnstyledButton>
          {active ? (
            <span
              style={{
                position: "absolute",
                width: "10px",
                height: "10px",
                backgroundColor: "#F0185C",
                borderRadius: "100%",
                right: "0.85rem",
                bottom: "1rem",
              }}
            ></span>
          ) : null}
        </Box>
      </Menu.Target>
      <Menu.Dropdown>
        {notificationArrayFake.map((section) => {
          return section.notificationItem.length > 0 ? (
            <div key={section.idSection}>
              <Menu.Label>
                {" "}
                <Divider
                  my="xs"
                  label={section.sectionName}
                  color={colorScheme === "light" ? "#696969" : "#EFF3F5"}
                  labelPosition="left"
                  style={{
                    fontSize: "1.5rem",
                  }}
                />
              </Menu.Label>
              {section.notificationItem.map((item) => (
                <Menu.Item key={item.id}>
                  <NotificationItem
                    descriptions={item.description}
                    section={section.sectionName}
                    onCloseFn={handleCloseMenu}
                    key={crypto.randomUUID()}
                    dir={item.dir}
                  />
                </Menu.Item>
              ))}
              {/* {section.notificationItem.length - 1 ? (
                <div style={{ marginTop: "4px" }}>
                  <GeneralDivider orientation="horizontal" />
                </div>
              ) : (
                <></>
              )} */}
            </div>
          ) : (
            null
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
}
