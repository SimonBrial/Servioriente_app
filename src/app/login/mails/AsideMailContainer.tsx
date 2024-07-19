"use client";

import React, { useEffect, useState } from "react";
import MailItem from "./MailItem";
import {
  useMantineColorScheme,
  ScrollArea,
  Center,
  Button,
  Badge,
  Stack,
  Group,
  Title,
  Flex,
} from "@mantine/core";
import { ContainerInside } from "@/components/container/ContainerInside";
import { useMailStore } from "@/store/mail-store";
import { usePathname } from "next/navigation";
import { MailDataProps, MailTemplateProps } from "@/interface/interface";
import { HiOutlineDocumentText, HiOutlinePencil, LuMailX } from "@/icons";
import BtnDeleteMails from "./buttons/BtnDeleteMails";
import BtnCreateMail from "@/components/buttons/BtnCreateMail";
import classes from "@/styles/btn-styles.module.css";
import Link from "next/link";
import MailTemplateItem from "./formats/MailTemplateItem";
import { FilterMailTemplate } from "./formats/FilterMailTemplate";

export const AsideMailContainer = () => {
  const { colorScheme } = useMantineColorScheme();
  const {
    fnFavoriteMarkTemplate,
    mailGlobalArray,
    mailTemplates,
    fnGetAllData,
    itemChecked,
  } = useMailStore();
  // Url Path
  const path = usePathname();
  // Data to show
  const [dataMails, setDataMails] = useState<
    MailDataProps[] | MailTemplateProps[]
  >();
  useEffect(() => {
    const data = fnGetAllData(path);
    // console.log(path);
    setDataMails(data);
  }, [
    fnFavoriteMarkTemplate,
    mailGlobalArray.length,
    mailTemplates.length,
    dataMails?.length,
    mailGlobalArray,
    mailTemplates,
    itemChecked,
    path,
  ]);

  // console.log("dataMails: ", dataMails);

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
            {dataMails.map((item: MailDataProps | MailTemplateProps) => {
              if (!path.includes("formats")) {
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
                  docs,
                } = item as MailDataProps;
                return (
                  <MailItem
                    mailFavorite={mailFavorite}
                    description={description}
                    mailArchive={mailArchive}
                    mailRead={mailRead}
                    userName={userName}
                    idMail={idMail}
                    photo={photo}
                    title={title}
                    key={idMail}
                    date={date}
                    mail={mail}
                    path={path}
                    docs={docs}
                  />
                );
              }

              const {
                templateFavorite,
                shortDescription,
                bodyDescription,
                userCreatedAt,
                userUpdatedAt,
                createdAt,
                updatedAt,
                title,
                id,
              } = item as MailTemplateProps;
              return (
                <MailTemplateItem
                  templateFavorite={templateFavorite}
                  bodyDescription={bodyDescription}
                  shortDescription={shortDescription}
                  userCreatedAt={userCreatedAt}
                  userUpdatedAt={userUpdatedAt}
                  createdAt={createdAt}
                  updatedAt={updatedAt}
                  title={title}
                  id={id}
                  key={id}
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
        {itemChecked.length > 0 ? null : path.includes("formats") ? (
          <Flex align={"center"} gap={8}>
            <Link
              href={"/login/mails/formats/create"}
              style={{ width: "100%", maxWidth: "100%" }}
            >
              <Button
                fullWidth
                leftSection={<HiOutlineDocumentText />}
                styles={{
                  section: { fontSize: "1.2rem" },
                  root: { padding: "0.5rem" },
                }}
                classNames={{
                  root:
                    colorScheme === "light"
                      ? classes.btnAdd
                      : classes.btnAdd_dark,
                }}
              >
                Crear Nuevo Formato
              </Button>
            </Link>
            <FilterMailTemplate />
          </Flex>
        ) : (
          <Link href={"/login/mails/create"}>
            <Button
              fullWidth
              leftSection={<HiOutlinePencil />}
              classNames={{
                root:
                  colorScheme === "light"
                    ? classes.btnAdd
                    : classes.btnAdd_dark,
              }}
            >
              Crear Nuevo Correo
            </Button>
          </Link>
        )}
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
