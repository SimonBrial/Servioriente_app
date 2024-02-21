import { Badge } from "@mantine/core";

export default function SocialRedBadge({
  title,
}: {
  title: string;
}): JSX.Element {
  return (
    <Badge color="blue" radius="sm" size="lg" w={120}>
      {title}
    </Badge>
  );
}
