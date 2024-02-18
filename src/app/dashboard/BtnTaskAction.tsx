"use client";

import NotificationLayout from "@/components/NotificationLayout";
import { HiOutlineCheck, IoClose } from "@/icons";
import {
  UnstyledButton,
  Center,
  Modal,
  Text,
  Flex,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

type typeTaskActions = "complete" | "delete";

export const BtnTaskAction = ({ type }: { type: typeTaskActions }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();
  /*
  notifications.show({
              color: "green.6",
              autoClose: 3000,
              title: "Completada",
              message: "Tarea Completada 😎",
            });
  */
  return (
    <>
      {type === "complete" ? (
        <NotificationLayout
          title="Tarea Completada"
          type="Completado"
          description="La tarea seleccionada, ha sido completada"
        >
          <Flex align={"center"} gap={6}>
            <Center
              styles={(theme) => ({
                root: {
                  color: theme.colors.lightTheme[0],
                  backgroundColor: theme.colors.principalTheme[3],
                  borderRadius: "50%",
                  padding: "0.2rem",
                },
              })}
            >
              <HiOutlineCheck />
            </Center>
            <Text>Completado</Text>
          </Flex>
        </NotificationLayout>
      ) : (
        <>
          <Modal
            opened={opened}
            onClose={close}
            withCloseButton={false}
            // closeOnClickOutside={false}
            styles={{
              content: {
                backgroundColor:
                  colorScheme === "light" ? "#F8F8F8" : "#262749",
              },
            }}
          >
            Prueba
          </Modal>
          <UnstyledButton onClick={open} style={{ width: "100%" }}>
            <Flex align={"center"} gap={6}>
              <Center
                styles={(theme) => ({
                  root: {
                    color: theme.colors.lightTheme[0],
                    backgroundColor: theme.colors.principalTheme[9],
                    borderRadius: "50%",
                    padding: "0.2rem",
                  },
                })}
              >
                <IoClose />
              </Center>
              <Text>Borrar</Text>
            </Flex>
          </UnstyledButton>
        </>
      )}
    </>
  );
};
