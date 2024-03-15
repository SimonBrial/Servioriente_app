"use client";

import { Button, useMantineColorScheme } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "../../icons";
import btnClasses from "@/styles/btn-styles.module.css";

export const BtnBackSection = ({
  withStyles,
  label,
  dir,
}: {
  withStyles: boolean;
  label: string;
  dir: string;
}): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Link href={dir} style={{ width: "100%" }}>
      <Button
        leftSection={<IoArrowBackOutline />}
        variant={withStyles ? "white" : "transparent"}
        fullWidth
        styles={{
          section: { fontSize: "1.1rem" },
        }}
        classNames={{
          root:
            colorScheme === "light"
              ? withStyles
                ? btnClasses.btnBackSection_withStyles
                : btnClasses.btnBackSection
              : withStyles
                ? btnClasses.btnBackSection_withStyles
                : btnClasses.btnBackSection_dark,
        }}
      >
        {label}
      </Button>
    </Link>
  );
};
