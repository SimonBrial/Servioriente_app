"use client";

import { Stack } from "@mantine/core";
import { ContainerInside } from "@/components/container/ContainerInside";
import { SocialMediaContainer } from "../rating/SocialMediaContainer";
import { RatingContainer } from "../rating/RatingContainer";
import ProcessContainer from "./ProcessContainer";

export const DashboardProcessListContainer = () => {
  return (
    <ContainerInside allWhite withBorder width="100%" key={crypto.randomUUID()}>
      <Stack gap={2}>
        <ProcessContainer key={crypto.randomUUID()} />
        <SocialMediaContainer key={crypto.randomUUID()} />
        <RatingContainer key={crypto.randomUUID()} />
      </Stack>
    </ContainerInside>
  );
};
