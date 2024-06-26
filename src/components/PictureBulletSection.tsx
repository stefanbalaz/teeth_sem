/* import FaviconHeadlineParagraphBlock from "./FaviconHeadlineParagraphBlock";
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
      buttonClassName: "",
    },
    {
      headlineText: "Anarella Moreno",
      paragraphText:
        "2 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      buttonClassName: "",
    },
    {
      headlineText: "Anarella Moreno",
      paragraphText:
        "2 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      buttonClassName: "",
    },
  ];

  const picture = (
    <div
      className="bg-cover bg-center h-96 md:h-auto"
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
 */

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
      buttonClassName: "",
    },
    {
      headlineText: "Anarella Moreno",
      paragraphText:
        "2 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      buttonClassName: "",
    },
    {
      headlineText: "Anarella Moreno",
      paragraphText:
        "2 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      buttonClassName: "",
    },
  ];

  const picture = (
    <div
      className="bg-cover bg-center h-48 sm:h-72 md:h-96 lg:h-auto w-full"
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
