import { Flex } from "@mantine/core";
import BtnEdit from "./BtnEdit";
import BtnSee from "./BtnSee";
import BtnDelete from "./BtnDelete";
import RegisterEditLayout from "@/app/login/data-base/RegisterEditLayout";
import { UserDescriptionLayout } from "@/app/login/data-base/UserDescriptionLayout";

function BtnFn(): JSX.Element {
  return (
    <Flex gap={6} align={"center"}>
      <BtnDelete
        key={crypto.randomUUID()}
        description=""
        labelBtn=""
        color=""
        title=""
        id=""
        icon
      >
        Prueba
      </BtnDelete>
      <BtnSee>
        <UserDescriptionLayout />
      </BtnSee>
      <BtnEdit
        key={crypto.randomUUID()}
        buttonStyles="special"
        description=""
        labelBtn=""
        color=""
        title=""
        id=""
        icon
      >
        <RegisterEditLayout />
      </BtnEdit>
    </Flex>
  );
}

export default BtnFn;
