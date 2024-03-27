"use client";

import { Flex, Stack } from "@mantine/core";
import { ColorThemeSelection } from "./ColorThemeSelection";
import { FontSizeSelection } from "./FontSizeSelection";
import { GlobalTheme } from "./GlobalTheme";
import { BtnSave } from "@/components/buttons/BtnSave";
import { BtnCancel } from "@/components/buttons/BtnCancel";
import { UserDBCountView } from "./UserDBCountView";
import { SidebarSectionContainer } from "./SidebarSectionContainer";

export default function SettingsPageContainer() {
  return (
    <>
      <Stack>
        <GlobalTheme />
        <ColorThemeSelection />
        <FontSizeSelection />
        <UserDBCountView />
        <SidebarSectionContainer />
      </Stack>
      <Flex gap={4}>
        <BtnCancel
          fnCancel={() => console.log("From settings/page.tsx")}
          key={crypto.randomUUID()}
        />
        <BtnSave
          key={crypto.randomUUID()}
          id={crypto.randomUUID()}
          description=""
          color=""
          title=""
        />
      </Flex>
    </>
  );
}
