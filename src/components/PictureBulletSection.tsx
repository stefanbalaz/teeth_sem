import React from "react";
import FaviconHeadlineParagraphBlock from "./FaviconHeadlineParagraphBlock";
import sectionImage from "../assets/woman.png";

interface PictureBulletSectionProps {
  pictureOnRight: boolean;
}

export default function PictureBulletSection({
  pictureOnRight,
}: PictureBulletSectionProps) {
  const faviconHeadlineParagraphBlockArray = [
    {
      headlineText: "Stefan Balaz",
      paragraphText:
        "1 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    },
    {
      headlineText: "Anarella Moreno",
      paragraphText:
        "2 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    },
    {
      headlineText: "Anarella Moreno",
      paragraphText:
        "2 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    },
  ];

  const picture = (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${sectionImage})` }}
    />
  );
  const text = (
    <FaviconHeadlineParagraphBlock
      faviconHeadlineParagraphBlockArray={faviconHeadlineParagraphBlockArray}
      contentButtonBlockClassName=""
    />
  );

  console.log("pictureOnRight", pictureOnRight);

  return (
    <div className="custom-margin-b grid grid-cols-1 md:grid-cols-2 gap-8">
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
