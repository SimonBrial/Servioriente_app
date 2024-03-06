import NewEmailLayout from "@/app/mails/NewEmailLayout";
import {
  useMantineColorScheme,
  Button,
  Drawer,
  Flex,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import classes from "@/styles/btnStyles.module.css";
import BtnSend from "./BtnSend";
import { BtnCancel } from "./BtnCancel";

export default function BtnMail() {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        closeOnClickOutside={false}
        position="right"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        withCloseButton={false}
        styles={{
          content: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
            padding: "0",
          },
        }}
      >
        <Stack gap={4}>
          <NewEmailLayout />
          <Flex gap={4}>
            <BtnCancel fnCancel={close} key={crypto.randomUUID()}/>
            <BtnSend
              label="Enviar Mensaje"
              close={() => console.log("FromBtnSend")}
              key={crypto.randomUUID()}
            />
          </Flex>
        </Stack>
      </Drawer>
      <Button
        onClick={open}
        classNames={{
          root: colorScheme === "light" ? classes.btnAdd : classes.btnAdd_dark,
        }}
      >
        Enviar Nuevo Correo
      </Button>
    </>
  );
}
