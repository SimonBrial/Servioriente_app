"use client";

import {
  useMantineColorScheme,
  Center,
  Modal,
  Flex,
  Text,
  Stack,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HiOutlineTrash, HiOutlineCheck, IoClose } from "@/icons";
import DeleteAlarmLayout from "../DeleteAlarmLayout";
import classesBtn from "@/styles/btn-styles.module.css"
import { notifications } from "@mantine/notifications";

export default function BtnDeleteAlarm({ deleteRef }: { deleteRef: any }) {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
        styles={{
          content: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
          },
        }}
      >
        <Stack>
          <DeleteAlarmLayout />
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
                    ? classesBtn.btnAdd
                    : classesBtn.btnAdd_dark,
              }}
              styles={(theme) => ({
                section: { fontSize: "1.2rem" },
              })}
              onClick={() => {
                close();
                notifications.show({
                  id: crypto.randomUUID(),
                  color: "#2BDD66",
                  title: "Recordatorio Eliminado",
                  message: "El recordatorio ha sido eliminado satisfactoriamente!",
                  autoClose: 1000,
                  withCloseButton: true,
                });
              }}
            >
              Aceptar
            </Button>
          </Flex>
        </Stack>
      </Modal>
      <Flex gap={6} onClick={open} ref={deleteRef}>
        <Center style={{ fontSize: "1.2rem" }}>
          <HiOutlineTrash />
        </Center>
        <Text>Elimnar</Text>
      </Flex>
    </>
  );
}
