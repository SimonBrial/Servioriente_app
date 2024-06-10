"use client";

import {
  useMantineColorScheme,
  Button,
  Modal,
  Stack,
  Flex,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HiOutlineTrash, HiOutlineCheck, IoClose } from "@/icons";
import DeleteAlarmLayout from "../layouts/DeleteAlarmLayout";
import classesBtn from "@/styles/btn-styles.module.css";
import { notifications } from "@mantine/notifications";
import { AlarmObj } from "@/interface/interface";
import { useAlarmStore } from "@/store/alarm-store";

export default function BtnDeleteAlarm({ obj }: { obj: AlarmObj }) {
  // console.log(obj);
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();
  const { fnDeleteAlarm, setCloseDescription } = useAlarmStore();

  const handleDeleteAlarm = async () => {
    try {
      setCloseDescription(true);
      await fnDeleteAlarm(obj.id, obj.folderAssigned);
      await close();
      await notifications.show({
        id: crypto.randomUUID(),
        color: "#2BDD66",
        title: "Recordatorio Eliminado",
        message: "El recordatorio ha sido eliminado satisfactoriamente!",
        autoClose: 1000,
        withCloseButton: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

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
        <Stack style={{ width: "100%" }}>
          <DeleteAlarmLayout alarmId={obj.id} folderName={obj.folderAssigned} />
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
              styles={{
                section: { fontSize: "1.2rem" },
              }}
              onClick={handleDeleteAlarm}
            >
              Aceptar
            </Button>
          </Flex>
        </Stack>
      </Modal>
      <Button
        onClick={open}
        fullWidth
        leftSection={<HiOutlineTrash />}
        styles={(theme) => ({
          root: {
            color: "white",
            backgroundColor: `${theme.colors.principalTheme[9]}`,
          },
          section: { fontSize: "1.2rem" },
        })}
      >
        Borrar
      </Button>
    </>
  );
}
