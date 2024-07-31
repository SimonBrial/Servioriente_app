"use client";

import { BtnBackSection } from "@/components/buttons/BtnBackSection";
import { ContainerInside } from "@/components/container/ContainerInside";
import {
  useMantineColorScheme,
  UnstyledButton,
  ScrollArea,
  TextInput,
  Center,
  Stack,
  Flex,
  Text,
  Box,
} from "@mantine/core";
import classes from "@/styles/btn-styles.module.css";
import { HiOutlineSearch } from "@/icons";
import { GeneralDivider } from "@/components/GeneralDivider";
import InsideContainer from "@/components/container/InsideContainer";
import UserDBCardLayout from "../layouts/UserDBCardLayout";
import { useDataBaseStore } from "@/store/db-store";
import { useEffect, useState } from "react";
import { useProcessStore } from "@/store/process-store";
import { ListDBProps } from "@/interface/interface";

export default function AsideUserSearch() {
  const { colorScheme } = useMantineColorScheme();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data } = useDataBaseStore();
  const [registers, setRegisters] = useState<ListDBProps[]>(data);
  const { fnSearchRegister } = useProcessStore();

  useEffect(() => {
    const registersFiltered = fnSearchRegister(searchTerm, data);
    if (registersFiltered.length > 0) {
      setRegisters(registersFiltered);
    }
  }, [searchTerm]);

  return (
    <ContainerInside withBorder width="30%" allWhite={false}>
      <Stack gap={6}>
        <Box style={{ width: "50%" }}>
          <BtnBackSection
            dir="/login/process"
            label="Volver"
            withStyles={false}
          />
        </Box>
        <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
        <Flex align={"center"} gap={4}>
          <UnstyledButton
            variant="transparent"
            size={"xl"}
            aria-label="Search"
            classNames={{
              root:
                colorScheme === "light"
                  ? classes.btnMail
                  : classes.btnMail_dark,
            }}
          >
            <Center
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[3]}`
                      : `${theme.colors.darkTheme[2]}`,
                },
              })}
            >
              <HiOutlineSearch style={{ fontSize: "1.5rem" }} />
            </Center>
          </UnstyledButton>
          <TextInput
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.currentTarget.value)}
            placeholder="Insertar nombre de usuario"
            w={"100%"}
            styles={(theme) => ({
              input: {
                backgroundColor:
                  colorScheme === "light"
                    ? "#FFFFFF"
                    : `${theme.colors.darkTheme[2]}`,
                color: `${theme.colors.lightTheme[3]}`,
              },
            })}
          />
        </Flex>
        <InsideContainer
          offset={310}
          withBackground
          withBorder
          key={crypto.randomUUID()}
        >
          <ScrollArea
            h={"100%"}
            maw={"100%"}
            p={5}
            scrollbarSize={2}
            offsetScrollbars
          >
            <Stack gap={4}>
              {registers.map((user) => (
                <UserDBCardLayout key={user.id} userData={user} />
              ))}
            </Stack>
          </ScrollArea>
        </InsideContainer>
        <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
        <Flex
          justify={"space-between"}
          align={"center"}
          pb={5}
          px={5}
          style={{ width: "100%" }}
        >
          <Flex
            // gap={6}
            justify={"space-between"}
            style={{ width: "100%" }}
            styles={(theme) => ({
              root: {
                color:
                  colorScheme === "light"
                    ? theme.colors.lightTheme[3]
                    : theme.colors.darkTheme[2],
              },
            })}
          >
            <Text>Total de Registros</Text>
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
              {registers.length}
            </Text>
          </Flex>
          {/* TODO: This is the pagination compornents */}
          {/* <Flex
            gap={6}
            styles={(theme) => ({
              root: {
                border:
                  colorScheme === "light"
                    ? `1px solid ${theme.colors.lightTheme[2]}`
                    : `1px solid ${theme.colors.darkTheme[6]}`,
                borderRadius: "6px",
                padding: "0.2rem 0.3rem",
              },
            })}
          >
            <ActionIcon
              size={"sm"}
              variant="subtle"
              color={colorScheme === "light" ? "#115dfe" : "#52a5e0"}
            >
              <IoChevronBackOutline />
            </ActionIcon>
            <ActionIcon
              size={"sm"}
              variant="subtle"
              color={colorScheme === "light" ? "#115dfe" : "#52a5e0"}
            >
              1
            </ActionIcon>
            <ActionIcon
              size={"sm"}
              variant="subtle"
              color={colorScheme === "light" ? "#115dfe" : "#52a5e0"}
            >
              <IoChevronForwardOutline />
            </ActionIcon>
          </Flex> */}
        </Flex>
      </Stack>
    </ContainerInside>
  );
}
