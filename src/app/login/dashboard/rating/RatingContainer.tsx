import { useDashboardStore } from "@/store/dashboard-store";
import { Rating, Title, Flex, useMantineColorScheme } from "@mantine/core";
import { useEffect, useState } from "react";

export const RatingContainer = () => {
  const { colorScheme } = useMantineColorScheme();
  const { avarageSocialMedia } = useDashboardStore();
  const [avarage, setAvarage] = useState<number>();

  useEffect(() => {
    setAvarage(avarageSocialMedia());
  }, []);

  return (
    <Flex
      gap={8}
      align={"center"}
      justify={"center"}
      styles={(theme) => ({
        root: {
          color:
            colorScheme === "light"
              ? theme.colors.lightTheme[3]
              : theme.colors.darkTheme[2],
        },
      })}
    >
      <Title order={4}>Rating</Title>
      <Rating value={avarage} fractions={2} readOnly size="lg" />
      <Title order={4}>{avarage}</Title>
    </Flex>
  );
};
