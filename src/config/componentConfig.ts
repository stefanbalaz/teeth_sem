import dentalCheckup from "../assets/dental-checkup.jpg";
import youngWomanFingers from "../assets/young-woman-fingers.jpg";
import heroBackgroundImagePraxis from "../assets/dental-practice.png";

import { ConfigType } from "../types";

export const landingPageConfig: Record<string, ConfigType> = {
  default: {
    layout: "Layout1",
    headerProps: {
      navigationList: [
        { id: "1", label: "Link 1", url: "https://google.com" },
        { id: "2", label: "Link 2", url: "#" },
        { id: "3", label: "Link 3", url: "#" },
        { id: "4", label: "Link 4", url: "#" },
      ],
    },
    heroProps: {
      backgroundImage: heroBackgroundImagePraxis,
      eyeCatcherVisible: true,
      eyeCatcherText: "DEFAULT",
      headline2Text: "Unser Team kümmert sich noch heute um einen Ersatz!",
      headline3Text: "Zahn auf der Bühne verloren?",
      paragraphText:
        "Dieser Textblock wäre optional, eigentlich genauso wie die beiden Überschriften oben. Man muss schauen, dass es nicht zu voll wird.",
      buttonLink: "https://www.stefanbalaz.com",
      buttonText: "Termin online vereinbaren",
      phoneNumber: "030 1334 5678",
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
    twoColumnContentProps: {
      contentButtonBlockArray: [
        {
          headline3Text: "Risiken unversorgter Zahnlücken 1",
          paragraphText:
            "1 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
          buttonClassName: "",
          buttonText: "Mehr lesen 1",
          buttonLink: "#link1",
        },
        {
          headline3Text: "Risiken unversorgter Zahnlücken 2",
          paragraphText:
            "2 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
          buttonClassName: "",
          buttonText: "Mehr lesen 2",
          buttonLink: "#link2",
        },
        {
          headline3Text: "Risiken unversorgter Zahnlücken 3",
          paragraphText:
            "3 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
          buttonClassName: "",
          buttonText: "Mehr lesen 3",
          buttonLink: "#link3",
        },
        {
          headline3Text: "Risiken unversorgter Zahnlücken 4",
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
          headline3Text: "Stefan Balazzz",
          paragraphText:
            "1 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
        },
        {
          headline3Text: "Anarella Moreno",
          paragraphText:
            "2 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
        },
        {
          headline3Text: "Braian Caccavillani",
          paragraphText:
            "3 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
        },
      ],
    },
    pictureBulletSectionProps1: {
      pictureOnRight: true,
      pictureSrc: youngWomanFingers,
      pictureAlt: "Woman with teeth",
      faviconHeadlineParagraphBlockArray: [
        {
          headline3Text: "DEFAULT PICTURE RIGHT",
          paragraphText:
            "1 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
          headline3ClassName: "",
          paragraphClassName: "",
        },
        {
          headline3Text: "Anarella Moreno",
          paragraphText:
            "2 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
          headline3ClassName: "",
          paragraphClassName: "",
        },
        {
          headline3Text: "Anarella Moreno",
          paragraphText:
            "2 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
          headline3ClassName: "",
          paragraphClassName: "",
        },
      ],
    },
    pictureBulletSectionProps2: {
      pictureOnRight: false,
      pictureSrc: dentalCheckup,
      pictureAlt: "Woman with teeth",
      faviconHeadlineParagraphBlockArray: [
        {
          headline3Text: "DEFAULT PICTURE LEFT",
          paragraphText:
            "1 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
          headline3ClassName: "",
          paragraphClassName: "",
        },
        {
          headline3Text: "Anarella Moreno",
          paragraphText:
            "2 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
          headline3ClassName: "",
          paragraphClassName: "",
        },
        {
          headline3Text: "Anarella Moreno",
          paragraphText:
            "2 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
          headline3ClassName: "",
          paragraphClassName: "",
        },
      ],
    },
    footerProps: {
      link1Text: "Impressum",
      link1Url: "/impressum",
      link2Text: "Zähnsationell",
      link2Url: "https://example.com",
      eMail: "info@zaehnsationell.com",
      provider: "Zähnsationellll",
    },
  },

  impressum: {
    layout: "Impressum",
    headerProps: {
      navigationList: [
        { id: "1", label: "Link 1", url: "https://google.com" },
        { id: "2", label: "Link 2", url: "#" },
        { id: "3", label: "Link 3", url: "#" },
        { id: "4", label: "Link 4", url: "#" },
      ],
    },
    legalProps: {},
    footerProps: {
      link1Text: "Impressum",
      link1Url: "/impressum",
      link2Text: "Zähnsationell",
      link2Url: "https://example.com",
      eMail: "info@zaehnsationell.com",
      provider: "Zähnsationellll",
    },
  },
};
