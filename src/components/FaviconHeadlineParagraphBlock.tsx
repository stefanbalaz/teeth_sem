import FaviconHeadlineParagraphElement from "./FaviconHeadlineParagraphElement";
import { twMerge } from "tailwind-merge";

interface FaviconHeadlineParagraphBlockArrayProps {
  headlineText: string;
  headline3ClassName?: string;
  paragraphText: string;
  buttonClassName: string;
  buttonText?: string;
  buttonLink?: string;
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
    "flex flex-col gap-8",
    faviconHeadlineParagraphBlockClassName
  );

  return (
    <div className={classes}>
      {faviconHeadlineParagraphBlockArray?.map((block, index) => (
        <FaviconHeadlineParagraphElement
          key={index}
          headlineText={block.headlineText}
          headline3ClassName={block.headline3ClassName}
          paragraphText={block.paragraphText}
        />
      ))}
    </div>
  );
}
