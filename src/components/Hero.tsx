import Headline2 from "./Headline2";
import Headline3 from "./Headline3";
import Paragraph from "./Paragraph";
import Button from "./Button";
import PhoneNumber from "./PhoneNumber";
import EyeCatcher from "./EyeCatcher";
import { HeroProps } from "../types";

export default function Hero({
  backgroundImage,
  eyeCatcherVisible,
  eyeCatcherText,
  headline2Text,
  headline3Text,
  paragraphText,
  buttonLink,
  buttonText,
  phoneNumber,
}: HeroProps) {
  return (
    <div
      className="
        rounded-md
        relative
        bg-cover bg-center
        p-5
        custom-margin-b-third
        "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative bg-white bg-opacity-95 rounded-md w-full md:w-1/2 2xl:w-1/3 my-5 p-5 mt-5 mr-5 md:mr-10 lg:mr-20 xl:mr-32 ml-auto">
        <EyeCatcher
          eyeCatcherClassName="absolute -right-4 -top-6 rotate-6"
          eyeCatcherVisible={eyeCatcherVisible}
        >
          {eyeCatcherText}
        </EyeCatcher>
        {headline3Text && <Headline3>{headline3Text}</Headline3>}
        {headline2Text && <Headline2>{headline2Text}</Headline2>}
        {paragraphText && <Paragraph>{paragraphText}</Paragraph>}
        <div className="flex flex-row items-center gap-4">
          {buttonLink && (
            <Button
              buttonClassName="mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0"
              buttonLink={buttonLink}
            >
              {buttonText}
            </Button>
          )}
          {phoneNumber && (
            <PhoneNumber
              phoneNumberClassName="
            text-customGreenDark
            manrope-700
            "
            >
              {phoneNumber}
            </PhoneNumber>
          )}
        </div>
      </div>
    </div>
  );
}
