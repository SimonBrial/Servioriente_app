"use client";

import { HiOutlineTrash } from "@/icons";
import { useMailStore } from "@/store/mail-store";
import {
  Center,
  Modal,
  UnstyledButton,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { MailDataProps } from "@/interface/interface";
import classes from "@/styles/btn-styles.module.css";
import DeleteMailLayout from "../layout/DeleteMailLayout";

export default function BtnMailTrash({
  mailId,
  path,
}: {
  mailId: string;
  path: string;
}) {
  const { fnDeleteMail, fnDeleteMailFromTrash } = useMailStore();
  const [opened, { open, close }] = useDisclosure(false);
  const [mailObj, setMailObj] = useState<MailDataProps | {}>({});
  const { colorScheme } = useMantineColorScheme();

  function handleMailDelete() {
    if (path.includes("erased")) {
      open();
      setMailObj(fnDeleteMailFromTrash(mailId));
    }
    fnDeleteMail(mailId, path);
    notifications.show({
      id: crypto.randomUUID(),
      color: "#115dfe",
      title: "Correo eliminado",
      message: "El correo ha sido eliminado satistactoriamente!",
      autoClose: 1000,
      withCloseButton: true,
    });
  }

  return (
    <>
      <Modal opened={opened} onClose={close} centered>
        <DeleteMailLayout mailObj={mailObj as MailDataProps} />
      </Modal>
      <UnstyledButton
        onClick={handleMailDelete}
        classNames={{
          root:
            colorScheme === "light" ? classes.btnMail : classes.btnMail_dark,
        }}
      >
        <Center px={4} style={{ fontSize: "1.1rem" }}>
          <HiOutlineTrash />
        </Center>
      </UnstyledButton>
    </>
  );
}
