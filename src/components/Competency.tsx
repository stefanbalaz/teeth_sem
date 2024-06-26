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
      <Paragraph paragraphClassName="w-3/4 text-center">
        Was wir noch für Sie tun können? Neben dem Zahnersatz bietet unser
        kompetentes Team zahlreiche zahnmedizinische Leistungen an.
      </Paragraph>
    </div>
  );
}
