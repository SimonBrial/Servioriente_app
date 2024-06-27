"use client";

import { LuFolderOutput, LuFolderInput } from "@/icons";
import { Center, UnstyledButton, useMantineColorScheme } from "@mantine/core";
import React, { useEffect, useState } from "react";
import classes from "@/styles/btn-styles.module.css";
import TooltipLayout from "../TooltipLayout";
import { notifications } from "@mantine/notifications";
import { useMailStore } from "@/store/mail-store";

export default function BtnArchive({
  status,
  mailId,
  path,
}: {
  status: boolean;
  mailId: string;
  path: string;
}) {
  const [readMail, setReadMail] = useState<boolean>(status);
  const { colorScheme } = useMantineColorScheme();
  const { fnArchivedMark } = useMailStore();

  useEffect(() => setReadMail(status), [status]);

  // TODO: Forzar a que segun la seccion se mantenga el icono

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
          fnArchivedMark(mailId, path);
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
