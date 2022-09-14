import AnchorLink from "../AnchorLink/AnchorLink";
import Subtitle from "../Subtitle/Subtitle";
import PoliticsLinkListStyle from "./style/PoliticsLinkListStyle";

const PoliticsLinkList = () => {
  return (
    <>
      <PoliticsLinkListStyle>
        <Subtitle text="Políticas" />
        <AnchorLink href="" text="Políticas de Privacidad" />
        <AnchorLink href="" text="Condiciones de uso" />
        <AnchorLink href="" text="Cookies" />
        <AnchorLink href="" text="FAQ" />
      </PoliticsLinkListStyle>
    </>
  );
};

export default PoliticsLinkList;
