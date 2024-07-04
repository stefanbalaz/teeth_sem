export interface LayoutProps {
  config?: ConfigType;
}

export interface NavigationItem {
  id?: string;
  label?: string;
  url?: string;
}

export interface NavigationProps {
  navigationList?: NavigationItem[];
}

export interface HeaderProps {
  navigationList?: NavigationItem[];
}

export interface FaviconHeadlineParagraphBlock {
  headline3Text?: string;
  paragraphText?: string;
  buttonClassName?: string;
}

export interface Skill {
  label?: string;
  link?: string;
}

export interface SkillsProps {
  skills?: Skill[];
}

export interface CompetencyProps {
  headline1Text?: string;
  paragraphText?: string;
  skills?: Skill[];
}

export interface HeroProps {
  backgroundImage?: string;
  eyeCatcherVisible?: boolean;
  eyeCatcherText?: string;
  headline2Text?: string;
  headline3Text?: string;
  paragraphText?: string;
  buttonLink?: string;
  buttonText?: string;
  phoneNumber?: string;
}

export interface ContentButtonBlock {
  headline3Text?: string;
  paragraphText?: string;
  buttonClassName?: string | undefined;
  buttonText?: string;
  buttonLink?: string;
}

export interface TwoColumnContentProps {
  contentButtonBlockArray?: ContentButtonBlock[];
  headline1Text?: string;
  moreInfoText?: string;
  moreInfoLink?: string;
  moreInfoVisible?: boolean;
}

export interface ConversionElementProps {
  headline2Text?: string;
  paragraphText?: string;
  buttonLink?: string;
  buttonText?: string;
  phoneNumber?: string;
  eyeCatcherVisible?: boolean;
  eyeCatcherText?: string;
}

export interface ContentButtonBlockArrayProps {
  headline3Text?: string;
  headline3ClassName?: string;
  paragraphText?: string;
  buttonClassName?: string | undefined;
  buttonText?: string;
  buttonLink?: string;
}

export interface ContentButtonBlockProps {
  contentButtonBlockArray?: ContentButtonBlockArrayProps[];
  contentButtonBlockClassName?: string;
}

export interface HeadlineParagraphBlockProps {
  headlineParagraphArray?: HeadlineParagraphArrayProps[];
  contentButtonBlockClassName?: string;
}

export interface HeadlineParagraphArrayProps {
  headline3Text?: string;
  headline3ClassName?: string;
  paragraphText?: string;
}

export interface HeadlineParagraph {
  headline3Text?: string;
  paragraphText?: string;
}

export interface ThreeColumnContentProps {
  headline1Text?: string | undefined;
  headline2Text?: string | undefined;
  headlineParagraphArray?: HeadlineParagraph[];
}

export interface FaviconHeadlineParagraphBlockArrayProps {
  headline3Text?: string;
  headline3ClassName?: string;
  paragraphText?: string;
  paragraphClassName?: string;
}

export interface PictureBulletSectionProps {
  pictureOnRight?: boolean;
  pictureSrc?: string;
  pictureAlt?: string;
  faviconHeadlineParagraphBlockArray?: FaviconHeadlineParagraphBlockArrayProps[];
}

export interface FaviconHeadlineParagraphBlockProps {
  faviconHeadlineParagraphBlockArray?: FaviconHeadlineParagraphBlockArrayProps[];
  faviconHeadlineParagraphBlockClassName?: string;
}

export interface FooterProps {
  link1Text?: string;
  link2Text?: string;
  link1Url?: string;
  link2Url?: string;
  eMail?: string;
  provider?: string;
}

export interface ConfigType {
  key?: string;
  layout?: string;
  headerProps?: HeaderProps;
  heroProps?: HeroProps;
  competencyProps?: CompetencyProps;
  twoColumnContentProps?: TwoColumnContentProps;
  conversionElementProps?: ConversionElementProps;
  threeColumnContentProps?: ThreeColumnContentProps;
  pictureBulletSectionProps1?: PictureBulletSectionProps;
  pictureBulletSectionProps2?: PictureBulletSectionProps;
  legalContentProps?: LegalContentProps;
  footerProps?: FooterProps;
}

export interface ContentfulData {
  fields: {
    json?: {
      [key: string]: ConfigType;
    };
    topic?: string;
  };
  /*   sys: {
    id: string;
    type: string;
  }; */
}

export interface LegalContentProps {}

export interface FaviconHeadlineParagraphElementProps {
  headline3Text?: string;
  headline3ClassName?: string;
  paragraphText?: string;
  paragraphClassName?: string;
}

export interface ButtonProps {
  children?: React.ReactNode;
  buttonLink?: string;
  buttonClassName?: string;
}

export interface EyeCatcherProps {
  children?: React.ReactNode;
  eyeCatcherClassName?: string;
  eyeCatcherVisible?: boolean;
}

export type Headline1Props = {
  children?: React.ReactNode;
  headline1ClassName?: string;
};

export interface Headline2Props {
  children?: React.ReactNode;
  headline2ClassName?: string;
}

export interface Headline3Props {
  children?: React.ReactNode;
  headline3ClassName?: string;
}

export interface HeadlineContentButtonProps {
  headline3Text?: string;
  headline3ClassName?: string;
  paragraphText?: string;
  buttonClassName?: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface HeadlineParagraphProps {
  headline3Text?: string;
  headline3ClassName?: string;
  paragraphText?: string;
}

export interface LogoProps {
  logoClassName?: string;
}

export interface MoreInfoLinkProps {
  moreInfoText?: string;
  moreInfoLink?: string;
  moreInfoVisible?: boolean;
  moreInfoClassName?: string;
}

export interface ParagraphProps {
  children?: React.ReactNode;
  paragraphClassName?: string;
}

export interface PhoneNumberProps {
  children?: React.ReactNode;
  phoneNumberClassName?: string;
}

export interface LegalProps {
  layout?: string;
  headerProps?: HeaderProps;
  legalContentProps?: LegalContentProps;
}

export interface LegalContentProps {
  impressum?: ImpressumContent;
  dataPrivacy?: DataPrivacyContent;
}

export interface ImpressumContent {
  intro?: {
    headline1Text?: string;
  };
  sections?: ImpressumSection[];
}

export interface ImpressumSection {
  headline3Text?: string;
  paragraphText?: string;
}

export interface DataPrivacyContent {
  intro?: {
    headline1Text?: string;
    paragraphText?: string;
  };
  sections?: DataPrivacySection[];
}

export interface DataPrivacySection {
  headline1Text?: string;
  content?: DataPrivacyContent[];
}

export interface DataPrivacyContent {
  headline2Text?: string;
  paragraphText?: string | string[];
  subContent?: DataPrivacySubContent[];
}

export interface DataPrivacyIntro {
  headline1Text?: string;
  paragraphText?: string;
}

export interface DataPrivacySubContent {
  headline3Text?: string;
  paragraphText?: string;
}

export interface DataPrivacy {
  intro: DataPrivacyIntro;
  sections: DataPrivacySection[];
}
