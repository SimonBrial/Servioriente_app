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
} from "@mantine/core";
import { HiOutlineTrash, HiOutlineCheck } from "../../icons";
import btnClass from "@/styles/btn-styles.module.css";
import { TitleLayout } from "../layout/TitleLayout";
import BtnActions from "./BtnActions";
import React from "react";
import TooltipLayout from "../TooltipLayout";

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
            <ScrollArea h={350} offsetScrollbars>
              {" "}
              {children}
            </ScrollArea>
          </Container>
          <BtnActions title="Aceptar" icon={<HiOutlineCheck />} close={close} />
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
