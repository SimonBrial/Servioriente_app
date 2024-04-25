"use client";

import { TitleLayout } from "@/components/layout/TitleLayout";
import { ScrollArea, Stack } from "@mantine/core";
import React from "react";
import AsideSearch from "../AsideSearch";
import InsideContainer from "@/components/container/InsideContainer";
import { UserContactCard } from "../UserContactCard";
import { OrderByName } from "./OrderByName";
import { useChatStore } from "@/store/chat-store";

export const FavoritiesLayout = (): JSX.Element => {
  const { difusionArray } = useChatStore();
  return (
    <Stack gap={4}>
      <TitleLayout color="" icon="" onText title="Favoritos" />
      <AsideSearch />
      <Stack gap={6}>
        <OrderByName />
        <InsideContainer
          offset={248}
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
              {difusionArray.length > 0 ? (
                <>
                  {difusionArray.map((item) => {
                    const {
                      contactDescription,
                      favorite,
                      userName,
                      photo,
                      id,
                    } = item;
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
