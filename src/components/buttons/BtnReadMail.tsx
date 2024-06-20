"use client";

import { HiOutlineMail, HiOutlineMailOpen } from "@/icons";
import { Center, UnstyledButton, useMantineColorScheme } from "@mantine/core";
import React, { useEffect, useState } from "react";
import classes from "@/styles/btn-styles.module.css";
import TooltipLayout from "../TooltipLayout";
import { notifications } from "@mantine/notifications";
import { useMailStore } from "@/store/mail-store";

export default function BtnReadMail({
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
  const { fnReadMark, mailGlobalArray } = useMailStore();

  useEffect(() => {
    // setReadMail(status)
    const mailFound = mailGlobalArray.find((mail) => mail.idMail === mailId);
    if (mailFound !== undefined) { 
      setReadMail(mailFound.mailRead);
    }
    setReadMail(status)
    
  },[status, fnReadMark])
  return (
    <TooltipLayout
      label={!readMail ? "Marcar como Leido" : "Marcar como No Leido"}
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
          fnReadMark(mailId, path);
          setReadMail(!readMail);
          notifications.show({
            color: !readMail ? "#115dfe" : "#2BDD66",
            message: !readMail
              ? "Correo marcado como Leido satisfactoriamente!"
              : "Correo marcado como no Leido satisfactoriamente!",
            id: crypto.randomUUID(),
            title: !readMail ? "Marcado como Leido" : "Marcado como No Leido",
          });
        }}
      >
        <Center
          styles={(theme) => ({
            root: {
              fontSize: "1.1rem",
              // border: "1px solid red",
              color: !readMail
                ? colorScheme === "light"
                  ? theme.colors.lightTheme[6]
                  : theme.colors.darkTheme[1]
                : colorScheme === "light"
                ? theme.colors.lightTheme[3]
                : theme.colors.darkTheme[2],
            },
          })}
        >
          {readMail ? <HiOutlineMailOpen /> : <HiOutlineMail />}
        </Center>
      </UnstyledButton>
    </TooltipLayout>
  );
}
