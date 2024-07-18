import Logo from "./Logo";
import { FooterProps } from "../types";
import { showConsentModal } from "./Cookie";

export default function Footer({
  link1Text,
  link2Text,
  link1Url,
  link2Url,
  eMail,
  provider,
}: FooterProps) {
  return (
    <footer className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center gap-4 custom-margin-b">
      <Logo logoClassName="justify-self-start h-6 sm:h-6 md:h-8 lg:h-10 xl:h-12 2xl:h-14" />
      <div className="lg:justify-self-center justify-center  flex flex-col flex-wrap lg:flex-row  text-center gap-4 manrope-500">
        <a href={link1Url} className="">
          {link1Text}
        </a>
        <a href={link2Url} className="">
          {link2Text}
        </a>{" "}
        <a
          href="#"
          style={{ whiteSpace: "nowrap" }}
          onClick={() => {
            showConsentModal();
          }}
        >
          Cookie Einstellungen
        </a>
        <a href={`mailto:${eMail}`} className="">
          {eMail}
        </a>
      </div>
      <div className="lg:justify-self-end" style={{ whiteSpace: "nowrap" }}>
        © {new Date().getFullYear()} {provider}
      </div>
    </footer>
  );
}
