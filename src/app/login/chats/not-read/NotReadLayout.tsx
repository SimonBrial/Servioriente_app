"use client";

import { TitleLayout } from "@/components/layout/TitleLayout";
import AsideSearch from "../AsideSearch";
import InsideContainer from "@/components/container/InsideContainer";
import {
  useMantineColorScheme,
  ScrollArea,
  Checkbox,
  Stack,
  Flex,
  Text,
} from "@mantine/core";
import { UserContactCard } from "../UserContactCard";
import classes from "@/styles/general-styles.module.css";
import { GeneralDivider } from "@/components/GeneralDivider";
import { useChatStore } from "@/store/chat-store";

export const NotReadLayout = (): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  const { notReadArray } = useChatStore();
  return (
    <Stack gap={3}>
      <TitleLayout color="" icon="" onText title="No Leidos" />
      <AsideSearch />
      <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
      <Flex
        justify={"space-between"}
        align={"center"}
        style={{ marginBottom: "0.3rem" }}
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
      <Stack gap={8}>
        <InsideContainer
          offset={257}
          withBackground={false}
          withBorder={false}
          key={crypto.randomUUID()}
        >
          <ScrollArea
            h={"100%"}
            maw={"100%"}
            offsetScrollbars
            scrollbarSize={2}
          >
            <Stack gap={5} h={"50%"} p={6}>
              {notReadArray.length > 0 ? (
                <>
                  {notReadArray.map((chat, idx) => {
                    const {
                      contactDescription,
                      favorite,
                      userName,
                      photo,
                      id,
                    } = chat;
                    return (
                      <UserContactCard
                        contactDescription={contactDescription}
                        favorite={favorite}
                        userName={userName}
                        photo={photo}
                        key={id}
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
      </Stack>
    </Stack>
  );
};
