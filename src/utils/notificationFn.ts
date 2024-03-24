/* eslint-disable object-shorthand */
import { NotificationsFnProps } from "@/interface/interface";
import { notifications } from "@mantine/notifications";

export default function notificationsFn({
  description,
  loading,
  classes,
  color,
  title,
  icon,
  id,
}: NotificationsFnProps) {
  return notifications.show({
    id: id,
    color: color,
    title: title,
    message: description,
    autoClose: 1000,
    withCloseButton: true,
    onClose: () => console.log("unmounted"),
    onOpen: () => console.log("mounted"),
    icon: icon,
    className: classes,
    // style: { backgroundColor: "red" },
    loading: loading,
  });
}
