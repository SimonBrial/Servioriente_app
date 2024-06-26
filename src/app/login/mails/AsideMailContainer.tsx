"use client";

import React, { useEffect, useState } from "react";
import MailItem from "./MailItem";
import {
  useMantineColorScheme,
  ScrollArea,
  Center,
  Badge,
  Stack,
  Group,
  Title,
} from "@mantine/core";
import { ContainerInside } from "@/components/container/ContainerInside";
import BtnMail from "@/components/buttons/BtnMail";
import { useMailStore } from "@/store/mail-store";
import { usePathname } from "next/navigation";
import { MailDataProps } from "@/interface/interface";
import { HiOutlineDocumentText, LuMailX } from "@/icons";
import BtnDeleteMails from "./buttons/BtnDeleteMails";

export const AsideMailContainer = () => {
  const { colorScheme } = useMantineColorScheme();
  const { mailGlobalArray, itemChecked, fnGetAllData } = useMailStore();
  // Url Path
  const path = usePathname();
  // Data to show
  const [dataMails, setDataMails] = useState<MailDataProps[]>();
  useEffect(() => {
    const data = fnGetAllData(path);
    // const data2 = fnGetAllData(path);
    // console.log("fnGetAllData: ", data);
    // console.log("path: ", path);
    setDataMails(data);
  }, [
    mailGlobalArray.length,
    dataMails?.length,
    mailGlobalArray,
    itemChecked,
    path,
  ]);

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
                mailArchive,
                mailFavorite,
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
                  mailArchive={mailArchive}
                  mailFavorite={mailFavorite}
                  mailRead={mailRead}
                  userName={userName}
                  idMail={idMail}
                  photo={photo}
                  title={title}
                  date={date}
                  mail={mail}
                  key={idMail}
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
          {path.includes("formats") ? (
            <>
              <Center style={{ fontSize: "5rem" }}>
                <HiOutlineDocumentText />
              </Center>
              <Title style={{ textAlign: "center" }}>
                No hay Formatos disponibles
              </Title>
            </>
          ) : (
            <>
              <Center style={{ fontSize: "5rem" }}>
                <LuMailX />
              </Center>
              <Title style={{ textAlign: "center" }}>
                No hay correos disponibles
              </Title>
            </>
          )}
        </Stack>
      );
    }
  }

  return (
    <ContainerInside width="35%" allWhite={false} withBorder>
      <Stack gap={4} style={{ height: "100%" }}>
        {itemChecked.length > 0 ? null : <BtnMail />}
        {itemChecked.length > 0 && <BtnDeleteMails />}
        {showMailArray()}
        <Group
          align="center"
          justify="center"
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? theme.colors.lightTheme[3]
                  : theme.colors.darkTheme[2],
              border:
                colorScheme === "light"
                  ? `2px solid ${theme.colors.lightTheme[2]}`
                  : `2px solid ${theme.colors.darkTheme[6]}`,
              borderRadius: "6px",
              padding: "0.5rem",
              backgroundColor:
                colorScheme === "light"
                  ? theme.colors.lightTheme[1]
                  : theme.colors.darkTheme[8],
              cursor: "default",
            },
          })}
        >
          <Title order={5}>Correos Totales</Title>{" "}
          <Badge
            radius={"sm"}
            color={colorScheme === "light" ? "#115dfe" : "#52a5e0"}
          >
            {dataMails?.length}
          </Badge>
        </Group>
      </Stack>
    </ContainerInside>
  );
};
