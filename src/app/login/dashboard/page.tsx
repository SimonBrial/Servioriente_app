import { Stack } from "@mantine/core";
import DashboardContainer from "./processConversation/DashboardContainer";
import { TabTimeView } from "./TabTimeView";

function DashboardPage(): JSX.Element {
  return (
    <Stack gap={4}>
      <TabTimeView key={crypto.randomUUID()} />
      <DashboardContainer key={crypto.randomUUID()} />
    </Stack>
  );
}

export default DashboardPage;
