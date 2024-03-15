"use client";

import { Pill, useMantineColorScheme } from "@mantine/core";
import classes from "@/styles/general-styles.module.css";

export const PillFilter = ({ tag }: { tag: string }): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Pill
      withRemoveButton
      className={colorScheme === "light" ? classes.pill : classes.pill_dark}
    >
      {tag}
    </Pill>
  );
};
