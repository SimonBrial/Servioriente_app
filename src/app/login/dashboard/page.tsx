import { Stack } from "@mantine/core";
import { DashboardContainer } from "./processConversation/DashboardContainer";
import { TabTimeView } from "./TabTimeView";

function DashboardPage(): JSX.Element {
  return (
    <Stack gap={4}>
      <TabTimeView />
      <DashboardContainer />
    </Stack>
  );
}

export default DashboardPage;
