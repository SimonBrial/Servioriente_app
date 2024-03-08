import { Rating, Title, Flex } from "@mantine/core";

export const RatingContainer = ({ value }: { value: number }) => {
  return (
    <Flex gap={8} align={"center"} justify={"center"}>
      <Title order={4}>Rating</Title>
      <Rating value={value} fractions={2} readOnly size="lg" />
      <Title order={4}>{value}</Title>
    </Flex>
  );
};
