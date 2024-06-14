"use client";

import {
  useMantineColorScheme,
  Checkbox,
  Avatar,
  Center,
  Group,
  Title,
  Stack,
  Flex,
  Text,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import BtnMailTrash from "./BtnMailTrash";
import { useEffect, useState } from "react";
import BtnReadMail from "@/components/buttons/BtnReadMail";
import BtnArchive from "@/components/buttons/BtnArchive";
import { MailDataProps } from "@/interface/interface";
import { useMailStore } from "@/store/mail-store";
import dayjs from "dayjs";
import BtnFavorities from "@/components/buttons/BtnFavorities";

interface MailItemProps extends MailDataProps {
  path: string;
}
export default function MailItem({
  mailFavority,
  mailArchived,
  description,
  mailRead,
  userName,
  idMail,
  title,
  photo,
  path,
  mail,
  date,
}: MailItemProps): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  const { hovered, ref } = useHover();
  const { fnCheckMail, itemChecked, mailReceived } = useMailStore();
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    const mailCheckedFound = itemChecked.find((item) => item.idMail === idMail);
    console.log(mailCheckedFound);
  }, [itemChecked, mailRead, mailArchived, mailFavority, mailReceived]);

  if (checked || hovered) {
    return (
      <Group
        ref={ref}
        mb={5}
        styles={(theme) => ({
          root: {
            padding: "0.4rem 0.8rem",
            border:
              colorScheme === "light"
                ? !mailRead
                  ? `2px solid ${theme.colors.lightTheme[6]}`
                  : `1px solid ${theme.colors.lightTheme[3]}`
                : !mailRead
                ? `2px solid ${theme.colors.darkTheme[1]}`
                : `1px solid ${theme.colors.darkTheme[2]}`,
            backgroundColor:
              colorScheme === "light" ? "#fff" : theme.colors.darkTheme[7],
            borderRadius: "6px",
            cursor: "default",
            width: "100%",
          },
        })}
      >
        <Flex
          justify={"start"}
          gap={"md"}
          style={{
            width: "100%",
            cursor: "default",
            padding: "0.2rem",
          }}
        >
          <Center px={9}>
            <Checkbox
              onClick={() => {
                console.log(!checked ? "yes" : "no");
                fnCheckMail(idMail, path, checked);
              }}
              onChange={(event) => {
                setChecked(event.currentTarget.checked);
              }}
              checked={checked}
              color="blue"
            />
          </Center>

          <Stack gap={0} style={{ width: "100%" }}>
            <Flex
              justify={"space-between"}
              style={{ margin: "-0.2rem", position: "relative" }}
            >
              <Title
                order={5}
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? `${theme.colors.lightTheme[3]}`
                        : `${theme.colors.darkTheme[2]}`,
                  },
                })}
              >
                {title}
              </Title>
              <Flex
                p={0}
                gap={1}
                align={"center"}
                justify={"end"}
                styles={(theme) => ({
                  root: {
                    position: "absolute",
                    right: "0",
                    top: "-3px",
                    padding: "0",
                    color:
                      colorScheme === "light"
                        ? theme.colors.lightTheme[3]
                        : theme.colors.darkTheme[2],
                  },
                })}
              >
                <BtnReadMail status={mailRead} mailId={idMail} path={path} />
                <BtnFavorities
                  status={mailFavority}
                  mailId={idMail}
                  size={"small"}
                  path={path}
                />
                <BtnArchive status={mailArchived} mailId={idMail} path={path} />
              </Flex>
            </Flex>
            <Flex
              justify={"space-between"}
              style={{ margin: "-0.1rem" }}
              align={"center"}
            >
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
                {mail}
              </Text>
              <Text
                size="xs"
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? `${theme.colors.lightTheme[6]}`
                        : `${theme.colors.darkTheme[1]}`,
                  },
                })}
              >
                {dayjs(date).format("DD")}/{dayjs(date).format("MM")}/
                {dayjs(date).format("YYYY")}
              </Text>
            </Flex>
            <Text
              styles={(theme) => ({
                root: {
                  margin: "-0.1rem",
                  color:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[3]
                      : theme.colors.darkTheme[2],
                },
              })}
              size="sm"
            >
              {description.slice(0, 25)}...
            </Text>
          </Stack>
          <BtnMailTrash mailId={idMail} path={path} />
        </Flex>
      </Group>
    );
  }
  return (
    <Group
      ref={ref}
      mb={5}
      styles={(theme) => ({
        root: {
          padding: "0.4rem 0.8rem",
          border:
            colorScheme === "light"
              ? !mailRead
                ? `2px solid ${theme.colors.lightTheme[6]}`
                : `1px solid ${theme.colors.lightTheme[3]}`
              : !mailRead
              ? `2px solid ${theme.colors.darkTheme[1]}`
              : `1px solid ${theme.colors.darkTheme[2]}`,
          backgroundColor:
            colorScheme === "light" ? "#fff" : theme.colors.darkTheme[7],
          borderRadius: "6px",
          boxShadow: "0px 10px 12px -10px #1b1b1b66",
          cursor: "default",
        },
      })}
    >
      <Flex
        justify={"start"}
        gap={"md"}
        style={{
          width: "100%",
          cursor: "pointer",
          padding: "0.2rem",
        }}
      >
        <Avatar
          src={null}
          alt="no image here"
          color="indigo"
          size="md"
          style={{ marginTop: "0.6rem" }}
        />

        <Stack gap={0} style={{ width: "100%" }}>
          <Flex
            justify={"space-between"}
            style={{ margin: "-0.2rem", position: "relative" }}
          >
            <Title
              order={5}
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[3]
                      : theme.colors.darkTheme[2],
                },
              })}
            >
              {title}
            </Title>
            <Flex
              p={0}
              gap={1}
              align={"center"}
              justify={"end"}
              styles={(theme) => ({
                root: {
                  position: "absolute",
                  right: "2.6rem",
                  top: "-3px",
                  padding: "0",
                  color:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[3]
                      : theme.colors.darkTheme[2],
                },
              })}
            >
              {mailFavority ? (
                <BtnFavorities
                  status={mailFavority}
                  mailId={idMail}
                  size={"small"}
                  path={path}
                />
              ) : null}
              {mailArchived ? (
                <BtnArchive status={mailArchived} mailId={idMail} path={path} />
              ) : null}
            </Flex>
          </Flex>
          <Flex gap={53.5} style={{ margin: "-0.1rem" }} align={"center"}>
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
              {mail}
            </Text>
            <Text
              size="xs"
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[6]}`
                      : `${theme.colors.darkTheme[1]}`,
                },
              })}
            >
              {dayjs(date).format("DD")}/{dayjs(date).format("MM")}/
              {dayjs(date).format("YYYY")}
            </Text>
          </Flex>
          <Text
            styles={(theme) => ({
              root: {
                margin: "-0.1rem",
                color:
                  colorScheme === "light"
                    ? theme.colors.lightTheme[3]
                    : theme.colors.darkTheme[2],
              },
            })}
            size="sm"
          >
            {description.slice(0, 25)}...
          </Text>
        </Stack>
      </Flex>
    </Group>
  );
}
