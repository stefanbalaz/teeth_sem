import Logo from "./Logo";

interface FooterProps {
  link1Text?: string;
  link2Text?: string;
  link1Url?: string;
  link2Url?: string;
  eMail?: string;
  provider?: string;
}
export default function Footer({
  link1Text,
  link2Text,
  link1Url,
  link2Url,
  eMail,
  provider,
}: FooterProps) {
  return (
    <footer className="flex flex-col items-center lg:grid lg:grid-cols-3 gap-4 lg:place-items-center custom-margin-b">
      <Logo logoClassName="justify-self-start h-6 sm:h-6 md:h-8 lg:h-10 xl:h-12 2xl:h-14" />
      <div className="lg:justify-self-center flex flex-col md:flex-row text-center gap-4 manrope-500">
        <a href={link1Url} className="">
          {link1Text}
        </a>
        <a href={link2Url} className="">
          {link2Text}
        </a>
        <a href={`mailto:${eMail}`} className="">
          {eMail}
        </a>
      </div>
      <div className="lg:justify-self-end">
        © {new Date().getFullYear()} {provider}
      </div>
    </footer>
  );
}
