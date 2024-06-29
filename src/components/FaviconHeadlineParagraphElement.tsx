import Headline3 from "./Headline3";
import Favicon from "../assets/Zahnarzt-Zaehnsationell-Zehlendorf-favicon.svg?react";

/* import { ReactComponent as Favicon } from "../assets/Zahnarzt-Zaehnsationell-Zehlendorf-favicon.svg"; */
import Paragraph from "./Paragraph";
import { FaviconHeadlineParagraphElementProps } from "../types";

export default function FaviconHeadlineParagraphElement({
  headline3Text,
  paragraphText,
}: FaviconHeadlineParagraphElementProps) {
  return (
    <div className="">
      <div className="flex flex-row items-center gap-2 custom-margin-b-min">
        <Favicon className="w-6 h-6 lg:w-8 lg:h-8 object-contain" />
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
