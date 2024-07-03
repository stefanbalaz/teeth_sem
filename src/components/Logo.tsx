import ReactLogo from "../assets/Zahnarzt-Zaehnsationell-Zehlendorf-logo.svg?react";
import { twMerge } from "tailwind-merge";
import { LogoProps } from "../types";

export default function Logo({ logoClassName }: LogoProps) {
  const classes = twMerge(
    "h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 2xl:h-20",
    logoClassName
  );
  return <ReactLogo className={classes} />;
}
