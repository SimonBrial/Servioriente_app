"use client";

import { BtnBackSection } from "@/components/buttons/BtnBackSection";
import { ContainerInside } from "@/components/container/ContainerInside";
import {
  useMantineColorScheme,
  UnstyledButton,
  TextInput,
  Center,
  Stack,
  Flex,
  Box,
} from "@mantine/core";
import classes from "@/styles/btn-styles.module.css";
import { HiOutlineSearch } from "@/icons";
import { GeneralDivider } from "@/components/GeneralDivider";

export default function AsideUserSearch() {
  const { colorScheme } = useMantineColorScheme();
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
      </Stack>
    </ContainerInside>
  );
}
