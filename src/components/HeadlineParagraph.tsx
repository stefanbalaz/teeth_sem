import Headline3 from "./Headline3";
import Paragraph from "./Paragraph";
import { HeadlineParagraphProps } from "../types";

export default function HeadlineParagraph({
  headline3Text,
  paragraphText,
}: HeadlineParagraphProps) {
  return (
    <div className="">
      <div className="flex flex-row items-center gap-2 custom-margin-b-min">
        <Headline3 headline3ClassName="mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
          {headline3Text}
        </Headline3>
      </div>
      <Paragraph paragraphClassName="mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
        {paragraphText}
      </Paragraph>
    </div>
  );
}
