import { twMerge } from "tailwind-merge";
import { EyeCatcherProps } from "../types";

export default function EyeCatcher({
  children,
  eyeCatcherClassName,
  eyeCatcherVisible,
}: EyeCatcherProps) {
  if (!eyeCatcherVisible) return null;
  const classes = twMerge(
    "p-1.5 md:p3 manrope-700 text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-red-800 text-white rounded-md",
    eyeCatcherClassName
  );

  return <div className={classes}>{children}</div>;
}
