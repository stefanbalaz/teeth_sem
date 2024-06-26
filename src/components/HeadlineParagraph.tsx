import Headline3 from "./Headline3";
import Paragraph from "./Paragraph";

interface HeadlineContentButtonProps {
  headlineText: string;
  headline3ClassName?: string;
  paragraphText: string;
}

export default function HeadlineParagraph({
  headlineText,
  headline3ClassName,
  paragraphText,
}: HeadlineContentButtonProps) {
  return (
    <div className="">
      <div className="flex flex-row items-center gap-2 custom-margin-b-min">
        <Headline3 headline3ClassName="mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
          {headlineText}
        </Headline3>
      </div>
      <Paragraph paragraphClassName="">{paragraphText}</Paragraph>
    </div>
  );
}
