"use client";

import {
  useMantineColorScheme,
  ActionIcon,
  Checkbox,
  Menu,
  Flex,
} from "@mantine/core";
import classes from "@/styles/general-styles.module.css";
import {
  MdArrowDropDown,
  HiOutlineMail,
  HiOutlineMailOpen,
  TbStarFilled,
  HiOutlineSave,
} from "@/icons";
import { useMailStore } from "@/store/mail-store";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function BtnCheckAllMails() {
  const path = usePathname();
  const { colorScheme } = useMantineColorScheme();
  const {
    fnCheckNoReadMails,
    fnFavoriteAllMails,
    fnArchivedAllMails,
    fnNotReadAllMails,
    fnCheckReadMails,
    fnCheckAllMails,
    fnReadAllMails,
    itemChecked,
  } = useMailStore();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (itemChecked.length === 0) {
      setChecked(false);
    }
  }, [itemChecked.length]);
  // console.log("itemChecked: ", itemChecked);

  return (
    <Menu
      shadow="md"
      width={200}
      withArrow
      position="bottom-start"
      styles={(theme) => ({
        item: {
          color:
            colorScheme === "light"
              ? theme.colors.lightTheme[6]
              : theme.colors.darkTheme[1],
        },
        itemSection: {
          fontSize: "1.2rem",
        },
      })}
    >
      <Flex gap={4} align={"center"}>
        <Checkbox
          onChange={(e) => {
            setChecked(e.currentTarget.checked);
            fnCheckAllMails(path, !checked);
          }}
          checked={checked}
          color={colorScheme === "light" ? "#115dfe" : "#52A5E0"}
          classNames={{
            input:
              colorScheme === "light"
                ? classes.checkbox
                : classes.checkbox_dark,
          }}
        />
        <Menu.Target>
          <ActionIcon
            size={"sm"}
            variant="default"
            styles={(theme) => ({
              root: {
                color:
                  colorScheme === "light"
                    ? theme.colors.lightTheme[3]
                    : theme.colors.darkTheme[2],
                border: "none",
                padding: "0.1rem",
              },
            })}
          >
            <MdArrowDropDown style={{ fontSize: "1.5rem" }} />
          </ActionIcon>
        </Menu.Target>
      </Flex>

      <Menu.Dropdown>
        <Menu.Label>Seleccionar correos</Menu.Label>
        <Menu.Divider />
        <Menu.Item
          onClick={() => fnCheckReadMails(path, !checked)}
          leftSection={<HiOutlineMailOpen />}
        >
          Leidos
        </Menu.Item>
        <Menu.Item
          onClick={() => fnCheckNoReadMails(path, !checked)}
          leftSection={<HiOutlineMail />}
        >
          No Leidos
        </Menu.Item>
        <Menu.Label>Marcar todos</Menu.Label>
        <Menu.Divider />
        <Menu.Item
          onClick={() => fnFavoriteAllMails()}
          leftSection={<TbStarFilled />}
        >
          Favoritos
        </Menu.Item>
        <Menu.Item
          onClick={() => fnArchivedAllMails()}
          leftSection={<HiOutlineSave />}
        >
          Archivados
        </Menu.Item>
        <Menu.Item
          onClick={() => fnReadAllMails()}
          leftSection={<HiOutlineMailOpen />}
        >
          Leidos
        </Menu.Item>
        <Menu.Item
          onClick={() => fnNotReadAllMails()}
          leftSection={<HiOutlineMail />}
        >
          No Leidos
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
