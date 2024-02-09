import { HiOutlineDotsVertical } from "@/icons";
import { degreeType } from "@/types/types";
import degreeColor from "@/utils/degreeColor";
import {
  useMantineColorScheme,
  Divider,
  Center,
  Avatar,
  Title,
  Stack,
  Text,
  Flex,
  Box,
} from "@mantine/core";
import classes from "@/styles/calendar.module.css";

interface BigEventCardProps {
  title: string;
  desription: string;
  degree: degreeType;
  userToassign: string;
  admin: boolean;
}

export const BigEventCard = ({
  degree,
  title,
  desription,
  userToassign,
  admin,
}: BigEventCardProps) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Box w={220}>
      <Flex
        classNames={{
          root: classes.eventCard,
        }}
        justify={"space-between"}
        align={"start"}
        style={{
          backgroundColor: degreeColor(degree)[1],
          borderRadius: "4px",
        }}
      >
        <Flex gap={4} align={"center"} style={{ cursor: "pointer" }}>
          <Divider
            orientation="vertical"
            size={"lg"}
            style={{
              borderRadius: "10px",

              transition: "all 0.4s ease-in-out",
            }}
            color={degreeColor(degree)[0]}
          />
          <Stack gap={0}>
            <Flex>
              <Avatar
                variant="gradient"
                size={"md"}
                gradient={{
                  from: degreeColor(degree)[1],
                  to: degreeColor(degree)[0],
                  deg: 90,
                }}
              />
              <Stack gap={0}>
                <Title
                  order={6}
                  style={{
                    paddingLeft: "0.7rem",
                  }}
                >
                  {userToassign}
                </Title>
                {admin ? (
                  <Title
                    order={6}
                    styles={(theme) => ({
                      root: {
                        color:
                          colorScheme === "light"
                            ? `${theme.colors.lightTheme[6]}`
                            : `${theme.colors.darkTheme[1]}`,
                        paddingLeft: "0.7rem",
                      },
                    })}
                  >
                    Admin
                  </Title>
                ) : (
                  <></>
                )}
              </Stack>
            </Flex>
            <Divider
              color={degreeColor(degree)[0]}
              style={{ width: "100%", margin: "0.2rem 0" }}
            />
            <Text
              style={{
                paddingLeft: "0.2rem",
                fontSize: "0.8rem",
              }}
            >
              {title.length >= 25 ? <>{title.slice(0, 25)}...</> : title}
            </Text>
          </Stack>
        </Flex>
        <Center>
          <HiOutlineDotsVertical />
        </Center>
      </Flex>
    </Box>
  );
};
