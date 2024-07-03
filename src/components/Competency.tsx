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
    <>
      {(skills || headline1Text || paragraphText) && (
        <div
          className="
        flex flex-col items-center
        custom-margin-b
        "
        >
          {skills && <Skills skills={skills} />}
          {headline1Text && (
            <Headline1 headline1ClassName="w-3/4 text-center">
              {headline1Text}
            </Headline1>
          )}
          {paragraphText && (
            <Paragraph paragraphClassName="w-3/4 text-center mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
              {paragraphText}
            </Paragraph>
          )}
        </div>
      )}
    </>
  );
}
