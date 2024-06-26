import HeadlineParagraph from "./HeadlineParagraph";
import { twMerge } from "tailwind-merge";

interface HeadlineParagraphArrayProps {
  headlineText: string;
  headline3ClassName?: string;
  paragraphText: string;
}

interface ContentButtonBlockProps {
  headlineParagraphArray: HeadlineParagraphArrayProps[];
  contentButtonBlockClassName?: string;
}

export default function HeadlineParagraphBlock({
  headlineParagraphArray,
  contentButtonBlockClassName,
}: ContentButtonBlockProps) {
  const classes = twMerge(
    "grid grid-cols-1 md:grid-cols-3 gap-8",
    contentButtonBlockClassName
  );

  return (
    <div className={classes}>
      {headlineParagraphArray.map((block, index) => (
        <HeadlineParagraph
          key={index}
          headlineText={block.headlineText}
          headline3ClassName={block.headline3ClassName}
          paragraphText={block.paragraphText}
        />
      ))}
    </div>
  );
}
