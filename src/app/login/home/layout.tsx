import { Group } from "@mantine/core";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <Group>{children}</Group>;
}
