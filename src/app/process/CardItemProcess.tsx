import {
  Group,
  Text,
  Flex,
  Divider,
  Avatar,
  Stack,
} from "@mantine/core";
import { CardProcessItemProps } from "@/interface/interface";

export default function CardItemProcess({
  date,
  direction,
  tag,
  vehicle,
}: CardProcessItemProps): JSX.Element {
  return (
    <Group
      align={"center"}
      justify="space-between"
      styles={(theme) => ({
        root: {
          width: "100%",
          border: `1px solid #696969`,
          borderRadius: "6px",
        },
      })}
      px={10}
      py={5}
    >
      <Flex align={"center"} justify={"space-between"} gap={8} mah={"50px"}>
        <Divider
          orientation="vertical"
          size="xl"
          color="red"
          h={32}
          style={{ borderRadius: "15px", marginTop: "0.4rem" }}
        />
        <Avatar src={null} alt="no image here" color="indigo" size="1.9rem" />
        <Flex align={"center"} gap={12}>
          <Stack gap={2}>
            <Text
              styles={(theme) => ({
                root: {
                  color: `${theme.colors.principalTheme[6]}`,
                  marginBottom: "-0.3rem",
                },
              })}
            >
              {vehicle}
            </Text>
            <Text>Tarifa: {tag}$</Text>
          </Stack>
          <Stack gap={6}>
            <Text
              styles={(theme) => ({
                root: {
                  color: "#696969",
                  marginBottom: "-0.3rem",
                },
              })}
            >
              {direction}
            </Text>
            <Text size="xs">{date}</Text>
          </Stack>
        </Flex>
      </Flex>
      {/* <UnstyledButton>
        <Center>
          <HiOutlineDotsVertical
            style={{ fontSize: "1.8rem", color: "#696969" }}
          />
        </Center>
      </UnstyledButton> */}
    </Group>
  );
}
