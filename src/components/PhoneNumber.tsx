import React from "react";
import { twMerge } from "tailwind-merge";

interface PhoneNumberProps {
  children: React.ReactNode;
  phoneNumberClassName?: string;
}

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
