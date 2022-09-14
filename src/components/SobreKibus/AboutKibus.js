import Logo from "../Logo/Logo";
import ParagraphText from "../ParagraphText/ParagraphText";
import Subtitle from "../Subtitle/Subtitle";
import AboutKibusStyle from "./style/AboutKibusStyle";

const AboutKibus = () => {
  return (
    <>
      <AboutKibusStyle>
        <Logo src="/assets/img/logo-aboutKibus.svg" alt="Kibus logo" />
        <Subtitle text="Sobre KIBUS" />
        <ParagraphText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." />
      </AboutKibusStyle>
    </>
  );
};

export default AboutKibus;
