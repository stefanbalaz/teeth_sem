import FaviconHeadlineParagraphElement from "./FaviconHeadlineParagraphElement";
import { twMerge } from "tailwind-merge";

interface FaviconHeadlineParagraphBlockArrayProps {
  headline3Text: string;
  headline3ClassName?: string;
  paragraphText: string;
  paragraphClassName?: string;
}

interface FaviconHeadlineParagraphBlockProps {
  faviconHeadlineParagraphBlockArray: FaviconHeadlineParagraphBlockArrayProps[];
  faviconHeadlineParagraphBlockClassName?: string;
}

export default function FaviconHeadlineParagraphBlock({
  faviconHeadlineParagraphBlockArray,
  faviconHeadlineParagraphBlockClassName,
}: FaviconHeadlineParagraphBlockProps) {
  const classes = twMerge(
    "flex flex-col gap-4 sm:gap-6 md:gap-12",
    faviconHeadlineParagraphBlockClassName
  );

  return (
    <div className={classes}>
      {faviconHeadlineParagraphBlockArray?.map((block, index) => (
        <FaviconHeadlineParagraphElement
          key={index}
          headline3Text={block.headline3Text}
          headline3ClassName={block.headline3ClassName}
          paragraphText={block.paragraphText}
          paragraphClassName={block.paragraphClassName}
        />
      ))}
    </div>
  );
}
