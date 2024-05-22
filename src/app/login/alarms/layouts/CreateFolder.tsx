/* eslint-disable @typescript-eslint/no-misused-promises */

import { Button, Drawer, Stack, useMantineColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
export default function CreateFolder({
  children,
}: {
  children: React.ReactNode;
}) {
  const { colorScheme } = useMantineColorScheme();
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        closeOnClickOutside={true}
        position="right"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        withCloseButton={false}
        styles={{
          content: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
          },
        }}
      >
        <Stack
          justify="space-between"
          style={{
            padding: "0 1rem",
            height: "95vh",
          }}
        >
          {/* <form onSubmit={handleSubmit(onSubmit)}>
            <h1>CreateFolder</h1>
            <input type="text" {...register("value1")} />
            {value}
            <Button type="submit">submit</Button>
          </form> */}
          {children}
        </Stack>
      </Drawer>
      <Button
        // leftSection={selectIcon(iconTag)}
        styles={{
          section: { fontSize: "1.2rem" },
          root: {
            padding: "0.6rem 1.5rem",
            height: "100%",
            width: "100%",
          },
        }}
        // fullWidth
        onClick={open}
        /* classNames={{
            root:
              colorScheme === "light"
                ? classesBtn.btnAdd
                : classesBtn.btnAdd_dark,
          }} */
        key={crypto.randomUUID()}
      >
        Crear
      </Button>
    </>
  );
}
