"use Client";

import { useMantineColorScheme, UnstyledButton, Tooltip } from "@mantine/core";
import Link from "next/link";
import sidebarClass from "@/styles/sidebar.module.css";
import { NavIconProps } from "@/interface/interface";

function NavIcon({
  onClick,
  active,
  label,
  icon,
  dir,
}: NavIconProps): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Tooltip
      withArrow
      offset={26}
      label={label}
      position="right"
      color="#004EE5"
      transitionProps={{ transition: "skew-up", duration: 300 }}
      styles={{ tooltip: { color: "#fff" } }}
    >
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
    </Tooltip>
  );
}

export default NavIcon;
