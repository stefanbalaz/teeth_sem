import Headline2 from "./Headline2";
import Paragraph from "./Paragraph";
import Button from "./Button";
import PhoneNumber from "./PhoneNumber";
import EyeCatcher from "./EyeCatcher";

export default function ConversionElement() {
  return (
    <div className="custom-margin-b flex flex-col items-center relative   bg-customGreenExtraBright bg-opacity-60 rounded-md">
      <div className="flex flex-row w-full justify-center items-center">
        <Headline2 headline2ClassName="w-1/2 text-center mt-1 sm:mt-1 md:mt-1 lg:mt-2 xl:mt-7">
          Wir laden Sie herzlich ein!
        </Headline2>
        <EyeCatcher
          eyeCatcherClassName="absolute right-0 top-0 mb-2 ml-2"
          visible={true}
        >
          Call me now!
        </EyeCatcher>
      </div>
      <Paragraph paragraphClassName="w-3/4 text-center">
        Wir laden Sie herzlich ein, um eine Planung für Ihren Zahnersatz zu
        erstellen. Gerne beantworten wir alle Ihre Fragen!
      </Paragraph>
      <div className="flex flex-row items-center gap-4 custom-margin-b-third">
        <Button buttonClassName="mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
          Termin online vereinbaren
        </Button>
        <PhoneNumber
          phoneNumberClassName="
            text-customGreenDark
            manrope-700
            "
        >
          030 123 4567
        </PhoneNumber>
      </div>
    </div>
  );
}
