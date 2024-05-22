/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Button } from "@mantine/core";
import { useForm } from "react-hook-form";

interface IFolderProps {
  value1: string;
  value2: string;
  value3: string;
}

const initialValues: IFolderProps = {
  value1: "",
  value2: "",
  value3: "",
};

export default function Test() {
  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<IFolderProps>({
    mode: "onChange",
    // resolver: zodResolver(folderSchema),
    defaultValues: initialValues,
  });
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(errors);
  const value = watch("value1");
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>CreateFolder</h1>
      <input type="text" {...register("value1")} />
      {value}
      <Button type="submit">submit</Button>
    </form>
  );
}
