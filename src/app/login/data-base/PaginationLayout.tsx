import { Group, Pagination, useMantineColorScheme } from "@mantine/core";
import classes from "@/styles/list-styles.module.css";

export default function PaginationLayout() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Pagination.Root
      total={10}
      classNames={{
        control:
          colorScheme === "light"
            ? classes.pagination_item
            : classes.pagination_item_dark,
      }}
    >
      <Group gap={5} justify="center">
        <Pagination.Previous />
        <Pagination.Items />
        <Pagination.Next />
      </Group>
    </Pagination.Root>
  );
}
