import React from "react";
import { SuperAdminLayout } from "./SuperAdminLayout";
import { UserContainer } from "./UserContainer";
import { ScrollArea, Stack } from "@mantine/core";

export default function page() {
  return (
    <SuperAdminLayout>
      <ScrollArea scrollbarSize={2} offsetScrollbars style={{ width: "100%" }}>
        <Stack gap={4} style={{ width: "100%" }}>
          <UserContainer label="Super Admin" />
          <UserContainer label="Admin" />
        </Stack>
      </ScrollArea>
    </SuperAdminLayout>
  );
}
