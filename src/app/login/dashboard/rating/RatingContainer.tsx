import { Rating, Title, Flex, useMantineColorScheme } from "@mantine/core";

export const RatingContainer = ({ value }: { value: number }) => {
  const { colorScheme } = useMantineColorScheme();
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
      <Rating value={value} fractions={2} readOnly size="lg" />
      <Title order={4}>{value}</Title>
    </Flex>
  );
};
