/* eslint-disable object-shorthand */
"use client";

import { useDisclosure } from "@mantine/hooks";
import {
  useMantineColorScheme,
  Button,
  Drawer,
  Stack,
  Flex,
} from "@mantine/core";
import {
  HiOutlineFolderAdd,
  HiOutlineUserAdd,
  LuCalendarPlus,
  TbTemplate,
  TbMailPlus,
  BiBellPlus,
  IoClose,
  LuGoal,
  // BiTask,
} from "@/icons";
import classesBtn from "@/styles/btn-styles.module.css";
import { BtnAddProps, iconList } from "@/interface/interface";
import { notifications } from "@mantine/notifications";

function BtnAdd({
  description,
  children,
  labelBtn,
  iconTag,
  loading,
  classes,
  color,
  title,
  addFn,
  label,
  icon,
  id,
}: BtnAddProps): JSX.Element {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();

  const iconList: iconList[] = [
    {
      tag: "goal",
      icon: <LuGoal />,
    },
    {
      tag: "add-user",
      icon: <HiOutlineUserAdd />,
    },
    {
      tag: "format",
      icon: <TbTemplate />,
    },
    {
      tag: "add-mail",
      icon: <TbMailPlus />,
    },
    {
      tag: "add-event",
      icon: <LuCalendarPlus />,
    },
    {
      tag: "add",
      icon: <BiBellPlus />,
    },
    {
      tag: "folder",
      icon: <HiOutlineFolderAdd />,
    },
  ];

  /*  const selectIcon = (tag: string): React.ReactNode => {
    const iconSelected: React.ReactNode = iconList.map(
      (icon: iconList, index: number) => {
        let iconName: React.ReactNode;
        if (icon.tag === tag) {
          iconName = icon.icon;
        }
        return iconName;
      },
    );

    return iconSelected;
  };
 */
  const selectIcon = (tag: string): React.ReactNode => {
    const icon = iconList.find((icon) => icon.tag === tag);
    return icon ? icon.icon : null;
  };

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        closeOnClickOutside={false}
        position="right"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        withCloseButton={false}
        styles={{
          content: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
          },
        }}
        // key={crypto.randomUUID()}
      >
        <Stack
          justify="space-between"
          style={{
            padding: "0 1rem",
            height: "95vh",
          }}
        >
          {children}
          <Flex align={"center"} gap={"sm"} style={{ height: "2.25rem" }}>
            <Button
              onClick={close}
              fullWidth
              variant="white"
              leftSection={<IoClose />}
              styles={(theme) => ({
                root: {
                  border: `2px solid ${theme.colors.lightTheme[6]}`,
                  color: `${theme.colors.lightTheme[6]}`,
                },
                section: { fontSize: "1.2rem" },
              })}
            >
              Cancelar
            </Button>
            <Button
              fullWidth
              variant="filled"
              leftSection={selectIcon(iconTag)}
              classNames={{
                root:
                  colorScheme === "light"
                    ? classesBtn.btnAdd
                    : classesBtn.btnAdd_dark,
              }}
              styles={(theme) => ({
                section: { fontSize: "1.2rem" },
              })}
              onClick={() => {
                close();
                notifications.show({
                  id: id,
                  color: color,
                  title: title,
                  message: description,
                  autoClose: 1000,
                  withCloseButton: true,
                  className: classes,
                  // style: { backgroundColor: "red" },
                  loading: loading,
                });
              }}
            >
              {labelBtn}
            </Button>
          </Flex>
        </Stack>
      </Drawer>
      <Button
        leftSection={selectIcon(iconTag)}
        styles={(theme) => ({
          section: { fontSize: "1.2rem" },
          root: {
            padding: "0.6rem 1.5rem",
            height: "100%",
            width: "100%",
          },
        })}
        // fullWidth
        onClick={open}
        classNames={{
          root:
            colorScheme === "light"
              ? classesBtn.btnAdd
              : classesBtn.btnAdd_dark,
        }}
        key={crypto.randomUUID()}
      >
        {label}
      </Button>
    </>
  );
}

export default BtnAdd;
