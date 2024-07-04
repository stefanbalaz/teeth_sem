import { useParams } from "react-router-dom";
import Headline1 from "./Headline1";
import Headline2 from "./Headline2";
import Headline3 from "./Headline3";
import Paragraph from "./Paragraph";
import { LegalContentProps } from "../types";

export default function LegalContent({
  impressum,
  dataPrivacy,
}: LegalContentProps) {
  const { landingPageParameter } = useParams<{
    landingPageParameter: string;
  }>();

  const impressumContent = impressum?.sections?.map((item, index) => (
    <div key={index}>
      <Headline3 headline3ClassName="mb-1 sm:mb-1 md:mb-2 lg:mb-3 xl:mb-4">
        {item.headline3Text}
      </Headline3>
      <Paragraph>{item.paragraphText}</Paragraph>
    </div>
  ));

  const dataPrivacyContent = dataPrivacy?.sections?.map((section, index) => (
    <div key={index}>
      <Headline1>{section.headline1Text}</Headline1>
      {section?.content?.map((content, subIndex) => (
        <div key={subIndex}>
          <Headline2>{content.headline2Text}</Headline2>
          <Paragraph>{content.paragraphText}</Paragraph>

          {content.subContent &&
            content.subContent.map((subContent, subSubIndex) => (
              <div key={subSubIndex}>
                <Headline3>{subContent.headline3Text}</Headline3>
                <Paragraph>{subContent.paragraphText}</Paragraph>
              </div>
            ))}
        </div>
      ))}
    </div>
  ));

  return (
    <div className="flex-1 custom-margin-b flex-grow">
      {landingPageParameter === "impressum" && (
        <>
          <Headline1>{impressum?.intro?.headline1Text}</Headline1>
          {impressumContent}
        </>
      )}
      {landingPageParameter === "data-privacy" && (
        <>
          <Headline1>{dataPrivacy?.intro?.headline1Text}</Headline1>
          <Paragraph>{dataPrivacy?.intro?.paragraphText}</Paragraph>
          {dataPrivacyContent}
        </>
      )}
    </div>
  );
}
