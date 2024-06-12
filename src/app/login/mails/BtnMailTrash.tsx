"use client";

import { HiOutlineTrash } from "@/icons";
import { useMailStore } from "@/store/mail-store";
import { Center, Modal, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import DeleteMailLayout from "./layout/DeleteMailLayout";
import { useState } from "react";
import { MailDataProps } from "@/interface/interface";

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
        styles={{
          root: {
            backgroundColor: "#ff00004c",
            color: "red",
            fontSize: "1.2rem",
            borderRadius: "0 6px 6px 0",
          },
        }}
      >
        <Center px={4}>
          <HiOutlineTrash />
        </Center>
      </UnstyledButton>
    </>
  );
}
