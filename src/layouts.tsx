import Header from "./components/Header";
import Competency from "./components/Competency";
import Hero from "./components/Hero";
import TwoColumnContent from "./components/TwoColumnContent";
import ConversionElement from "./components/ConversionElement";
import Footer from "./components/Footer";
import ThreeColumnContent from "./components/ThreeColumnContent";
import PictureBulletSection from "./components/PictureBulletSection";
import LegalContent from "./components/LegalContent";
import { LayoutProps } from "./types";

export const Layout1 = ({ config }: LayoutProps) => (
  <>
    <Header {...config?.headerProps} />
    <Hero {...config?.heroProps} />
    <Competency {...config?.competencyProps} />
    <TwoColumnContent {...config?.twoColumnContentProps} />
    <ConversionElement {...config?.conversionElementProps} />
    <ThreeColumnContent {...config?.threeColumnContentProps} />
    <PictureBulletSection {...config?.pictureBulletSectionProps1} />
    <ConversionElement {...config?.conversionElementProps} />
    <PictureBulletSection {...config?.pictureBulletSectionProps2} />
    <Footer {...config?.footerProps} />
  </>
);

export const Layout2 = ({ config }: LayoutProps) => (
  <>
    <Header {...config?.headerProps} />
    <TwoColumnContent {...config?.twoColumnContentProps} />
    <ThreeColumnContent {...config?.threeColumnContentProps} />
    <PictureBulletSection {...config?.pictureBulletSectionProps1} />
    <Hero {...config?.heroProps} />
    <Competency {...config?.competencyProps} />
    <ConversionElement {...config?.conversionElementProps} />
    <PictureBulletSection {...config?.pictureBulletSectionProps2} />
    <ConversionElement {...config?.conversionElementProps} />
    <Footer {...config?.footerProps} />
  </>
);

export const Legal = ({ config }: LayoutProps) => (
  <>
    <Header {...config?.headerProps} />
    <LegalContent {...config?.legalContentProps} />
    <Footer {...config?.footerProps} />
  </>
);
