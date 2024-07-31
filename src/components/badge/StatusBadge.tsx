import { processTitle } from "@/types/types";
import { underScoreColor } from "@/utils/underScoreColor";
import { Badge } from "@mantine/core";

export default function StatusBadge({
  title,
}: {
  title: processTitle;
}): JSX.Element {
  return (
    <Badge
      color={underScoreColor(title)}
      size="md"
      radius="sm"
      style={{ cursor: "default" }}
    >
      {title}
    </Badge>
  );
}
