import { IoIosSend } from "@/icons";
import { Button } from "@mantine/core";
import React from "react";

export const BtnSend = () => {
  return (
    <Button
      leftSection={<IoIosSend />}
      variant="white"
      // color="#004EE5"
      fullWidth
      styles={(theme) => ({
        section: { fontSize: "1.2rem" },
        root: {
          color: `${theme.colors.principalTheme[6]}`,
          border: `2px solid ${theme.colors.principalTheme[6]}`,
        },
      })}
    >
      Enviar Mensaje
    </Button>
  );
};
