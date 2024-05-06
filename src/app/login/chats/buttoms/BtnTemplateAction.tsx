"use client";

import {
  HiOutlineDotsVertical,
  HiOutlineCheck,
  HiOutlineTrash,
  IoClose,
} from "@/icons";
import {
  useMantineColorScheme,
  Button,
  Center,
  Modal,
  Stack,
  Flex,
  Menu,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "@/styles/btn-styles.module.css";
import { notifications } from "@mantine/notifications";
import DeleteTemplateLayout from "./DeleteTemplateLayout";
import { FormatCardProps } from "@/interface/interface";

export default function BtnTemplateAction({
  userCreator,
  description,
  title,
  date,
  id,
}: FormatCardProps) {
  const { colorScheme } = useMantineColorScheme();
  const [opened, { open, close }] = useDisclosure(false);

  // Functions for manipulate each card (delete or edit)
  function handleDeleteCard() {
    // deleteCard(idCard, columnId);
    notifications.show({
      id: crypto.randomUUID(),
      color: "#115dfe",
      title: "Formato Eliminado",
      message: `El formato titulado: "${title}" fue eliminada satisfactoriamente!`,
      autoClose: 1000,
      withCloseButton: true,
    });
    close();
  }
  return (
    <>
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
          <DeleteTemplateLayout
            description={description}
            userCreator={userCreator}
            title={title}
            date={date}
            id={id}
          />
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
              onClick={handleDeleteCard}
            >
              Aceptar
            </Button>
          </Flex>
        </Stack>
      </Modal>

      <Menu
        position="bottom-end"
        closeOnClickOutside
        closeOnItemClick
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
            className={
              colorScheme === "light"
                ? classes.btnDot_icon
                : classes.btnDot_icon_dark
            }
            styles={{
              root: {
                fontSize: "1.4rem",
                padding: "0.2rem",
              },
            }}
          >
            <HiOutlineDotsVertical />
          </Center>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item color="#F0185C" onClick={open}>
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
