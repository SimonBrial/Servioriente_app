/* eslint-disable object-shorthand */
"use client";

import { useDisclosure } from "@mantine/hooks";
import {
  useMantineColorScheme,
  UnstyledButton,
  ScrollArea,
  Container,
  Center,
  Modal,
  Stack,
  Title,
  Button,
  Flex,
} from "@mantine/core";
import { HiOutlineTrash, HiOutlineCheck, IoClose } from "../../icons";
import btnClass from "@/styles/btn-styles.module.css";
import { TitleLayout } from "../layout/TitleLayout";
import React from "react";
import TooltipLayout from "../TooltipLayout";
import { notifications } from "@mantine/notifications";
import { BtnDeleteProps } from "@/interface/interface";

export default function BtnDelete({
  description,
  children,
  labelBtn,
  loading,
  title,
  color,
  icon,
  id,
}: BtnDeleteProps): JSX.Element {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();

  return (
    <>
      <Modal
        centered
        opened={opened}
        onClose={close}
        withCloseButton={false}
        closeOnClickOutside={false}
        styles={{
          content: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
          },
        }}
      >
        <Stack style={{ padding: "1rem" }}>
          <TitleLayout
            title="Eliminar Registro"
            icon=""
            color=""
            onText={false}
          />
          <Title
            order={5}
            styles={(theme) => ({
              root: {
                color:
                  colorScheme === "light"
                    ? `${theme.colors.lightTheme[3]}`
                    : `${theme.colors.darkTheme[2]}`,
                textAlign: "center",
              },
            })}
          >
            {" "}
            Estas seguro que quiere eliminar este registro?
          </Title>
          <Container
            py={16}
            w={370}
            style={{
              border: "1px solid #cdcdcd",
              borderRadius: "6px",
            }}
          >
            <ScrollArea h={350} offsetScrollbars scrollbarSize={2} pr={5}>
              {" "}
              {children}
            </ScrollArea>
          </Container>
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
                    ? btnClass.btnAdd
                    : btnClass.btnAdd_dark,
              }}
              styles={(theme) => ({
                section: { fontSize: "1.2rem" },
              })}
              onClick={() => {
                notifications.show({
                  id: id,
                  color: color,
                  title: title,
                  message: description,
                  autoClose: 1000,
                  withCloseButton: true,
                });
                close();
              }}
            >
              {labelBtn}
            </Button>
          </Flex>
        </Stack>
      </Modal>

      <TooltipLayout label="Borrar" position="top" key={crypto.randomUUID()}>
        <UnstyledButton
          variant="transparent"
          color="gray"
          onClick={open}
          aria-label="Borrar"
          className={
            colorScheme === "light"
              ? btnClass.btnDelete_item
              : btnClass.btnDelete_item_dark
          }
        >
          <Center>
            <HiOutlineTrash />
          </Center>
        </UnstyledButton>
      </TooltipLayout>
    </>
  );
}
