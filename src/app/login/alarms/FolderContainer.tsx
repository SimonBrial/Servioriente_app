import { ScrollArea, Stack } from "@mantine/core";
import AlarmFolder from "./AlarmFolder";
import { ContainerInside } from "@/components/container/ContainerInside";

export default function FolderContainer(): JSX.Element {
  // const { colorScheme } = useMantineColorScheme();
  return (
    <ContainerInside width="70%" allWhite={false} withBorder>
      <ScrollArea
        h={"100%"}
        style={{ borderRadius: "6px" }}
        scrollbarSize={2}
        offsetScrollbars
      >
        <Stack gap={12}>
          <AlarmFolder />
          <AlarmFolder />
          <AlarmFolder />
          <AlarmFolder />
        </Stack>
      </ScrollArea>
    </ContainerInside>
  );
}
