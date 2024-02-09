import {
  useMantineColorScheme,
  UnstyledButton,
  Tooltip,
  Drawer,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HiOutlineEye } from "../../icons";
import btnClass from "@/styles/BtnStyles.module.css";
import BtnBack from "./BtnBack";

export default function BtnSee({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        withCloseButton={false}
        styles={{
          content: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#9a90ef1a",
          },
        }}
      >
        <Stack
          justify="space-between"
          style={{
            padding: "1rem 1rem 0 1rem",
            height: "96vh",
          }}
        >
          {children}
          <BtnBack close={close} label="Volver" />
        </Stack>
      </Drawer>
      <Tooltip
        label="Ver"
        withArrow
        position="top"
        styles={(theme) => ({
          tooltip: {
            background:
              colorScheme === "light"
                ? `${theme.colors.lightTheme[6]}`
                : `${theme.colors.darkTheme[1]}`,
            color: "#fff",
          },
        })}
      >
        <UnstyledButton
          variant="transparent"
          color="gray"
          aria-label="Ver"
          className={
            colorScheme === "light"
              ? btnClass.btnView_item
              : btnClass.btnView_item_dark
          }
          onClick={open}
        >
          <HiOutlineEye />
        </UnstyledButton>
      </Tooltip>
    </>
  );
}
