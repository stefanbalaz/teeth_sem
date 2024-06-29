import React from "react";
import { twMerge } from "tailwind-merge";

type Headline1Props = {
  children: React.ReactNode;
  headline1ClassName?: string;
};

export default function Headline1({
  children,
  headline1ClassName,
}: Headline1Props) {
  const classes = twMerge(
    "custom-h1 custom-margin-b-third",
    headline1ClassName
  );

  return <div className={classes}>{children}</div>;
}
