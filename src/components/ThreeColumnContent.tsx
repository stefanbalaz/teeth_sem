import HeadlineParagraphBlock from "./HeadlineParagraphBlock";
import Headline1 from "./Headline1";
import Headline2 from "./Headline2";
import { ThreeColumnContentProps } from "../types";

export default function ThreeColumnContent({
  headline1Text,
  headline2Text,
  headlineParagraphArray,
}: ThreeColumnContentProps) {
  return (
    <div className="custom-margin-b">
      <Headline2 headline2ClassName="w-3/4 mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5">
        {headline2Text}
      </Headline2>
      <Headline1 headline1ClassName=" w-3/4">{headline1Text}</Headline1>
      <HeadlineParagraphBlock
        headlineParagraphArray={headlineParagraphArray}
        contentButtonBlockClassName="custom-margin-b-half"
      />
    </div>
  );
}
