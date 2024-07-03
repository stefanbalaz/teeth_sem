import { twMerge } from "tailwind-merge";
import { PhoneNumberProps } from "../types";

export default function PhoneNumber({
  children,
  phoneNumberClassName,
}: PhoneNumberProps) {
  const classes = twMerge(
    "text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl",
    phoneNumberClassName
  );

  return <div className={classes}>{children}</div>;
}
