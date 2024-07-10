"use client";

import { MailTemplateProps } from "@/interface/interface";
import {
  useMantineColorScheme,
  Container,
  Avatar,
  Title,
  Flex,
  Text,
  ScrollArea,
  Stack,
} from "@mantine/core";
import BtnOthersFunctions from "./buttons/BtnOthersFunctions";
import BtnFavorities from "@/components/buttons/BtnFavorities";
import parse from "html-react-parser";
import dayjs from "dayjs";

interface TemplateReadViewProps extends MailTemplateProps {
  path: string;
}

export default function TemplateReadView({
  shortDescription,
  templateFavorite,
  bodyDescription,
  userCreatedAt,
  userUpdatedAt,
  createdAt,
  updatedAt,
  title,
  path,
  id,
}: TemplateReadViewProps) {
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <Container
        styles={{
          root: { height: "12%", padding: "0.2rem 0.2rem 0.5rem 0.2rem" },
        }}
      >
        <Flex gap={"sm"} w={"100%"} align={"center"}>
          <Stack justify={"space-between"} w={"100%"} gap={12}>
            <Flex
              justify={"space-between"}
              w={"100%"}
              style={{ marginBottom: "-1rem" }}
            >
              <Flex align={"center"} justify={"end"} gap={6}>
                <Title
                  order={4}
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? `${theme.colors.lightTheme[6]}`
                          : `${theme.colors.darkTheme[1]}`,
                      marginBottom: "-0.25rem",
                    },
                  })}
                >
                  Titulo:
                </Title>
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
                  {title}
                </Title>
              </Flex>
              <Flex
                style={{ marginBottom: "-0.25rem" }}
                align={"center"}
                justify={"end"}
                gap={2}
              >
                <BtnFavorities
                  size="medium"
                  status={templateFavorite}
                  mailId={id}
                  path={path}
                />
                <BtnOthersFunctions mailId={id} />
              </Flex>
            </Flex>
            <Stack gap={0} w={"100%"}>
              <Flex align={"center"} gap={6}>
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
                  Resumen:
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
                  {shortDescription}
                </Text>
              </Flex>
              <Flex align={"center"} gap={6}>
                <Text
                  size="sm"
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? `${theme.colors.lightTheme[6]}`
                          : `${theme.colors.darkTheme[1]}`,
                    },
                  })}
                >
                  Creado por:
                </Text>
                <Text
                  size="sm"
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? `${theme.colors.lightTheme[3]}`
                          : `${theme.colors.darkTheme[2]}`,
                    },
                  })}
                >
                  {userCreatedAt} -{" "}
                  {dayjs(createdAt).format("DD/MM/YYYY - hh:mm A")}
                </Text>
              </Flex>
            </Stack>
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
          {parse(bodyDescription)}
        </ScrollArea>
      </Container>
    </>
  );
}
