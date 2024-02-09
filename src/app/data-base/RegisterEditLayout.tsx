import {
  ActionIcon,
  TextInput,
  Select,
  Stack,
  Title,
  Flex,
} from "@mantine/core";
import {
  HiDevicePhoneMobile,
  MdOutlinePlace,
  HiOutlineUser,
  AiOutlineCar,
  HiLink,
} from "../../icons";
import { TitleLayout } from "@/components/layout/TitleLayout";

export default function RegisterEditLayout(): JSX.Element {
  return (
    <Stack gap={"xs"}>
      <TitleLayout title="Editar Registro" icon="" color="" onText={false} />
      <Flex justify={"space-between"} align={"center"}>
        <Title order={5} style={{ color: "#696969" }}>
          Nombre
        </Title>
        <TextInput
          leftSection={<HiOutlineUser />}
          variant="default"
          size="xs"
          placeholder="Nombre"
        />
      </Flex>
      <Flex justify={"space-between"} align={"center"}>
        <Title order={5} style={{ color: "#696969" }}>
          Apellido
        </Title>
        <TextInput
          leftSection={<HiOutlineUser />}
          variant="default"
          size="xs"
          placeholder="Apellido"
        />
      </Flex>
      <Flex justify={"space-between"} align={"center"}>
        <Title order={5} style={{ color: "#696969" }}>
          Vehiculo
        </Title>
        <TextInput
          leftSection={<AiOutlineCar />}
          variant="default"
          size="xs"
          placeholder="Vehiculo"
        />
      </Flex>
      <Flex justify={"space-between"} align={"center"}>
        <Title order={5} style={{ color: "#696969" }}>
          Estado
        </Title>
        <TextInput
          leftSection={<MdOutlinePlace />}
          variant="default"
          size="xs"
          placeholder="Estado"
        />
      </Flex>
      <Flex justify={"space-between"} align={"center"}>
        <Title order={5} style={{ color: "#696969" }}>
          Telefono
        </Title>
        <div style={{ display: "flex", gap: "8px" }}>
          <Select
            style={{ width: "100px" }}
            size="xs"
            label=""
            placeholder="Codigo"
            data={["0412", "0424", "0416"]}
          />
          <TextInput
            leftSection={<HiDevicePhoneMobile />}
            variant="default"
            size="xs"
            placeholder="Telefono"
          />
        </div>
      </Flex>
      <Flex justify={"space-between"} align={"center"}>
        <Title order={5} style={{ color: "#696969" }}>
          Estatus
        </Title>
        <Select
          size="xs"
          placeholder="Estatus"
          data={[
            "Muy Importante",
            "Importante",
            "Normal",
            "Poco Importante",
            "Muy Poco Importante",
          ]}
        />
      </Flex>
      <TitleLayout title="Redes Sociales" icon="" color="" onText={false} />
      <Flex justify={"space-between"} align={"center"}>
        <Title order={5} style={{ color: "#696969" }}>
          Facebook
        </Title>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
          }}
        >
          <TextInput size="xs" placeholder="Facebook" />

          <ActionIcon
            variant="transparent"
            color="#696969"
            aria-label="Settings"
          >
            <HiLink />
          </ActionIcon>
        </div>
      </Flex>
      <Flex justify={"space-between"} align={"center"}>
        <Title order={5} style={{ color: "#696969" }}>
          Whatsapp
        </Title>
        <Title
          order={5}
          styles={{
            root: {
              color: "#696969",
              width: "55%",
              textAlign: "center",
            },
          }}
        >
          0424 -589.85.76
        </Title>
      </Flex>
      <Flex justify={"space-between"} align={"center"}>
        <Title order={5} style={{ color: "#696969" }}>
          Instagram
        </Title>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
          }}
        >
          <TextInput size="xs" placeholder="Instagram" />
          <ActionIcon
            variant="transparent"
            color="#696969"
            aria-label="Settings"
          >
            <HiLink />
          </ActionIcon>
        </div>
      </Flex>
    </Stack>
  );
}
