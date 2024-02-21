"use client";

import { TitleLayout } from "@/components/layout/TitleLayout";
import { AsideSearch } from "../AsideSearch";
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
import checkboxClasses from "@/styles/sidebarSectionSelection.module.css";
import { GeneralDivider } from "@/components/GeneralDivider";

export const NotReadLayout = (): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Stack gap={3}>
      <TitleLayout color="" icon="" onText title="No Leidos" />
      <AsideSearch />
      <GeneralDivider />
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
                ? checkboxClasses.checkbox
                : checkboxClasses.checkbox_dark,
          }}
        />
      </Flex>
      <Stack gap={8}>
        <InsideContainer offset={257} withBackground={false} withBorder={false}>
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
