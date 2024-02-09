"use client";

import {
  HiOutlineMailOpen,
  HiOutlineTrash,
  HiOutlineStar,
  HiOutlineSave,
} from "@/icons";
import {
  useMantineColorScheme,
  UnstyledButton,
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

export default function MailItem(): JSX.Element {
  const { hovered, ref } = useHover();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Group
      ref={ref}
      mb={5}
      styles={(theme) => ({
        root: {
          padding: "0.3rem 0.8rem",
          border:
            colorScheme === "light"
              ? hovered
                ? `1px solid ${theme.colors.lightTheme[3]}`
                : `1px solid ${theme.colors.lightTheme[2]}`
              : hovered
                ? `1px solid ${theme.colors.lightTheme[3]}`
                : `1px solid ${theme.colors.darkTheme[5]}`,
          backgroundColor:
            colorScheme === "light"
              ? hovered
                ? "#efefef4c"
                : "#FFFFFF"
              : hovered
                ? "#efefef4c"
                : `${theme.colors.darkTheme[7]}`,
          borderRadius: "6px",
          transition: "0.3s all ease-in-out",
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
        {hovered ? (
          <Center px={9}>
            <Checkbox color="blue" />
          </Center>
        ) : (
          <Avatar
            src={null}
            alt="no image here"
            color="indigo"
            size="md"
            style={{ marginTop: "0.6rem" }}
          />
        )}

        <Stack gap={0} style={{ width: "100%" }}>
          <Flex justify={"space-between"} style={{ margin: "-0.2rem" }}>
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
              Titulo del mail
            </Title>
            {hovered ? (
              <Flex align={"center"} justify={"end"} style={{ gap: "0.3rem" }}>
                <UnstyledButton
                  style={{
                    color:
                      colorScheme === "light"
                        ? hovered
                          ? "#696969"
                          : "#696969"
                        : hovered
                          ? "#F8F8F8"
                          : "#696969",
                  }}
                >
                  <Center>
                    <HiOutlineMailOpen />
                  </Center>
                </UnstyledButton>
                <UnstyledButton
                  style={{
                    color:
                      colorScheme === "light"
                        ? hovered
                          ? "#696969"
                          : "#696969"
                        : hovered
                          ? "#F8F8F8"
                          : "#696969",
                  }}
                >
                  <Center>
                    <HiOutlineStar />
                  </Center>
                </UnstyledButton>
                <UnstyledButton
                  style={{
                    color:
                      colorScheme === "light"
                        ? hovered
                          ? "#696969"
                          : "#696969"
                        : hovered
                          ? "#F8F8F8"
                          : "#696969",
                  }}
                >
                  <Center>
                    <HiOutlineSave />
                  </Center>
                </UnstyledButton>
              </Flex>
            ) : (
              <></>
            )}
          </Flex>
          <Flex gap={12} style={{ margin: "-0.1rem" }} align={"center"}>
            <Text
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[6]}`
                      : `${theme.colors.darkTheme[1]}`,
                },
              })}
            >
              Header del correo
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
              12/10/2023
            </Text>
          </Flex>
          <Text style={{ margin: "-0.1rem" }}>
            Descripcion del mai...............
          </Text>
        </Stack>
        {hovered ? (
          <Center
            px={4}
            styles={{
              root: {
                backgroundColor: "rgba(255, 0, 0, 0.3)",
                color: "red",
                fontSize: "1.2rem",
                borderRadius: "0 6px 6px 0",
              },
            }}
          >
            <HiOutlineTrash />
          </Center>
        ) : (
          <></>
        )}
      </Flex>
    </Group>
  );
}
