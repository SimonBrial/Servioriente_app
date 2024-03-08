import { Flex, Stack } from "@mantine/core";
import { ColorThemeSelection } from "./ColorThemeSelection";
import { FontSizeSelection } from "./FontSizeSelection";
import { GlobalLayout } from "./GlobalLayout";
import { GlobalTheme } from "./GlobalTheme";
import { BtnSave } from "@/components/buttons/BtnSave";
import { BtnCancel } from "@/components/buttons/BtnCancel";
import { UserDBCountView } from "./UserDBCountView";
import { SidebarSectionContainer } from "./SidebarSectionContainer";

export default function page(): JSX.Element {
  return (
    <GlobalLayout>
      <Stack>
        <GlobalTheme />
        <ColorThemeSelection />
        <FontSizeSelection />
        <UserDBCountView />
        <SidebarSectionContainer />
      </Stack>
      <Flex gap={4}>
        <BtnCancel />
        <BtnSave />
      </Flex>
    </GlobalLayout>
  );
}
