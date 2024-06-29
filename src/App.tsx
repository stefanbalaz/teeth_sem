import { useParams } from "react-router-dom";
import { landingPageConfig } from "./config/componentConfig";
import * as layouts from "./layouts";
import { ConfigType } from "./types";

function DynamicComponentRouter() {
  const { landingPageParameter } = useParams<{
    landingPageParameter: string;
  }>();

  // Provide a default value if landingPageParameter is undefined
  const parameter = landingPageParameter || "default";
  const configToUse: ConfigType =
    landingPageConfig[parameter] || landingPageConfig.default;

  // Ensure configToUse is always defined
  if (!configToUse) {
    return <div>Configuration not found</div>;
  }

  const layoutName = configToUse.layout || "Layout1";
  const LayoutComponent = (
    layouts as { [key: string]: React.ComponentType<{ config: ConfigType }> }
  )[layoutName];

  if (!LayoutComponent) {
    return <div>Layout not found</div>;
  }

  return <LayoutComponent config={configToUse} />;
}

export default DynamicComponentRouter;
