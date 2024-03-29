"use client";

import { HiOutlineTrash } from "@/icons";
import { Center, UnstyledButton } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import React from "react";

export default function BtnMailTrash() {
  return (
    <UnstyledButton
      onClick={() => {
        notifications.show({
          id: crypto.randomUUID(),
          color: "#115dfe",
          title: "Correo eliminado",
          message: "El correo ha sido eliminado satistactoriamente!",
          autoClose: 1000,
          withCloseButton: true,
        });
      }}
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
  );
}
