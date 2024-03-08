import {
  useMantineColorScheme,
  UnstyledButton,
  Button,
  Center,
  Drawer,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HiOutlinePencil, HiOutlineSave } from "../../icons";
import btnClass from "@/styles/btnStyles.module.css";
import BtnActions from "./BtnActions";
import { EditButtonStyles } from "@/types/types";
import TooltipLayout from "../TooltipLayout";

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
        <TooltipLayout label="Editar" position="top" key={crypto.randomUUID()}>
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
            <Center>
              <HiOutlinePencil />
            </Center>
          </UnstyledButton>
        </TooltipLayout>
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
          <BtnActions icon={<HiOutlineSave />} title="Guardar" close={close} />
        </Stack>
      </Drawer>
      {buttonType(buttonStyles)}
    </>
  );
}
