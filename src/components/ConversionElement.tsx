import Headline2 from "./Headline2";
import Paragraph from "./Paragraph";
import Button from "./Button";
import PhoneNumber from "./PhoneNumber";
import EyeCatcher from "./EyeCatcher";
import { ConversionElementProps } from "../types";

export default function ConversionElement({
  headline2Text,
  paragraphText,
  buttonLink,
  buttonText,
  phoneNumber,
  eyeCatcherVisible,
  eyeCatcherText,
}: ConversionElementProps) {
  return (
    <>
      {(headline2Text || paragraphText || phoneNumber || buttonLink) && (
        <div className="custom-margin-b flex flex-col items-center relative bg-customGreenExtraBright bg-opacity-60 rounded-md">
          <div className="flex flex-row w-full justify-center items-center">
            {headline2Text && (
              <Headline2
                headline2ClassName="
          w-1/2 
          text-center 
          mt-2 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-7
          "
              >
                {headline2Text}
              </Headline2>
            )}
            <EyeCatcher
              eyeCatcherClassName="absolute right-0 -top-2 mb-2 ml-2 rotate-6"
              eyeCatcherVisible={eyeCatcherVisible}
            >
              {eyeCatcherText}
            </EyeCatcher>
          </div>
          {paragraphText && (
            <Paragraph paragraphClassName="w-3/4 text-center">
              {paragraphText}
            </Paragraph>
          )}
          {(buttonLink || phoneNumber) && (
            <div className="flex flex-row items-center gap-4 custom-margin-b-third">
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
          )}
        </div>
      )}
    </>
  );
}
