import { twMerge } from "tailwind-merge";
import { ParagraphProps } from "../types";

export default function Paragraph({
  children,
  paragraphClassName,
}: ParagraphProps) {
  const classes = twMerge("custom-p custom-margin-b-min", paragraphClassName);

  return <div className={classes}>{children}</div>;
}
