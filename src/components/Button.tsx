import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  buttonLink?: string;
  buttonClassName?: string;
}

export default function Button({
  children,
  buttonClassName,
  buttonLink,
}: ButtonProps) {
  const classes = twMerge(
    "bg-customGreenDark text-white py-2 px-4 rounded-full custom-margin-b-third",
    buttonClassName
  );

  return (
    <a href={buttonLink} className="inline-block">
      <button className={classes}>{children}</button>
    </a>
  );
}
