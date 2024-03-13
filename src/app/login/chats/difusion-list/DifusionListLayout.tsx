"use client";

import {
  useMantineColorScheme,
  ScrollArea,
  Checkbox,
  Select,
  Stack,
  Flex,
  Text,
} from "@mantine/core";
import { AsideSearch } from "../AsideSearch";
import { BtnBackSection } from "@/components/buttons/BtnBackSection";
import { TitleLayout } from "@/components/layout/TitleLayout";
import { UserContactCard } from "../UserContactCard";
import { BtnAcept } from "@/components/buttons/BtnAcept";
import InsideContainer from "@/components/container/InsideContainer";
import { GeneralDivider } from "@/components/GeneralDivider";
import classes from "@/styles/generalStyles.module.css";
// import { useListState } from "@mantine/hooks";

export const DifusionListLayout = (): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Stack gap={3}>
      <TitleLayout color="" icon="" onText title="Crear lista de Difusion" />
      <AsideSearch />
      <Stack gap={6}>
        <Stack gap={2}>
          <Flex align={"center"} gap={10}>
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
              Contactos:{" "}
            </Text>
            <Select
              variant="unstyled"
              placeholder="Select placeholder"
              defaultValue="Whatsapp"
              data={["Whatsapp", "Facebook", "Instagram"]}
              styles={(theme) => ({
                root: { width: "100%" },
                input: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[6]}`
                      : `${theme.colors.darkTheme[1]}`,
                  width: "100%",
                },
                options: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[6]}`
                      : `${theme.colors.darkTheme[1]}`,
                },
              })}
            />
          </Flex>
          <GeneralDivider orientation="horizontal" key={crypto.randomUUID()}/>
          <Flex
            justify={"space-between"}
            align={"center"}
            style={{ margin: "0.3rem 0" }}
          >
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
              Buscar por lista de Favoritos
            </Text>
            <Checkbox
              size="sm"
              classNames={{
                input:
                  colorScheme === "light"
                    ? classes.checkbox
                    : classes.checkbox_dark,
              }}
            />
          </Flex>
        </Stack>
        <Stack gap={8}>
          <InsideContainer
            key={crypto.randomUUID()}
            offset={340}
            withBackground={false}
            withBorder={false}
          >
            <ScrollArea
              h={"100%"}
              maw={"100%"}
              offsetScrollbars
              scrollbarSize={2}
            >
              <Stack gap={5} h={"50%"} p={6}>
                <UserContactCard favorite />
                <UserContactCard favorite={false} />
                <UserContactCard favorite />
                <UserContactCard favorite={false} />
                <UserContactCard favorite />
                <UserContactCard favorite />
                <UserContactCard favorite />
                <UserContactCard favorite />
                <UserContactCard favorite={false} />
                <UserContactCard favorite={false} />
                <UserContactCard favorite />
                <UserContactCard favorite={false} />
                <UserContactCard favorite />
                <UserContactCard favorite={false} />
                <UserContactCard favorite={false} />
                <UserContactCard favorite />
                <UserContactCard favorite={false} />
                <UserContactCard favorite={false} />
              </Stack>
            </ScrollArea>
          </InsideContainer>
          <Flex style={{ width: "100%" }} gap={4}>
            <BtnBackSection label="Volver" dir="/login/chats" withStyles />
            <BtnAcept />
          </Flex>
        </Stack>
      </Stack>
    </Stack>
  );
};
