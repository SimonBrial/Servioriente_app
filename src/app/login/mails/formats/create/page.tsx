import CreateTemplateLayout from "./layout/CreateTemplateLayout";

export default function page(): JSX.Element {
  /*   const addImage = () => {
    // const url = window.prompt("URL");

    if (file && editor) {
      editor.chain().focus().setImage({ src: file.name }).run();
    }

    if (!editor) {
      return null;
    }
  }; */
  return <CreateTemplateLayout />;
}

{
  /* <FileInput
            leftSection={<LuImagePlus />}
            value={file}
            onChange={setFile}
            variant="unstyled"
            placeholder="add image"
            accept="image/png,image/jpeg"
          /> */
}
