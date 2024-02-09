import { Flex, Skeleton, Stack } from "@mantine/core";
import React from "react";

export const MetricsSkeletonCard = () => {
  return (
    <Flex
      styles={(theme) => ({
        root: {
          borderRadius: "6px",
        },
      })}
      align={"center"}
      gap={8}
      p={12}
      justify={"space-between"}
    >
      <Flex align={"center"} gap={8}>
        <Skeleton circle height={50} />
        <Stack gap={4}>
          <Skeleton height={10} width={100} />
          <Skeleton height={10} width={50} />
        </Stack>
      </Flex>
      <Skeleton height={50} width={5} mr={18} />
    </Flex>
  );
};
