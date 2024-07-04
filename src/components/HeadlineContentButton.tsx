import Headline3 from "./Headline3";
import Favicon from "../assets/Zahnarzt-Zaehnsationell-Zehlendorf-favicon.svg?react";
import Paragraph from "./Paragraph";
import Button from "./Button";
import { HeadlineContentButtonProps } from "../types";

export default function HeadlineContentButton({
  headline3Text,
  paragraphText,
  buttonClassName,
  buttonText,
  buttonLink,
}: HeadlineContentButtonProps) {
  return (
    <div className="">
      <div className="flex flex-row items-center gap-2 custom-margin-b-min">
        <Favicon className="w-6 h-6 lg:w-8 lg:h-8 object-contain" />
        <Headline3 headline3ClassName="mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
          {headline3Text}
        </Headline3>
      </div>
      <Paragraph paragraphClassName="">{paragraphText}</Paragraph>
      {buttonLink && (
        <Button buttonClassName={buttonClassName} buttonLink={buttonLink}>
          {buttonText}
        </Button>
      )}
    </div>
  );
}
