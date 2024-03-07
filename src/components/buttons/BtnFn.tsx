import { Flex } from "@mantine/core";
import BtnEdit from "./BtnEdit";
import BtnSee from "./BtnSee";
import BtnDelete from "./BtnDelete";
import RegisterEditLayout from "@/app/login/data-base/RegisterEditLayout";
import { UserDescriptionLayout } from "@/app/login/data-base/UserDescriptionLayout";

function BtnFn(): JSX.Element {
  return (
    <Flex gap={6} align={"center"}>
      <BtnDelete>Prueba</BtnDelete>
      <BtnSee>
        <UserDescriptionLayout />
      </BtnSee>
      <BtnEdit buttonStyles="special">
        <RegisterEditLayout />
      </BtnEdit>
    </Flex>
  );
}

export default BtnFn;
