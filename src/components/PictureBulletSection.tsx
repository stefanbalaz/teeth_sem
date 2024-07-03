import FaviconHeadlineParagraphBlock from "./FaviconHeadlineParagraphBlock";
import { PictureBulletSectionProps } from "../types";

export default function PictureBulletSection({
  pictureOnRight,
  pictureSrc,
  pictureAlt,
  faviconHeadlineParagraphBlockArray,
}: PictureBulletSectionProps) {
  const picture = pictureSrc ? (
    <div
      className="bg-cover bg-center h-48 sm:h-72 md:h-96 lg:h-auto w-full rounded-md"
      style={{ backgroundImage: `url(${pictureSrc})` }}
      aria-label={pictureAlt}
    >
      <span className="sr-only">{pictureAlt}</span>
    </div>
  ) : null;

  const text = faviconHeadlineParagraphBlockArray ? (
    <FaviconHeadlineParagraphBlock
      faviconHeadlineParagraphBlockArray={faviconHeadlineParagraphBlockArray}
    />
  ) : null;

  if (!text || !picture) {
    return null;
  }

  return (
    <>
      {text && picture && (
        <div className="custom-margin-b grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-12">
          {pictureOnRight ? (
            <>
              {text}
              {picture}
            </>
          ) : (
            <>
              {picture}
              {text}
            </>
          )}
        </div>
      )}
    </>
  );
}
