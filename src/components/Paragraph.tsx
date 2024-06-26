import React from "react";
import { twMerge } from "tailwind-merge";

interface ParagraphProps {
  children: React.ReactNode;
  paragraphClassName?: string;
}

export default function Paragraph({
  children,
  paragraphClassName,
}: ParagraphProps) {
  const classes = twMerge("custom-p custom-margin-b-min", paragraphClassName);

  return <div className={classes}>{children}</div>;
}
