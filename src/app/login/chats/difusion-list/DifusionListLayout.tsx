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
import AsideSearch from "../AsideSearch";
import { UserContactCard } from "../UserContactCard";
import InsideContainer from "@/components/container/InsideContainer";
import { GeneralDivider } from "@/components/GeneralDivider";
import classes from "@/styles/general-styles.module.css";
import { useChatStore } from "@/store/chat-store";
import TitleSimpleLayout from "@/components/layout/TitleSimpleLayout";

export const DifusionListLayout = (): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  const { difusionArray } = useChatStore();

  return (
    <Stack gap={3}>
      <TitleSimpleLayout title="Crear lista de Difusion" />
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
          <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
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
            offset={295}
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
                {difusionArray.length > 0 ? (
                  <>
                    {difusionArray.map((contact, idx) => {
                      const {
                        contactDescription,
                        favorite,
                        userName,
                        photo,
                        id,
                      } = contact;
                      return (
                        <UserContactCard
                          contactDescription={contactDescription}
                          favorite={favorite}
                          userName={userName}
                          photo={photo}
                          key={idx}
                          id={id}
                        />
                      );
                    })}
                  </>
                ) : (
                  <>Vacio</>
                )}
              </Stack>
            </ScrollArea>
          </InsideContainer>
          {/* <Flex style={{ width: "100%" }} gap={4}>
            <BtnBackSection label="Volver" dir="/login/chats" withStyles />
            <BtnAcept />
          </Flex> */}
        </Stack>
      </Stack>
    </Stack>
  );
};
