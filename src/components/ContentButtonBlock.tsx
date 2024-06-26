import HeadlineContentButton from "./HeadlineContentButton";
import { twMerge } from "tailwind-merge";

interface ContentButtonBlockArrayProps {
  headlineText: string;
  headline3ClassName?: string;
  paragraphText: string;
  buttonClassName: string;
  buttonText?: string;
  buttonLink?: string;
}

interface ContentButtonBlockProps {
  contentButtonBlockArray: ContentButtonBlockArrayProps[];
  contentButtonBlockClassName?: string;
}

export default function ContentButtonBlock({
  contentButtonBlockArray,
  contentButtonBlockClassName,
}: ContentButtonBlockProps) {
  const classes = twMerge(
    "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-12",
    contentButtonBlockClassName
  );

  return (
    <div className={classes}>
      {contentButtonBlockArray.map((block, index) => (
        <HeadlineContentButton
          key={index}
          headlineText={block.headlineText}
          headline3ClassName={block.headline3ClassName}
          paragraphText={block.paragraphText}
          buttonClassName="mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0"
          buttonText={block.buttonText}
          buttonLink={block.buttonLink}
        />
      ))}
    </div>
  );
}
