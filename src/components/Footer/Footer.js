import PaymentMethodList from "../PaymentMethodList/PaymentMethodList";
import PoliticsLinkList from "../PoliticsLinkList/PoliticsLinkList";
import AboutKibus from "../SobreKibus/AboutKibus";
import SocialMediaIconList from "../SocialMediaIconList/SocialMediaIconList";
import FooterStyle from "./style/FooterStyle";

const Footer = () => {
  return (
    <>
      <FooterStyle>
        <AboutKibus></AboutKibus>
        <PoliticsLinkList></PoliticsLinkList>
        <SocialMediaIconList></SocialMediaIconList>
        <PaymentMethodList></PaymentMethodList>
      </FooterStyle>
    </>
  );
};

export default Footer;
