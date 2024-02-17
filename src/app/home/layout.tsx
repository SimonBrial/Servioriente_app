import { Group } from "@mantine/core";

export default function layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <Group>{children}</Group>;
}
