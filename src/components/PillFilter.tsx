"use client";

import { Pill, useMantineColorScheme } from "@mantine/core";
import classes from "@/styles/general-styles.module.css";
import { useDataBaseStore } from "@/store/db-store";

export const PillFilter = ({ tag }: { tag: string }): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  const { fnDeletePillFilter } = useDataBaseStore();
  return (
    <Pill
      withRemoveButton
      className={colorScheme === "light" ? classes.pill : classes.pill_dark}
      onRemove={() => fnDeletePillFilter(tag)}
    >
      {tag}
    </Pill>
  );
};
