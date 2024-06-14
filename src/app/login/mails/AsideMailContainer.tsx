/* eslint-disable @typescript-eslint/prefer-optional-chain */
"use client";

import React, { useEffect, useState } from "react";
import MailItem from "./MailItem";
import {
  Center,
  ScrollArea,
  Stack,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { ContainerInside } from "@/components/container/ContainerInside";
import BtnMail from "@/components/buttons/BtnMail";
import { useMailStore } from "@/store/mail-store";
import { usePathname } from "next/navigation";
import { MailDataProps } from "@/interface/interface";
import { LuMailX } from "@/icons";
import BtnDeleteMails from "./buttons/BtnDeleteMails";

export const AsideMailContainer = () => {
  const { colorScheme } = useMantineColorScheme();
  const { fnSelectData, mailReceived, itemChecked } = useMailStore();
  // Url Path
  const path = usePathname();
  // Data to show
  const [dataMails, setDataMails] = useState<MailDataProps[]>();
  useEffect(() => {
    const data = fnSelectData(path);
    setDataMails(data);
  }, [path, mailReceived.length, mailReceived, itemChecked]);

  function showMailArray() {
    if (dataMails !== undefined) {
      if (dataMails.length > 0) {
        return (
          <ScrollArea
            h={"100%"}
            style={{ borderRadius: "6px" }}
            offsetScrollbars
            scrollbarSize={2}
          >
            {dataMails.map((item: MailDataProps, i: number) => {
              const {
                mailArchived,
                mailFavority,
                description,
                userName,
                mailRead,
                idMail,
                title,
                photo,
                mail,
                date,
              } = item as MailDataProps;
              return (
                <MailItem
                  path={path}
                  description={description}
                  mailArchived={mailArchived}
                  mailFavority={mailFavority}
                  mailRead={mailRead}
                  userName={userName}
                  idMail={idMail}
                  photo={photo}
                  title={title}
                  date={date}
                  mail={mail}
                  key={i}
                />
              );
            })}
          </ScrollArea>
        );
      }
      return (
        <Stack
          align="center"
          justify="center"
          styles={(theme) => ({
            root: {
              height: "100%",
              color:
                colorScheme === "light"
                  ? theme.colors.lightTheme[3]
                  : theme.colors.darkTheme[2],
            },
          })}
        >
          <Center style={{ fontSize: "5rem" }}>
            <LuMailX />
          </Center>
          <Title style={{ textAlign: "center" }}>
            No hay correos disponibles
          </Title>
        </Stack>
      );
    }
  }

  return (
    <ContainerInside width="35%" allWhite={false} withBorder>
      <Stack gap={4} style={{ height: "100%" }}>
        <BtnMail />
        {showMailArray()}
        {itemChecked.length > 0 && <BtnDeleteMails />}
      </Stack>
    </ContainerInside>
  );
};
