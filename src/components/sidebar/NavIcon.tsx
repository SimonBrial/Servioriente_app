"use Client";

import { useMantineColorScheme, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import sidebarClass from "@/styles/generalStyles.module.css";
import { NavIconProps } from "@/interface/interface";
import TooltipLayout from "../TooltipLayout";

function NavIcon({
  onClick,
  active,
  label,
  icon,
  dir,
}: NavIconProps): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <TooltipLayout label={label} position="right">
      <Link
        href={dir}
        // className={sidebarClass.icon}
      >
        <UnstyledButton
          onClick={onClick}
          style={{
            // marginLeft: "-0.5rem",
            padding: "0.8rem",
          }}
          styles={{ root: { color: "black" } }}
          className={
            colorScheme === "light"
              ? sidebarClass.iconContainer
              : sidebarClass.iconContainer_dark
          }
          data-active={active || undefined}
        >
          <span
            className={
              colorScheme === "light"
                ? sidebarClass.icon
                : sidebarClass.icon_dark
            }
            data-active={active || undefined}
          >
            {icon}
          </span>
        </UnstyledButton>
      </Link>
    </TooltipLayout>
  );
}

export default NavIcon;
