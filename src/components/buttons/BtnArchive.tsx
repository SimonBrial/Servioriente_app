"use client";

import { LuFolderOutput, LuFolderInput } from "@/icons";
import { Center, UnstyledButton, useMantineColorScheme } from "@mantine/core";
import React, { useState } from "react";
import classes from "@/styles/btn-styles.module.css";
import TooltipLayout from "../TooltipLayout";
import { notifications } from "@mantine/notifications";

export default function BtnArchive() {
  const [readMail, setReadMail] = useState<boolean>(false);
  const { colorScheme } = useMantineColorScheme();
  return (
    <TooltipLayout
      label={!readMail ? "Archivar" : "Desarchivar"}
      position="bottom"
      key={crypto.randomUUID()}
    >
      <UnstyledButton
        mb={0}
        classNames={{
          root:
            colorScheme === "light" ? classes.btnMail : classes.btnMail_dark,
        }}
        onClick={() => {
          setReadMail(!readMail);
          notifications.show({
            color: !readMail ? "#115dfe" : "#2BDD66",
            message: !readMail
              ? "Correo Archivado satisfactoriamente 😎!"
              : "Correo Desarchivado satisfactoriamente!",
            id: crypto.randomUUID(),
            title: !readMail ? "Correo Archivado" : "Correo Desarchivado",
          });
        }}
      >
        <Center
          styles={(theme) => ({
            root: {
              fontSize: "1.1rem",
              // border: "1px solid red",
              color: readMail
                ? colorScheme === "light"
                  ? theme.colors.lightTheme[6]
                  : theme.colors.darkTheme[1]
                : colorScheme === "light"
                  ? theme.colors.lightTheme[3]
                  : theme.colors.darkTheme[2],
            },
          })}
        >
          {readMail ? <LuFolderInput /> : <LuFolderOutput />}
        </Center>
      </UnstyledButton>
    </TooltipLayout>
  );
}
