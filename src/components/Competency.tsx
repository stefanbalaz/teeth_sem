import Skills from "./Skills";
import Headline1 from "./Headline1";
import Paragraph from "./Paragraph";

export default function Competency() {
  return (
    <div
      className="
        flex flex-col items-center
        custom-margin-b
        "
    >
      <Skills />
      <Headline1 headline1ClassName="w-3/4 text-center">
        Wir bieten vielfältige Leistungen
      </Headline1>
      <Paragraph paragraphClassName="w-3/4 text-center mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
        Was wir noch für Sie tun können? Neben dem Zahnersatz bietet unser
        kompetentes Team zahlreiche zahnmedizinische Leistungen an.
      </Paragraph>
    </div>
  );
}
