import DynamicFaviconTitle from "./components/Shared/SoftwareAsset/DynamicFaviconTitle";
import MainLayout from "./layout/MainLayout";
import { GlobalUtilityStyle } from "./styles/styled";

function App() {
  return (
    <GlobalUtilityStyle>
      <DynamicFaviconTitle />
      <MainLayout />
    </GlobalUtilityStyle>
  );
}

export default App;
