import Skills from "./Skills";
import Headline1 from "./Headline1";
import Paragraph from "./Paragraph";
import { CompetencyProps } from "../types";

export default function Competency({
  headline1Text,
  paragraphText,
  skills,
}: CompetencyProps) {
  return (
    <div
      className="
        flex flex-col items-center
        custom-margin-b
        "
    >
      <Skills skills={skills} />
      <Headline1 headline1ClassName="w-3/4 text-center">
        {headline1Text}
      </Headline1>
      <Paragraph paragraphClassName="w-3/4 text-center mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
        {paragraphText}
      </Paragraph>
    </div>
  );
}
