import { Container, Skeleton, Stack } from "@mantine/core";

export default function WeeklyTasksSkeleton() {
  return (
    <Container style={{ width: "100%", height: "100%" }}>
      <Stack justify="space-between" style={{ height: "100%" }}>
        <Stack gap={"xs"}>
          <Skeleton height={40} width={"100%"} />
          <Stack
            style={{ height: "100%", padding: "10px", borderRadius: "6px" }}
          >
            <Skeleton height={80} width={"100%"} />
            <Skeleton height={80} width={"100%"} />
            <Skeleton height={80} width={"100%"} />
            <Skeleton height={80} width={"100%"} />
            <Skeleton height={80} width={"100%"} />
          </Stack>
        </Stack>
        <Skeleton height={40} width={"100%"} />
      </Stack>
    </Container>
  );
}
