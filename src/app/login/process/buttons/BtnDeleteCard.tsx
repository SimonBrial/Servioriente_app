"use client";

import {
  HiOutlineCheck,
  HiOutlineTrash,
  IoClose,
} from "@/icons";
import {
  useMantineColorScheme,
  Center,
  Button,
  Modal,
  Stack,
  Text,
  Flex,
} from "@mantine/core";
import classes from "@/styles/btn-styles.module.css";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";

export default function BtnDeleteCard() {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();
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
          prueba
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
              styles={(theme) => ({
                section: { fontSize: "1.2rem" },
              })}
              onClick={() => {
                notifications.show({
                  id: crypto.randomUUID(),
                  color: "#2BDD66",
                  title: "Tarea Eliminada",
                  message: "Tarea eliminada satisfactoriamente!",
                  autoClose: 1000,
                  withCloseButton: true,
                });
                close();
              }}
            >
              Aceptar
            </Button>
          </Flex>
        </Stack>
      </Modal>
      <Flex gap={6} onClick={open}>
        <Center style={{ fontSize: "1.2rem" }}>
          <HiOutlineTrash />
        </Center>
        <Text>Eliminar</Text>
      </Flex>
    </>
  );
}
