"use client";

import { HiOutlineTrash } from "@/icons";
import { Center, Modal, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

export default function BtnMailTrash() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        prueba
      </Modal>
      <UnstyledButton
        onClick={open}
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
