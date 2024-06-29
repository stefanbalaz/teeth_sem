import sectionImage from "../assets/woman.png";
import heroBackgroundImagePraxis from "../assets/praxis.png";

interface ConfigType {
  layout: string;
  headerProps: any;
  competencyProps: any;
  heroProps: any;
  twoColumnContentProps: any;
  conversionElementProps: any;
  footerProps: any;
  threeColumnContentProps: any;
  pictureBulletSectionProps1: any;
  pictureBulletSectionProps2: any;
}
export const landingPageConfig: Record<string, ConfigType> = {
  default: {
    layout: "Layout1",
    headerProps: {
      navigationList: [
        { label: "Link 1", url: "https://google.com" },
        { label: "Link 2", url: "#" },
        { label: "Link 3", url: "#" },
        { label: "Link 4", url: "#" },
      ],
    },
    pictureBulletSectionProps1: {
      pictureOnRight: true,
      pictureSrc: sectionImage,
      pictureAlt: "Woman with teeth",
      faviconHeadlineParagraphBlockArray: [
        {
          headline3Text: "DEFAULT PICTURE RIGHT",
          paragraphText:
            "1 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
          buttonClassName: "",
        },
        {
          headline3Text: "Anarella Moreno",
          paragraphText:
            "2 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
          buttonClassName: "",
        },
        {
          headline3Text: "Anarella Moreno",
          paragraphText:
            "2 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
          buttonClassName: "",
        },
      ],
    },
    pictureBulletSectionProps2: {
      pictureOnRight: false,
      pictureSrc: sectionImage,
      pictureAlt: "Woman with teeth",
      faviconHeadlineParagraphBlockArray: [
        {
          headline3Text: "DEFAULT PICTURE LEFT",
          paragraphText:
            "1 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
          buttonClassName: "",
        },
        {
          headline3Text: "Anarella Moreno",
          paragraphText:
            "2 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
          buttonClassName: "",
        },
        {
          headline3Text: "Anarella Moreno",
          paragraphText:
            "2 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
          buttonClassName: "",
        },
      ],
    },
    competencyProps: {
      headline1Text: "Wir bieten vielfältige Leistungen",
      paragraphText:
        "Was wir noch für Sie tun können? Neben dem Zahnersatz bietet unser kompetentes Team zahlreiche zahnmedizinische Leistungen an.",
      skills: [
        {
          label: "Ästhetische Zahnheilkunde",
          link: "https://example.com",
        },
        {
          label: "Implantate",
          link: "https://example.com",
        },
        {
          label: "Zahnersatz",
          link: "https://example.com",
        },

        {
          label: "Endodontie",
          link: "https://example.com",
        },
        {
          label: "Zahnheilkunde",
          link: "https://example.com",
        },
        {
          label: "Funktionsanalyse",
          link: "https://example.com",
        },
        {
          label: "Zahnfüllung",
          link: "https://example.com",
        },
        {
          label: "Kinderzahnmedizin",
          link: "https://example.com",
        },
        {
          label: "Zähneknirschen",
          link: "https://example.com",
        },
      ],
    },
    heroProps: {
      backgroundImage: heroBackgroundImagePraxis,
      eyeCatcherVisible: true,
      eyeCatcherText: "Call me nowww!",
      headline2Text: "Unser Team kümmert sich noch heute um einen Ersatz!",
      headline3Text: "Zahn auf der Bühne verloren?",
      paragraphText:
        "Dieser Textblock wäre optional, eigentlich genauso wie die beiden Überschriften oben. Man muss schauen, dass es nicht zu voll wird.",
      buttonLink: "https://www.stefanbalaz.com",
      buttonText: "Termin online vereinbaren",
      phoneNumber: "030 1334 5678",
    },
    twoColumnContentProps: {
      contentButtonBlockArray: [
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
      ],
      headline1Text: "Warum Zahnersatz und warum in unserer Praxis",
      moreInfoText: "Mehr zum Zahnersatz in unserer Praxis",
      moreInfoLink: "https://example.com",
      moreInfoVisible: true,
    },
    conversionElementProps: {
      headline2Text: "Wir laden Sie herzlich ein!",
      paragraphText:
        "1 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      buttonLink: "https://example.com",
      buttonText: "Termin online vereinbaren",
      phoneNumber: "030 1334 5678",
      eyeCatcherVisible: true,
      eyeCatcherText: "Call ME now and do not hesistate!",
    },
    threeColumnContentProps: {
      headline1Text: "Zitate von Jameda und Google",
      headline2Text:
        "Wie zufrieden sind unsere Kunden mit Zahnersatz und Stefan",
      headlineParagraphArray: [
        {
          headlineText: "Stefan Balazzz",
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
      ],
    },
    footerProps: {
      link1Text: "Impressum",
      link2Text: "Zähnsationell",
      link1Url: "https://example.com",
      link2Url: "https://example.com",
      eMail: "info@zaehnsationell.com",
      provider: "Zähnsationellll",
    },
  },

  section1: {
    layout: "Layout2",
    headerProps: {
      navigationList: [
        { label: "Link 1", url: "https://google.com" },
        { label: "Link 2", url: "#" },
        { label: "Link 3", url: "#" },
        { label: "Link 4", url: "#" },
      ],
    },
    pictureBulletSectionProps1: {
      pictureOnRight: true,
      pictureSrc: sectionImage,
      pictureAlt: "Woman with teeth",
      faviconHeadlineParagraphBlockArray: [
        {
          headline3Text: "SECTION 1 PICTURE RIGHT",
          paragraphText:
            "1 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
          buttonClassName: "",
        },
        {
          headline3Text: "Anarella Moreno",
          paragraphText:
            "2 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
          buttonClassName: "",
        },
        {
          headline3Text: "Anarella Moreno",
          paragraphText:
            "2 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
          buttonClassName: "",
        },
      ],
    },
    pictureBulletSectionProps2: {
      pictureOnRight: false,
      pictureSrc: sectionImage,
      pictureAlt: "Woman with teeth",
      faviconHeadlineParagraphBlockArray: [
        {
          headline3Text: "SECTION 1 PICTURE LEFT",
          paragraphText:
            "1 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
          buttonClassName: "",
        },
        {
          headline3Text: "Anarella Moreno",
          paragraphText:
            "2 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
          buttonClassName: "",
        },
        {
          headline3Text: "Anarella Moreno",
          paragraphText:
            "2 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
          buttonClassName: "",
        },
      ],
    },
    competencyProps: {
      headline1Text: "Wir bieten vielfältige Leistungen SECTION 1",
      paragraphText:
        "Was wir noch für Sie tun können? Neben dem Zahnersatz bietet unser kompetentes Team zahlreiche zahnmedizinische Leistungen an.",
      skills: [
        {
          label: "Ästhetische Zahnheilkunde",
          link: "https://example.com",
        },
        {
          label: "Implantate",
          link: "https://example.com",
        },
        {
          label: "Zahnersatz",
          link: "https://example.com",
        },

        {
          label: "Endodontie",
          link: "https://example.com",
        },
        {
          label: "Zahnheilkunde",
          link: "https://example.com",
        },
        {
          label: "Funktionsanalyse",
          link: "https://example.com",
        },
        {
          label: "Zahnfüllung",
          link: "https://example.com",
        },
        {
          label: "Kinderzahnmedizin",
          link: "https://example.com",
        },
        {
          label: "Zähneknirschen",
          link: "https://example.com",
        },
      ],
    },
    heroProps: {
      backgroundImage: heroBackgroundImagePraxis,
      eyeCatcherVisible: true,
      eyeCatcherText: "SECTION 1!",
      headline2Text: "Unser Team kümmert sich noch heute um einen Ersatz!",
      headline3Text: "Zahn auf der Bühne verloren?",
      paragraphText:
        "Dieser Textblock wäre optional, eigentlich genauso wie die beiden Überschriften oben. Man muss schauen, dass es nicht zu voll wird.",
      buttonLink: "https://www.stefanbalaz.com",
      buttonText: "Termin online vereinbaren",
      phoneNumber: "030 1334 5678",
    },
    twoColumnContentProps: {
      contentButtonBlockArray: [
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
      ],
      headline1Text: "Warum Zahnersatz und warum in unserer Praxis",
      moreInfoText: "Mehr zum Zahnersatz in unserer Praxis",
      moreInfoLink: "https://example.com",
      moreInfoVisible: true,
    },
    conversionElementProps: {
      headline2Text: "Wir laden Sie herzlich ein!",
      paragraphText:
        "1 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      buttonLink: "https://example.com",
      buttonText: "Termin online vereinbaren",
      phoneNumber: "030 1334 5678",
      eyeCatcherVisible: true,
      eyeCatcherText: "Call ME now and do not hesistate!",
    },
    threeColumnContentProps: {
      headline1Text: "Zitate von Jameda und Google",
      headline2Text:
        "Wie zufrieden sind unsere Kunden mit Zahnersatz und Stefan",
      headlineParagraphArray: [
        {
          headlineText: "Stefan Balazzz",
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
      ],
    },
    footerProps: {
      link1Text: "Impressum",
      link2Text: "Zähnsationell",
      link1Url: "https://example.com",
      link2Url: "https://example.com",
      eMail: "info@zaehnsationell.com",
      provider: "Zähnsationellll",
    },
  },
};
