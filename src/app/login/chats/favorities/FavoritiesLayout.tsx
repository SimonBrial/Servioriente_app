import { TitleLayout } from "@/components/layout/TitleLayout";
import { ScrollArea, Stack } from "@mantine/core";
import React from "react";
import AsideSearch from "../AsideSearch";
import InsideContainer from "@/components/container/InsideContainer";
import { UserContactCard } from "../UserContactCard";
import { OrderByName } from "./OrderByName";

export const FavoritiesLayout = (): JSX.Element => {
  return (
    <Stack gap={4}>
      <TitleLayout color="" icon="" onText title="Favoritos" />
      <AsideSearch />
      <Stack gap={6}>
        <OrderByName />
        <InsideContainer offset={248} withBackground={false} withBorder={false} key={crypto.randomUUID()}>
          <ScrollArea h={"100%"} maw={"100%"} offsetScrollbars scrollbarSize={2}>
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
      </Stack>
    </Stack>
  );
};
