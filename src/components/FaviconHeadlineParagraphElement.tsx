import Headline3 from "./Headline3";
import Favicon from "../assets/Zahnarzt-Zaehnsationell-Zehlendorf-favicon.svg?react";
import Paragraph from "./Paragraph";

interface FaviconHeadlineParagraphElementProps {
  headlineText: string;
  headline3ClassName?: string;
  paragraphText: string;
}

export default function FaviconHeadlineParagraphElement({
  headlineText,
  paragraphText,
}: FaviconHeadlineParagraphElementProps) {
  return (
    <div className="">
      <div className="flex flex-row items-center gap-2 custom-margin-b-min">
        <Favicon className="w-6 h-6 lg:w-8 lg:h-8 object-contain" />
        <Headline3 headline3ClassName="mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
          {headlineText}
        </Headline3>
      </div>
      <Paragraph paragraphClassName="mb-1 sm:mb-1 md:mb-1 lg:mb-2 xl:mb-7">
        {paragraphText}
      </Paragraph>
    </div>
  );
}
