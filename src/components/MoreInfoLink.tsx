import { twMerge } from "tailwind-merge";
import { MoreInfoLinkProps } from "../types";

export default function MoreInfoLink({
  moreInfoText,
  moreInfoLink,
  moreInfoVisible,
  moreInfoClassName,
}: MoreInfoLinkProps) {
  if (!moreInfoVisible) return null;

  const classes = twMerge(
    "custom-margin-b-min text-customGreenDark text-decoration-line: underline",
    moreInfoClassName
  );

  return (
    <div className={classes}>
      <a href={moreInfoLink} target="_blank" rel="noreferrer">
        {moreInfoText}
      </a>
    </div>
  );
}
