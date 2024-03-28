import {
  useMantineColorScheme,
  UnstyledButton,
  Button,
  Center,
  Drawer,
  Stack,
  Flex,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HiOutlineDotsVertical, HiOutlinePencil, HiOutlineSave, IoClose } from "@/icons";
import classes from "@/styles/btn-styles.module.css";
import { EditButtonStyles } from "@/types/types";
import TooltipLayout from "../TooltipLayout";
import { notifications } from "@mantine/notifications";
import { BtnEditProps } from "@/interface/interface";

export default function BtnEdit({
  buttonStyles,
  description,
  children,
  labelBtn,
  color,
  title,
  icon,
  id,
}: BtnEditProps): JSX.Element {
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
                ? classes.btnEdit_item
                : classes.btnEdit_item_dark
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
        <UnstyledButton style={{ fontSize: "1.5rem" }} onClick={open} className={classes.btnEdit_folder}>
          <Center>
            <HiOutlineDotsVertical />
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
              leftSection={<HiOutlineSave />}
              classNames={{
                root:
                  colorScheme === "light"
                    ? classes.btnAdd
                    : classes.btnAdd_dark,
              }}
              styles={(theme) => ({
                section: { fontSize: "1.2rem" },
              })}
              onClick={() => {
                notifications.show({
                  id: id,
                  color: color,
                  title: title,
                  message: description,
                  autoClose: 1000,
                  withCloseButton: true,
                });
                close();
              }}
            >
              {labelBtn}
            </Button>
          </Flex>
        </Stack>
      </Drawer>
      {buttonType(buttonStyles)}
    </>
  );
}
