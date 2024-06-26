import React from "react";
import { twMerge } from "tailwind-merge";

interface Headline2Props {
  children: React.ReactNode;
  headline2ClassName?: string;
}

export default function Headline2({
  children,
  headline2ClassName,
}: Headline2Props) {
  const classes = twMerge(
    "custom-h2 custom-margin-b-third",
    headline2ClassName
  );

  return <div className={classes}>{children}</div>;
}
