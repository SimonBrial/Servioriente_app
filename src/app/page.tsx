import { Stack } from "@mantine/core";
import { DashboardContainer } from "./dashboard/DashboardContainer";
import { TabTimeView } from "./dashboard/TabTimeView";

export default function Home(): JSX.Element {
  return (
    <Stack gap={6}>
      <TabTimeView />
      <DashboardContainer />
    </Stack>
  );
}
