import BtnFavorities from "@/components/buttons/BtnFavorities";
import { HiOutlineDocumentText } from "@/icons";
import { MailTemplateProps } from "@/interface/interface";
import {
  useMantineColorScheme,
  Avatar,
  Group,
  Stack,
  Title,
  Flex,
  Text,
} from "@mantine/core";
import dayjs from "dayjs";
import { usePathname } from "next/navigation";
import BtnDeleteTemplate from "../BtnDeleteTemplate";
import { useMailStore } from "@/store/mail-store";

interface MailTemplateItemProps extends MailTemplateProps {
  templateFavorite: boolean;
}

export default function MailTemplateItem({
  templateFavorite,
  shortDescription,
  bodyDescription,
  userCreatedAt,
  userUpdatedAt,
  createdAt,
  updatedAt,
  title,
  id,
}: MailTemplateItemProps) {
  const { colorScheme } = useMantineColorScheme();
  const path = usePathname();
  const { fnShowMail } = useMailStore();
  return (
    <Group
      mb={5}
      styles={(theme) => ({
        root: {
          padding: "0.4rem 0.8rem",
          border:
            colorScheme === "light"
              ? // ? !mailRead
                `2px solid ${theme.colors.lightTheme[6]}`
              : `1px solid ${theme.colors.lightTheme[3]}`,
          /* : !mailRead
              ? `2px solid ${theme.colors.darkTheme[1]}`
              : `1px solid ${theme.colors.darkTheme[2]}` */ backgroundColor:
            colorScheme === "light" ? "#fff" : theme.colors.darkTheme[7],
          borderRadius: "6px",
          cursor: "default",
          width: "100%",
        },
      })}
    >
      <Flex gap={"md"} style={{ width: "100%" }}>
        <Avatar color={colorScheme === "light" ? "#115dfe" : "#52a5e0"}>
          <HiOutlineDocumentText style={{ fontSize: "1.5rem" }} />
        </Avatar>
        <Stack gap={0} style={{ width: "100%" }}>
          <Flex align={"center"} justify={"space-between"}>
            <Title
              onClick={() => {
                fnShowMail(id, path);
              }}
              order={5}
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[3]}`
                      : `${theme.colors.darkTheme[2]}`,
                  cursor: "pointer",
                },
              })}
            >
              {title}
            </Title>
            <Flex p={0} gap={1} align={"center"} justify={"end"}>
              <BtnFavorities
                size="small"
                status={templateFavorite}
                mailId={id}
                path={path}
              />
              <BtnDeleteTemplate mailId={id} path={path} />
            </Flex>
          </Flex>
          <Flex
            justify={"space-between"}
            // style={{ margin: "-0.1rem" }}
            align={"center"}
          >
            <Text
              styles={(theme) => ({
                root: {
                  margin: "-0.1rem",
                  color:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[3]
                      : theme.colors.darkTheme[2],
                },
              })}
              size="sm"
            >
              {shortDescription}...
            </Text>
            <Text
              size="xs"
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[6]}`
                      : `${theme.colors.darkTheme[1]}`,
                },
              })}
            >
              {dayjs(createdAt).format("DD")}/{dayjs(createdAt).format("MM")}/
              {dayjs(createdAt).format("YYYY")}
            </Text>
          </Flex>
        </Stack>
      </Flex>
    </Group>
  );
}
