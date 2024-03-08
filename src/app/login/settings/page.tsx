import { GlobalLayout } from "./GlobalLayout";
import SettingsPageContainer from "./SettingsPageContainer";

export default function page(): JSX.Element {
  return (
    <GlobalLayout>
      <SettingsPageContainer />
    </GlobalLayout>
  );
}
