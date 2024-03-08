import classes from "@/styles/generalStyles.module.css";
import { HiOutlineBell } from "@/icons";
import { Box } from "@mantine/core";
import NavIcon from "./NavIcon";

export default function NotificationIcon({ active }: { active: boolean }) {
  return (
    <Box style={{ position: "relative" }}>
      <NavIcon
        dir={""}
        icon={<HiOutlineBell className={classes.icon} />}
        label={"Notificaciones"}
      />
      {active ? (
        <span
          style={{
            position: "absolute",
            width: "10px",
            height: "10px",
            backgroundColor: "#F0185C",
            borderRadius: "100%",
            right: "0.55rem",
            bottom: "0.6rem",
          }}
        ></span>
      ) : (
        <></>
      )}
    </Box>
  );
}
