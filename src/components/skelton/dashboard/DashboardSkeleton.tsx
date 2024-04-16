import { Flex, ScrollArea, Skeleton, Stack } from "@mantine/core";
import heightViewClass from "@/styles/height-view.module.css";

export default function DashboardSkeleton() {
  return (
    <>
      <ScrollArea
        offsetScrollbars
        scrollbarSize={2}
        classNames={{ root: heightViewClass.InsideContainer_scrollarea }}
        p={"xs"}
      >
        <Flex gap={"xs"}>
          <Stack gap={"xs"} style={{ height: "100%", width: "100%" }}>
            <Skeleton height={120} width={"100%"} />
            <Skeleton height={380} width={"100%"} />
          </Stack>
          <Skeleton height={510} width={"50%"} />
        </Flex>
        <Flex gap={"xs"}>
          <Skeleton height={500} width={"40%"} mt={10} />
          <Skeleton height={500} width={"100%"} mt={10} />
        </Flex>
        <Skeleton height={500} width={"100%"} mt={10} />
      </ScrollArea>
    </>
  );
}
