import FaviconHeadlineParagraphElement from "./FaviconHeadlineParagraphElement";
import { twMerge } from "tailwind-merge";
import { FaviconHeadlineParagraphBlockProps } from "../types";

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
