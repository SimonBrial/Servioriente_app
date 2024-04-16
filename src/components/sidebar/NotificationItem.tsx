"use client";

import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineExclamationCircle,
  HiOutlineDotsVertical,
  HiOutlineDatabase,
  HiOutlineTemplate,
  HiOutlineCalendar,
  HiOutlineChartBar,
  AiOutlineIdcard,
  HiOutlineTrash,
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCog,
} from "@/icons";
import { SectionTypes } from "@/types/types";
import {
  useMantineColorScheme,
  Center,
  Modal,
  Flex,
  Text,
  Box,
  Portal,
} from "@mantine/core";
import btnClasses from "@/styles/btn-styles.module.css";
import classes from "@/styles/general-styles.module.css";
import { useState } from "react";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";

interface NotificationItemProps {
  section: SectionTypes;
  descriptions: string;
  dir: string;
  onCloseFn: () => void;
}

const sections = [
  {
    icon: <HiOutlineUser />,
    label: "User",
  },
  {
    icon: <HiOutlineTemplate />,
    label: "Dashboard",
  },
  {
    icon: <AiOutlineIdcard />,
    label: "Procesos",
  },
  {
    icon: <HiOutlineChatBubbleLeftRight />,
    label: "Chats",
  },
  {
    icon: <HiOutlineDatabase />,
    label: "Base de Datos",
  },
  {
    icon: <HiOutlineCalendar />,
    label: "Calendario",
  },
  {
    icon: <HiOutlineChartBar />,
    label: "Metricas",
  },
  {
    icon: <HiOutlineMail />,
    label: "Correos",
  },
  {
    icon: <HiOutlineExclamationCircle />,
    label: "Recordatorios",
  },
  {
    icon: <HiOutlineCog />,
    label: "Configuracion",
  },
];

export default function NotificationItem({
  descriptions,
  onCloseFn,
  section,
  dir,
}: NotificationItemProps) {
  const [deleteCard, setDeleteCard] = useState(false);
  const { colorScheme } = useMantineColorScheme();
  const [opened, { open, close }] = useDisclosure(false);

  function selectIcon(sectionLabel: SectionTypes) {
    const iconSelected = sections.find(
      (section, index) => section.label === sectionLabel,
    );
    return iconSelected?.icon;
  }
  return (
    <>
      <Portal>
        <Modal opened={opened} onClose={close} title="Authentication" centered>
          prueba
        </Modal>
      </Portal>
      <Box>
        <Flex
          justify={"space-between"}
          className={
            colorScheme === "light"
              ? classes.notificationItem
              : classes.notificationItem_dark
          }
        >
          <Link href={dir} style={{ width: "100%" }}>
            <Flex gap={6} align={"center"} style={{ padding: "0.2rem" }}>
              <Center style={{ fontSize: "1.2rem" }}>
                {selectIcon(section)}
              </Center>
              <Text size="sm">{descriptions}</Text>
            </Flex>
          </Link>
          {deleteCard ? (
            <Center
              className={
                colorScheme === "light"
                  ? btnClasses.btnDot_icon
                  : btnClasses.btnDot_icon_dark
              }
              onClick={() => setDeleteCard((deleteCard) => !deleteCard)}
            >
              <HiOutlineTrash
                style={{ color: "#F0185C" }}
                onClick={() => {
                  open();
                  onCloseFn();
                }}
              />
            </Center>
          ) : (
            <Center
              className={
                colorScheme === "light"
                  ? btnClasses.btnDot_icon
                  : btnClasses.btnDot_icon_dark
              }
              onClick={() => setDeleteCard((deleteCard) => !deleteCard)}
            >
              <HiOutlineDotsVertical />
            </Center>
          )}
        </Flex>
      </Box>
    </>
  );
}
