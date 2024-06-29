export interface NavigationItem {
  label: string;
  url: string;
}

export interface HeaderProps {
  navigationList: NavigationItem[];
}

export interface FaviconHeadlineParagraphBlock {
  headline3Text: string;
  paragraphText: string;
  buttonClassName?: string;
}

export interface PictureBulletSectionProps {
  pictureOnRight: boolean;
  pictureSrc: string;
  pictureAlt: string;
  faviconHeadlineParagraphBlockArray: FaviconHeadlineParagraphBlock[];
}

export interface Skill {
  label: string;
  link: string;
}

export interface SkillsProps {
  skills: Skill[];
}

export interface CompetencyProps {
  headline1Text: string;
  paragraphText: string;
  skills: Skill[];
}

export interface HeroProps {
  backgroundImage: string;
  eyeCatcherVisible: boolean;
  eyeCatcherText?: string;
  headline2Text?: string;
  headline3Text?: string;
  paragraphText?: string;
  buttonLink?: string;
  buttonText?: string;
  phoneNumber?: string;
}

export interface ContentButtonBlock {
  headlineText: string;
  paragraphText: string;
  buttonClassName?: string | undefined;
  buttonText?: string;
  buttonLink?: string;
}

export interface TwoColumnContentProps {
  contentButtonBlockArray: ContentButtonBlock[];
  headline1Text: string;
  moreInfoText: string;
  moreInfoLink: string;
  moreInfoVisible: boolean;
}

export interface ConversionElementProps {
  headline2Text: string;
  paragraphText?: string;
  buttonLink?: string;
  buttonText?: string;
  phoneNumber?: string;
  eyeCatcherVisible: boolean;
  eyeCatcherText?: string;
}

export interface ContentButtonBlockArrayProps {
  headlineText: string;
  headline3ClassName?: string;
  paragraphText: string;
  buttonClassName?: string | undefined;
  buttonText?: string;
  buttonLink?: string;
}

export interface ContentButtonBlockProps {
  contentButtonBlockArray: ContentButtonBlockArrayProps[];
  contentButtonBlockClassName?: string;
}

export interface HeadlineParagraph {
  headlineText: string;
  paragraphText: string;
}

export interface ThreeColumnContentProps {
  headline1Text: string;
  headline2Text?: string;
  headlineParagraphArray: HeadlineParagraph[];
}

export interface FooterProps {
  link1Text: string;
  link2Text: string;
  link1Url: string;
  link2Url: string;
  eMail: string;
  provider: string;
}

export interface ConfigType {
  layout: string;
  headerProps: HeaderProps;
  heroProps: HeroProps;
  competencyProps: CompetencyProps;
  twoColumnContentProps: TwoColumnContentProps;
  conversionElementProps: ConversionElementProps;
  threeColumnContentProps: ThreeColumnContentProps;
  pictureBulletSectionProps1: PictureBulletSectionProps;
  pictureBulletSectionProps2: PictureBulletSectionProps;
  footerProps: FooterProps;
}

export interface FaviconHeadlineParagraphElementProps {
  headline3Text: string;
  headline3ClassName?: string;
  paragraphText: string;
  paragraphClassName?: string;
}
