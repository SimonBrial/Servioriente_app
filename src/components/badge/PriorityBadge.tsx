import { degreeType } from "@/types/types";
import degreeColor from "@/utils/degreeColor";
import { Badge } from "@mantine/core";

export const PriorityBadge = ({ title }: { title: degreeType }) => {
  return (
    <Badge color={degreeColor(title)[0]} size="md" radius="sm">
      {title}
    </Badge>
  );
};
