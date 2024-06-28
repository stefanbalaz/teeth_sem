import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center lg:grid lg:grid-cols-3 gap-4 lg:place-items-center custom-margin-b">
      <Logo logoClassName="justify-self-start h-6 sm:h-6 md:h-8 lg:h-10 xl:h-12 2xl:h-14" />
      <div className="lg:justify-self-center flex flex-col md:flex-row text-center gap-4 manrope-500">
        <a href="/impressum" className="">
          Impressum
        </a>
        <a href="www.zaehnsationell.com" className="">
          Zähnsationell
        </a>
        <a href="mailto:info@zaehnsationell.com" className="">
          info@zaehnsationell.com
        </a>
      </div>
      <div className="lg:justify-self-end">
        © {new Date().getFullYear()} Zähnsationell
      </div>
    </footer>
  );
}
