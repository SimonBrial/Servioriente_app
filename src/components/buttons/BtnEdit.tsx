import {
  Button,
  Center,
  Drawer,
  Stack,
  Tooltip,
  UnstyledButton,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HiOutlinePencil, HiOutlineSave } from "../../icons";
import btnClass from "@/styles/BtnStyles.module.css";
import BtnActions from "./BtnActions";
import { EditButtonStyles } from "@/types/types";

export default function BtnEdit({
  children,
  buttonStyles,
}: {
  children: React.ReactNode;
  buttonStyles: EditButtonStyles;
}): JSX.Element {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();

  let buttonSty: JSX.Element;

  const buttonType = (type: EditButtonStyles): JSX.Element => {
    if (type === "normal") {
      buttonSty = (
        <Button
          fullWidth
          leftSection={<HiOutlinePencil />}
          styles={(theme) => ({
            root: {
              backgroundColor: `${theme.colors.principalTheme[6]}`,
              height: "100%",
            },
            section: { fontSize: "1.2rem" },
          })}
          onClick={open}
        >
          Editar
        </Button>
      );
    } else if (type === "special") {
      buttonSty = (
        <Tooltip
          label="Editar"
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
            aria-label="Editar"
            className={
              colorScheme === "light"
                ? btnClass.btnEdit_item
                : btnClass.btnEdit_item_dark
            }
            onClick={open}
          >
            <HiOutlinePencil />
          </UnstyledButton>
        </Tooltip>
      );
    } else if (type === "unstyled") {
      buttonSty = (
        <UnstyledButton style={{ fontSize: "1.5rem" }} onClick={open}>
          <Center>
            <HiOutlinePencil />
          </Center>
        </UnstyledButton>
      );
    }
    return buttonSty;
  };

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
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
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
          <BtnActions icon={<HiOutlineSave />} title="Guardar" close={close} />
        </Stack>
      </Drawer>
      {buttonType(buttonStyles)}
    </>
  );
}
