"use client";

import { useMantineColorScheme, Button, Drawer, Stack } from "@mantine/core";
import {
  HiOutlineFolderAdd,
  HiOutlineUserAdd,
  LuCalendarPlus,
  TbTemplate,
  TbMailPlus,
  MdAlarmAdd,
  LuGoal,
} from "@/icons";
import classesBtn from "@/styles/btn-styles.module.css";
import { tagIcon } from "@/types/types";
import { iconList } from "@/interface/interface";

interface BtnAddProps {
  iconTag: tagIcon;
  label: string;
  fnShow: (state: boolean) => void;
  children: React.ReactNode;
  showDrawer: boolean;
}

export default function BtnAdd({
  showDrawer,
  children,
  iconTag,
  fnShow,
  label,
}: BtnAddProps): JSX.Element {
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
      icon: <MdAlarmAdd />,
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
        opened={showDrawer}
        onClose={() => fnShow(false)}
        closeOnClickOutside={false}
        position="right"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        withCloseButton={false}
        styles={{
          content: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
          },
        }}
      >
        <Stack
          justify="space-between"
          style={{
            padding: "0 1rem",
            height: "95vh",
          }}
        >
          {children}
        </Stack>
      </Drawer>
      <Button
        leftSection={selectIcon(iconTag)}
        styles={{
          section: { fontSize: "1.2rem" },
          root: {
            padding: "0.6rem 1.5rem",
            height: "100%",
            width: "100%",
          },
        }}
        // fullWidth
        onClick={() => fnShow(true)}
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
