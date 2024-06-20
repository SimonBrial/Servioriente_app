"use client";

import { RiDeviceRecoverLine } from "@/icons";
import { Center, UnstyledButton, useMantineColorScheme } from "@mantine/core";
import classes from "@/styles/btn-styles.module.css";
import { notifications } from "@mantine/notifications";
import { useMailStore } from "@/store/mail-store";
import TooltipLayout from "@/components/TooltipLayout";

export function BtnRecoverMail({
  status,
  mailId,
  path,
}: {
  status: boolean;
  mailId: string;
  path: string;
}) {
  const { colorScheme } = useMantineColorScheme();
  const { fnRecoverMail } = useMailStore();
  return (
    <TooltipLayout label="Recuperar Correo" position="bottom">
      <UnstyledButton
        mb={0}
        classNames={{
          root:
            colorScheme === "light" ? classes.btnMail : classes.btnMail_dark,
        }}
        onClick={() => {
          fnRecoverMail(mailId);
          // setRecoverMail(!recoverMail);
          notifications.show({
            color: "#2BDD66",
            message: "Correo Recuperado satisfactoriamente 😎!",
            id: crypto.randomUUID(),
            title: "Correo Recuperado",
          });
        }}
      >
        <Center
          styles={(theme) => ({
            root: {
              fontSize: "1.1rem",
              // border: "1px solid red",
              color:
                colorScheme === "light"
                  ? theme.colors.lightTheme[6]
                  : theme.colors.darkTheme[1],
              /* : colorScheme === "light"
                  ? theme.colors.lightTheme[3]
                  : theme.colors.darkTheme[2], */
            },
          })}
        >
          <RiDeviceRecoverLine />
        </Center>
      </UnstyledButton>
    </TooltipLayout>
  );
}
