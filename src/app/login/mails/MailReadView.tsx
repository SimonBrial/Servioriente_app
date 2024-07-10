"use client";

import {
  useMantineColorScheme,
  UnstyledButton,
  ScrollArea,
  Container,
  Avatar,
  Center,
  Stack,
  Title,
  Flex,
  Text,
} from "@mantine/core";
import {
  CgCornerDoubleUpLeft,
  CgCornerUpRight,
  CgCornerUpLeft,
  HiOutlineMail,
  HiOutlineDocumentText,
} from "@/icons";
import classes from "@/styles/btn-styles.module.css";
import TooltipLayout from "@/components/TooltipLayout";
import BtnFavorities from "@/components/buttons/BtnFavorities";
import { useMailStore } from "@/store/mail-store";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MailDataProps, MailTemplateProps } from "@/interface/interface";
import BtnOthersFunctions from "./buttons/BtnOthersFunctions";
import parse from "html-react-parser";
import TemplateReadView from "./TemplateReadView";

export default function MailReadView(): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  const {
    closeMailDescription,
    mailGlobalArray,
    mailFavorities,
    mailArchived,
    mailShow,
  } = useMailStore();
  const path = usePathname();
  const [mailToShow, setMailToShow] = useState<
    MailDataProps | MailTemplateProps | {}
  >({});

  useEffect(() => {
    if (mailShow) {
      setMailToShow(mailShow);
    }
  }, [mailGlobalArray, mailFavorities, mailArchived, mailShow, path]);

  if (!path.includes("formats")) {
    return (
      <>
        {(mailToShow as MailDataProps).idMail && !closeMailDescription ? (
          <>
            <Container
              styles={{
                root: { height: "12%", padding: "0.2rem 0.2rem 0.5rem 0.2rem" },
              }}
            >
              <Flex gap={"sm"} w={"100%"} align={"center"}>
                <Avatar
                  src={null}
                  alt="no image here"
                  color="indigo"
                  size="lg"
                />
                <Stack justify={"space-between"} w={"100%"} gap={12}>
                  <Flex
                    justify={"space-between"}
                    w={"100%"}
                    style={{ marginBottom: "-1rem" }}
                  >
                    <Title
                      order={4}
                      styles={(theme) => ({
                        root: {
                          color:
                            colorScheme === "light"
                              ? `${theme.colors.lightTheme[3]}`
                              : `${theme.colors.darkTheme[2]}`,
                          marginBottom: "-0.25rem",
                        },
                      })}
                    >
                      {(mailToShow as MailDataProps).title}
                    </Title>
                    <Flex
                      style={{ marginBottom: "-0.25rem" }}
                      align={"center"}
                      justify={"end"}
                      gap={2}
                    >
                      <BtnFavorities
                        size="medium"
                        status={(mailToShow as MailDataProps).mailFavorite}
                        mailId={(mailToShow as MailDataProps).idMail}
                        path={path}
                      />
                      <TooltipLayout
                        label="Responder"
                        position="bottom"
                        key={crypto.randomUUID()}
                      >
                        <UnstyledButton
                          classNames={{
                            root:
                              colorScheme === "light"
                                ? classes.btnMail
                                : classes.btnMail_dark,
                          }}
                        >
                          <Center style={{ fontSize: "1.5rem" }}>
                            <CgCornerUpLeft />
                          </Center>
                        </UnstyledButton>
                      </TooltipLayout>
                      <TooltipLayout
                        label="Responder a Todos"
                        position="bottom"
                        key={crypto.randomUUID()}
                      >
                        <UnstyledButton
                          classNames={{
                            root:
                              colorScheme === "light"
                                ? classes.btnMail
                                : classes.btnMail_dark,
                          }}
                        >
                          <Center style={{ fontSize: "1.5rem" }}>
                            <CgCornerDoubleUpLeft />
                          </Center>
                        </UnstyledButton>
                      </TooltipLayout>
                      <TooltipLayout
                        label="Responder"
                        position="bottom"
                        key={crypto.randomUUID()}
                      >
                        <UnstyledButton
                          classNames={{
                            root:
                              colorScheme === "light"
                                ? classes.btnMail
                                : classes.btnMail_dark,
                          }}
                        >
                          <Center style={{ fontSize: "1.5rem" }}>
                            <CgCornerUpRight />
                          </Center>
                        </UnstyledButton>
                      </TooltipLayout>
                      <BtnOthersFunctions
                        mailId={(mailToShow as MailDataProps).idMail}
                      />
                    </Flex>
                  </Flex>
                  <Flex justify={"space-between"} w={"100%"}>
                    <Flex align={"center"} gap={4}>
                      <Text
                        styles={(theme) => ({
                          root: {
                            color:
                              colorScheme === "light"
                                ? theme.colors.lightTheme[6]
                                : theme.colors.darkTheme[1],
                          },
                        })}
                      >
                        Para:
                      </Text>
                      <Text
                        styles={(theme) => ({
                          root: {
                            color:
                              colorScheme === "light"
                                ? `${theme.colors.lightTheme[3]}`
                                : `${theme.colors.darkTheme[2]}`,
                          },
                        })}
                      >
                        {(mailToShow as MailDataProps).mail}
                      </Text>
                    </Flex>
                    <Flex align={"center"} gap={4}>
                      <Text
                        styles={(theme) => ({
                          root: {
                            color:
                              colorScheme === "light"
                                ? `${theme.colors.lightTheme[3]}`
                                : `${theme.colors.darkTheme[2]}`,
                          },
                        })}
                      >
                        Para:
                      </Text>
                      <Text
                        styles={(theme) => ({
                          root: {
                            color:
                              colorScheme === "light"
                                ? `${theme.colors.lightTheme[3]}`
                                : `${theme.colors.darkTheme[2]}`,
                          },
                        })}
                      >
                        userApp.{(mailToShow as MailDataProps).mail}
                      </Text>
                    </Flex>
                  </Flex>
                </Stack>
              </Flex>
            </Container>
            <Container
              p={10}
              styles={(theme) => ({
                root: {
                  height: "88%",
                  border:
                    colorScheme === "light"
                      ? `1px solid ${theme.colors.lightTheme[3]}`
                      : `1px solid ${theme.colors.darkTheme[5]}`,
                  borderRadius: "6px",
                  backgroundColor:
                    colorScheme === "light"
                      ? "#FFFFFF"
                      : `${theme.colors.darkTheme[7]}`,
                },
              })}
            >
              <ScrollArea
                h={"100%"}
                style={{ borderRadius: "6px" }}
                offsetScrollbars
                scrollbarSize={2}
              >
                {parse((mailToShow as MailDataProps).description)}
              </ScrollArea>
            </Container>
          </>
        ) : (
          <Container style={{ height: "100%" }}>
            <Stack align="center" justify="center" style={{ height: "100%" }}>
              <HiOutlineMail style={{ fontSize: "8rem" }} />
              <Title style={{ textAlign: "center" }}>
                Selecciona un correo para leer su Descripción!
              </Title>
            </Stack>
          </Container>
        )}
      </>
    );
  }

  return (
    <>
      {(mailToShow as MailTemplateProps).id && !closeMailDescription ? (
        <TemplateReadView
          userCreatedAt={(mailToShow as MailTemplateProps).userCreatedAt}
          userUpdatedAt={(mailToShow as MailTemplateProps).userUpdatedAt}
          createdAt={(mailToShow as MailTemplateProps).createdAt}
          updatedAt={(mailToShow as MailTemplateProps).updatedAt}
          bodyDescription={(mailToShow as MailTemplateProps).bodyDescription}
          shortDescription={(mailToShow as MailTemplateProps).shortDescription}
          templateFavorite={(mailToShow as MailTemplateProps).templateFavorite}
          title={(mailToShow as MailTemplateProps).title}
          id={(mailToShow as MailTemplateProps).id}
          path={path}
        />
      ) : (
        <Container style={{ height: "100%" }}>
          <Stack align="center" justify="center" style={{ height: "100%" }}>
            <HiOutlineDocumentText style={{ fontSize: "8rem" }} />
            <Title style={{ textAlign: "center" }}>
              Selecciona una Plantilla para leer su Descripción!
            </Title>
          </Stack>
        </Container>
      )}
    </>
  );
}
