import ContentButtonBlock from "./ContentButtonBlock";
import Headline1 from "./Headline1";
import MoreInfoLink from "./MoreInfoLink";

export default function TwoColumnContent() {
  const contentButtonBlockArray = [
    {
      headlineText: "Risiken unversorgter Zahnlücken 1",
      paragraphText:
        "1 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      buttonClassName: "",
      buttonText: "Mehr lesen 1",
      buttonLink: "#link1",
    },
    {
      headlineText: "Risiken unversorgter Zahnlücken 2",
      paragraphText:
        "2 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      buttonClassName: "",
      buttonText: "Mehr lesen 2",
      buttonLink: "#link2",
    },
    {
      headlineText: "Risiken unversorgter Zahnlücken 3",
      paragraphText:
        "3 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      buttonClassName: "",
      buttonText: "Mehr lesen 3",
      buttonLink: "#link3",
    },
    {
      headlineText: "Risiken unversorgter Zahnlücken 4",
      paragraphText:
        "4 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      buttonClassName: "",
      buttonText: "Mehr lesen 4",
      buttonLink: "#link4",
    },
  ];

  return (
    <div className="custom-margin-b">
      <Headline1 headline1ClassName="w-3/4 mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-14">
        Warum Zahnersatz und warum in unserer Praxis
      </Headline1>
      <ContentButtonBlock
        contentButtonBlockArray={contentButtonBlockArray}
        contentButtonBlockClassName=""
      />
      <MoreInfoLink
        moreInfoText="Mehr zum Zahnersatz in unserer Praxis"
        moreInfoLink="https://google.com"
        moreInfoClassName="mt-8 mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0"
        visible={true}
      />
    </div>
  );
}
