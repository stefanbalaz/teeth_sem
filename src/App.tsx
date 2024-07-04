import { useParams } from "react-router-dom";
import { landingPageConfig } from "./config/componentConfig";
import * as layouts from "./layouts";
import { ContentfulData, ConfigType } from "./types";
import useContentful from "./hooks/useContentful";
import React, { useEffect, useState } from "react";
import Headline1 from "./components/Headline1";
import Favicon from "./assets/Zahnarzt-Zaehnsationell-Zehlendorf-favicon.svg?react";

function DynamicComponentRouter() {
  const [data, setData] = useState<ContentfulData[]>([]);
  const [fetchedConfig, setFetchedConfig] = useState<ConfigType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { getData } = useContentful();
  const { landingPageParameter } = useParams<{
    landingPageParameter: string;
  }>();
  const landingPageParameterFormatted = landingPageParameter?.toLowerCase();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contentfulDataEntries = await getData();

        const contentfulData: ContentfulData[] = contentfulDataEntries.map(
          (entry) => ({
            fields: {
              topic:
                typeof entry.fields?.topic === "string"
                  ? entry.fields?.topic
                  : "",
              json: entry.fields?.json as
                | { [key: string]: ConfigType }
                | undefined,
            },
          })
        );

        setData(contentfulData);

        const contentfulDataLowercase = contentfulData.map((item) => {
          if (item.fields.json) {
            return {
              ...item,
              fields: {
                ...item.fields,
                topic:
                  typeof item.fields.topic === "string"
                    ? item.fields.topic.toLowerCase()
                    : item.fields.topic,
                json: Object.keys(item.fields.json).reduce((acc, key) => {
                  if (
                    item.fields.json &&
                    item.fields.json[key as keyof typeof item.fields.json]
                  ) {
                    acc[key.toLowerCase()] =
                      item.fields.json[key as keyof typeof item.fields.json];
                  }
                  return acc;
                }, {} as Record<string, ConfigType>),
              },
            };
          } else {
            return {
              ...item,
              fields: {
                ...item.fields,
                topic:
                  typeof item.fields.topic === "string"
                    ? item.fields.topic.toLowerCase()
                    : item.fields.topic,
                json: {} as Record<string, ConfigType>,
              },
            };
          }
        });

        const parameter = landingPageParameterFormatted || "default";
        const config = contentfulDataLowercase.find(
          (item) =>
            item.fields &&
            typeof item.fields.topic === "string" &&
            item.fields.topic === parameter &&
            item.fields.json
        )?.fields.json;

        setFetchedConfig(config as ConfigType | null);
      } catch (error) {
        console.error("Error fetching data from Contentful:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  console.log("fetchedConfig", fetchedConfig);

  /*   useEffect(() => {
    const firstKey =
      fetchedConfig && typeof fetchedConfig === "object"
        ? Object.keys(fetchedConfig)[0]
        : "";
    if (fetchedConfig && typeof fetchedConfig === "object") {
      // Store the first key of fetchedConfig in local storage when it changes
      if (firstKey) {
        localStorage.setItem("landingPageParameter", firstKey);
      }
    } else if (landingPageParameter === "impressum") {
      localStorage.setItem("landingPageParameter", firstKey);
    } else {
      localStorage.setItem("landingPageParameter", "");
    }
  }); */

  useEffect(() => {
    // Check if local storage already has a value for landingPageParameter
    const currentStoredValue = localStorage.getItem("landingPageParameter");

    if (
      !currentStoredValue || // If no value is stored
      (fetchedConfig && typeof fetchedConfig === "object")
    ) {
      // Update localStorage only if fetchedConfig is valid and not already stored
      const firstKey = fetchedConfig ? Object.keys(fetchedConfig)[0] : "";
      if (firstKey) {
        localStorage.setItem("landingPageParameter", firstKey);
      }
    }
  }, [fetchedConfig]);

  if (loading) {
    return (
      <div
        className="flex flex-col items-center justify-center gap-8"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Favicon className="w-12 h-12 lg:w-16 lg:h-16 object-contain" />
        <Headline1 headline1ClassName="flex align-center justify-center">
          Loading...
        </Headline1>
      </div>
    );
  }

  let configToUse: ConfigType;

  if (landingPageParameterFormatted === "impressum") {
    configToUse = landingPageConfig.impressum as ConfigType;
  } else if (
    fetchedConfig &&
    landingPageParameterFormatted &&
    fetchedConfig[landingPageParameterFormatted as keyof ConfigType]
  ) {
    const configValue =
      fetchedConfig[landingPageParameterFormatted as keyof ConfigType];
    if (typeof configValue === "object" && configValue !== null) {
      configToUse = configValue as ConfigType;
    } else {
      configToUse = landingPageConfig.default;
    }
  } else {
    configToUse = landingPageConfig.default;
  }

  const layoutName = configToUse.layout || "Layout1";
  const LayoutComponent = (
    layouts as {
      [key: string]: React.ComponentType<{
        config: ConfigType;
        data: ContentfulData[];
      }>;
    }
  )[layoutName];

  if (!LayoutComponent) {
    return <div>Layout not found</div>;
  }

  return <LayoutComponent config={configToUse} data={data} />;
}

export default DynamicComponentRouter;
