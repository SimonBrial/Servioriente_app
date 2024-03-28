import { GeneralDivider } from "@/components/GeneralDivider";
import { AlarmCardProps } from "@/interface/interface";
import {
  Box,
  Collapse,
  Divider,
  Flex,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

export default function DeleteFolderItem({
  description,
  createdAt,
  forDate,
  title,
  id,
}: AlarmCardProps) {
  const { colorScheme } = useMantineColorScheme();
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Box
      style={{
        border:
          colorScheme === "light" ? "1px solid #cdcdcd" : "1px solid #2A3B47",
        borderRadius: "6px",
        padding: "0.5rem",
        width: "100%",
        backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
        boxShadow: "0px 5px 6px -6px #696969bf",
      }}
    >
      <Stack gap={2} onClick={toggle} style={{ cursor: "pointer" }}>
        <Flex
          gap={5}
          justify={"start"}
          align={"center"}
          style={{ paddingLeft: "0.5rem" }}
        >
          <Text>😎</Text>
          <Title
            order={4}
            style={{
              color: colorScheme === "light" ? "#696969" : "#EFF3F5",
              textAlign: "center",
            }}
          >
            {title}
          </Title>
        </Flex>
        <Divider
          size="md"
          styles={(theme) => ({
            root: {
              borderColor:
                colorScheme === "light"
                  ? theme.colors.lightTheme[6]
                  : theme.colors.darkTheme[1],
              marginTop: "-0.3rem",
            },
          })}
        />
      </Stack>
      <Stack gap={2} w={"100%"} style={{ cursor: "default", margin: "0.2rem 0" }}>
        <Flex justify={"space-between"} align={"center"}>
          <Flex gap={4} align={"center"}>
            <Text
              size="1rem"
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[3]
                      : theme.colors.darkTheme[2],
                },
              })}
            >
              Creado:
            </Text>
            <Text
              size="sm"
              styles={(theme) => ({
                root: {
                  lineHeight: "15px",
                  color:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[6]
                      : theme.colors.darkTheme[1],
                },
              })}
            >
              {createdAt}
            </Text>
          </Flex>
          <Flex gap={4} align={"center"}>
            <Text
              size="1rem"
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[3]
                      : theme.colors.darkTheme[2],
                },
              })}
            >
              Para:
            </Text>
            <Text
              size="sm"
              styles={(theme) => ({
                root: {
                  lineHeight: "15px",
                  color:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[6]
                      : theme.colors.darkTheme[1],
                },
              })}
            >
              {forDate}
            </Text>
          </Flex>
        </Flex>
        <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
      </Stack>
      <Collapse in={opened}>
        <Text size="sm" style={{ lineHeight: "15px" }}>
          {description}
        </Text>
      </Collapse>
    </Box>
  );
}
