"use client";

import Link from "next/link";
import { Tabs, useMantineColorScheme } from "@mantine/core";
import { SectionsArray, TabsSectionesProps } from "@/interface/interface";
import classes from "@/styles/general-styles.module.css";

export default function TabsNavigation({
  sectionsArray,
  orientation,
}: SectionsArray): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  /* const [activeTab, setActiveTab] = useState<number>(0);
  const path = usePathname();

  useEffect(() => {
    if (path === sectionsArray[0].dir) {
      setActiveTab(0);
    } else if (path.includes(sectionsArray[0].dir)) {
      const idx = sectionsArray.findIndex((section) => path === section.dir);
      setActiveTab(idx);
    }
    console.log("path: ", path);
  }, [path]);

   console.log("activeTab: ", activeTab); */

  const sections = (): JSX.Element => {
    return (
      <Tabs.List>
        {sectionsArray.map((section: TabsSectionesProps, index: number) => (
          <Link href={section.dir} key={index}>
            <Tabs.Tab
              value={section.value}
              leftSection={section.icon}
              className={
                colorScheme === "light"
                  ? classes.tab_label
                  : classes.tab_label_dark
              }
              classNames={{
                tab:
                  colorScheme === "light"
                    ? classes.tab_item
                    : classes.tab_item_dark,
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
        tab: classes.tab_item,
      }} */
      styles={{
        root: {
          width: "100%",
        },
        tabSection: {
          fontSize: "1.2rem",
        },
      }}
    >
      {sections()}
    </Tabs>
  );
}
