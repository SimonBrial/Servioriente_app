import { CalendarInput } from "@/components/inputs/CalendarInput";
import HorizontalInputLayout from "@/components/inputs/HorizontalInputLayout";
import { HiOutlineUser } from "@/icons";
import PhoneInputLayout from "@/components/inputs/PhoneInputLayout";
import { SelectSocialRed } from "@/components/SelectSocialRed";
import { TitleLayout } from "@/components/layout/TitleLayout";
import UserPhoto from "@/components/UserPhoto";
import { Container, Stack } from "@mantine/core";

export default function CreateClientLayout(): JSX.Element {
  return (
    <Container style={{ width: "100%" }} p={0}>
      <TitleLayout color="" icon="" title="Crear Registro" onText={false} />
      <Stack align="center" justify="space-between" gap={2} p={0}>
        <UserPhoto userIconSize="6rem" />
        <Stack gap={4} justify="space-between" w={"100%"}>
          <HorizontalInputLayout
            inputSize="200px"
            asterisk
            icon={<HiOutlineUser />}
            title="Nombre"
          />
          <HorizontalInputLayout
            inputSize="200px"
            asterisk
            icon={<HiOutlineUser />}
            title="Apellido"
          />
          <HorizontalInputLayout
            inputSize="200px"
            asterisk
            icon={<HiOutlineUser />}
            title="Vehiculo"
          />
          <HorizontalInputLayout
            inputSize="200px"
            asterisk
            icon={<HiOutlineUser />}
            title="Placa del vehiculo"
          />
          <HorizontalInputLayout
            inputSize="200px"
            asterisk
            icon={<HiOutlineUser />}
            title="Zona"
          />
          <HorizontalInputLayout
            inputSize="200px"
            asterisk
            icon={<HiOutlineUser />}
            title="Email"
          />
          <SelectSocialRed />
          <CalendarInput withTitle title="Cumpleaños" width={"200px"} />
          <PhoneInputLayout />
        </Stack>
      </Stack>
    </Container>
  );
}
