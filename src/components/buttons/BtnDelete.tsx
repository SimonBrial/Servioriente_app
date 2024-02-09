"use client";

import { useDisclosure } from "@mantine/hooks";
import {
  Container,
  Modal,
  ScrollArea,
  Stack,
  Title,
  Tooltip,
  UnstyledButton,
  useMantineColorScheme,
} from "@mantine/core";
import { HiOutlineTrash, HiOutlineCheck } from "../../icons";
import btnClass from "@/styles/BtnStyles.module.css";
import { TitleLayout } from "../layout/TitleLayout";
import BtnActions from "./BtnActions";
import React from "react";

export default function BtnDelete({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        closeOnClickOutside={false}
        styles={{
          content: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#9a90ef1a",
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
            <ScrollArea h={350} offsetScrollbars>
              {" "}
              {children}
            </ScrollArea>
          </Container>
          <BtnActions title="Aceptar" icon={<HiOutlineCheck />} close={close} />
        </Stack>
      </Modal>

      <Tooltip
        label="Borrar"
        withArrow
        position="top"
        styles={(theme) => ({
          tooltip: {
            color: "white",
            background:
              colorScheme === "light"
                ? `${theme.colors.lightTheme[6]}`
                : `${theme.colors.darkTheme[1]}`,
          },
        })}
      >
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
          <HiOutlineTrash />
        </UnstyledButton>
      </Tooltip>
    </>
  );
}
