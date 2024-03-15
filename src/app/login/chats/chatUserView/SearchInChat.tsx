"use client";

import {
  IoChevronDownOutline,
  HiOutlineSearch,
  IoChevronUp,
  IoClose,
} from "@/icons";
import {
  useMantineColorScheme,
  UnstyledButton,
  TextInput,
  Popover,
  Divider,
  Center,
  Flex,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import btnClasses from "@/styles/btn-styles.module.css";
import classes from "@/styles/general-styles.module.css";

export const SearchInChat = (): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <Center>
      <Popover
        opened={opened}
        shadow="md"
        width={380}
        position="bottom-end"
        offset={5}
        withArrow
        trapFocus
        arrowPosition="center"
        closeOnClickOutside={false}
        classNames={{
          dropdown:
            colorScheme === "light"
              ? classes.menuDropdown
              : classes.menuDropdown_dark,
        }}
      >
        <Popover.Target>
          <UnstyledButton
            variant="transparent"
            size={"xl"}
            aria-label="Search"
            styles={(theme) => ({
              root: { margin: "0 0.2rem" },
            })}
            onClick={open}
            classNames={{
              root:
                colorScheme === "light"
                  ? btnClasses.btnMail
                  : btnClasses.btnMail_dark,
            }}
          >
            <Center style={{ fontSize: "2rem" }}>
              <HiOutlineSearch />
            </Center>
          </UnstyledButton>
        </Popover.Target>
        <Popover.Dropdown>
          <Flex gap={5} align={"center"}>
            <TextInput
              placeholder="Buscar en el chat"
              leftSection={<HiOutlineSearch />}
              style={{ width: "100%" }}
              styles={(theme) => ({
                root: {
                  padding: "0 0.2rem",
                },
                input: {
                  backgroundColor:
                    colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
                  color: `${theme.colors.lightTheme[3]}`,
                },
              })}
            />
            <UnstyledButton
              variant="transparent"
              size={"md"}
              aria-label="Search"
              classNames={{
                root:
                  colorScheme === "light"
                    ? btnClasses.btnMail
                    : btnClasses.btnMail_dark,
              }}
            >
              <Center>
                <IoChevronDownOutline style={{ fontSize: "1.5rem" }} />
              </Center>
            </UnstyledButton>
            <UnstyledButton
              variant="transparent"
              size={"md"}
              aria-label="Search"
              classNames={{
                root:
                  colorScheme === "light"
                    ? btnClasses.btnMail
                    : btnClasses.btnMail_dark,
              }}
            >
              <Center>
                <IoChevronUp style={{ fontSize: "1.5rem" }} />
              </Center>
            </UnstyledButton>
            <Divider
              orientation="vertical"
              color={colorScheme === "light" ? "#cdcdcd" : "#f8f8f8"}
            />
            <UnstyledButton
              variant="transparent"
              size={"md"}
              aria-label="Search"
              onClick={close}
              classNames={{
                root:
                  colorScheme === "light"
                    ? btnClasses.btnMail
                    : btnClasses.btnMail_dark,
              }}
            >
              <Center>
                <IoClose style={{ fontSize: "1.5rem" }} />
              </Center>
            </UnstyledButton>
          </Flex>
        </Popover.Dropdown>
      </Popover>
    </Center>
  );
};
