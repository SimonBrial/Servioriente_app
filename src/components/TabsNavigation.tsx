"use client";

import Link from "next/link";
import { Tabs, useMantineColorScheme } from "@mantine/core";
import { SectionsArray, TabsSectionesProps } from "@/interface/interface";
import classTabs from "../styles/tabNavigation.module.css";

export default function TabsNavigation({
  sectionsArray,
  orientation,
}: SectionsArray): JSX.Element {
  const { colorScheme } = useMantineColorScheme();

  const sections = (): JSX.Element => {
    return (
      <Tabs.List
      /* classNames={{
          list: classTabs.tab_list_dark,
        }} */
      >
        {sectionsArray.map((section: TabsSectionesProps, index: number) => (
          <Link href={section.dir} key={index}>
            <Tabs.Tab
              value={section.value}
              leftSection={section.icon}
              className={
                colorScheme === "light"
                  ? classTabs.tab_label
                  : classTabs.tab_label_dark
              }
              classNames={{
                tab:
                  colorScheme === "light"
                    ? classTabs.tab_item
                    : classTabs.tab_item_dark,
              }}
            >
              {section.value}
            </Tabs.Tab>
          </Link>
        ))}
      </Tabs.List>
    );
  };

  return (
    <Tabs
      orientation={orientation ? "horizontal" : "vertical"}
      defaultValue={sectionsArray[0].value}
      /* classNames={{
        tab: classTabs.tab_item,
      }} */
      styles={{
        tabSection: {
          fontSize: "1.2rem",
        },
      }}
    >
      {sections()}
    </Tabs>
  );
}
