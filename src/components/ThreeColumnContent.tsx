import HeadlineParagraphBlock from "./HeadlineParagraphBlock";
import Headline1 from "./Headline1";
import Headline2 from "./Headline2";

export default function ThreeColumnContent() {
  const headlineParagraphArray = [
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
      headlineText: "Braian Caccavillani",
      paragraphText:
        "3 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    },
  ];

  return (
    <div className="custom-margin-b">
      <Headline2 headline2ClassName="w-3/4 mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5">
        Zitate von Jameda und Google
      </Headline2>
      <Headline1 headline1ClassName="w-3/4 mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-14">
        Wie zufrieden sind unsere Kunden mit Zahnersatz
      </Headline1>
      <HeadlineParagraphBlock
        headlineParagraphArray={headlineParagraphArray}
        contentButtonBlockClassName="custom-margin-b-half"
      />
    </div>
  );
}
