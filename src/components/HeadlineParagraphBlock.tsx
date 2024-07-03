import HeadlineParagraph from "./HeadlineParagraph";
import { twMerge } from "tailwind-merge";
import { HeadlineParagraphBlockProps } from "../types";

export default function HeadlineParagraphBlock({
  headlineParagraphArray,
  contentButtonBlockClassName,
}: HeadlineParagraphBlockProps) {
  const classes = twMerge(
    "grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-12",
    contentButtonBlockClassName
  );

  return (
    <div className={classes}>
      {headlineParagraphArray?.map((block, index) => (
        <HeadlineParagraph
          key={index}
          headline3Text={block.headline3Text}
          headline3ClassName={block.headline3ClassName}
          paragraphText={block.paragraphText}
        />
      ))}
    </div>
  );
}
