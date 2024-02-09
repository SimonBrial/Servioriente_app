import React from "react";
import { SuperAdminLayout } from "./SuperAdminLayout";
import { UserContainer } from "./UserContainer";
import { ScrollArea, Stack } from "@mantine/core";

export default function page() {
  return (
    <SuperAdminLayout>
      <ScrollArea scrollbarSize={4} offsetScrollbars >
        <Stack gap={4}>
          <UserContainer label="Super Admin" />
          <UserContainer label="Admin" />
        </Stack>
      </ScrollArea>
    </SuperAdminLayout>
  );
}
