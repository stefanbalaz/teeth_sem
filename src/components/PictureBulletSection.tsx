import FaviconHeadlineParagraphBlock from "./FaviconHeadlineParagraphBlock";

interface FaviconHeadlineParagraphBlockArrayProps {
  headline3Text: string;
  paragraphText: string;
}

interface PictureBulletSectionProps {
  pictureOnRight: boolean;
  pictureSrc: string;
  pictureAlt: string;
  faviconHeadlineParagraphBlockArray: FaviconHeadlineParagraphBlockArrayProps[];
}

export default function PictureBulletSection({
  pictureOnRight,
  pictureSrc,
  pictureAlt,
  faviconHeadlineParagraphBlockArray,
}: PictureBulletSectionProps) {
  const picture = (
    <div
      className="bg-cover bg-center h-48 sm:h-72 md:h-96 lg:h-auto w-full"
      style={{ backgroundImage: `url(${pictureSrc})` }}
      aria-label={pictureAlt}
    >
      <span className="sr-only">{pictureAlt}</span>
    </div>
  );

  const text = (
    <FaviconHeadlineParagraphBlock
      faviconHeadlineParagraphBlockArray={faviconHeadlineParagraphBlockArray}
    />
  );

  return (
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
  );
}
