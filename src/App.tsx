/// <reference types="vite-plugin-svgr/client" />
import "./App.css";
import Header from "./components/Header";
import Competency from "./components/Competency";
import Hero from "./components/Hero";
import TwoColumnContent from "./components/TwoColumnContent";
import ConversionElement from "./components/ConversionElement";
import Footer from "./components/Footer";
import ThreeColumnContent from "./components/ThreeColumnContent";
import PictureBulletSection from "./components/PictureBulletSection";
import sectionImage from "./assets/woman.png";

function App() {
  return (
    <div
      className="
        mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10
        mt-1 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-5
        mb-2 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10
        text-customBlack
        manrope-300
        text-base sm:text-lg 
        "
    >
      <Header />
      <Hero />
      <Competency />
      <TwoColumnContent />
      <ConversionElement />
      <ThreeColumnContent />
      <PictureBulletSection pictureOnRight={true} pictureSrc={sectionImage} />
      <PictureBulletSection pictureOnRight={false} pictureSrc={sectionImage} />
      <ConversionElement />
      <Footer />
    </div>
  );
}

export default App;
