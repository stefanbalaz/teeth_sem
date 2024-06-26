import Headline2 from "./Headline2";
import Headline3 from "./Headline3";
import Paragraph from "./Paragraph";
import Button from "./Button";
import PhoneNumber from "./PhoneNumber";
import EyeCatcher from "./EyeCatcher";
import backgroundImage from "../assets/praxis.png";

export default function Hero() {
  return (
    <div
      className="
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
          visible={true}
        >
          Call me now!
        </EyeCatcher>
        <Headline3>Zahn auf der Bühne verloren?</Headline3>
        <Headline2>
          Unser Team kümmert sich noch heute um einen Ersatz!
        </Headline2>
        <Paragraph>
          Dieser Textblock wäre optional, eigentlich genauso wie die beiden
          Überschriften oben. Man muss schauen, dass es nicht zu voll wird.
        </Paragraph>
        <div className="flex flex-row items-center gap-4">
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
    </div>
  );
}
