import AnchorLink from "../AnchorLink/AnchorLink";
import Logo from "../Logo/Logo";
import SocialMediaIconStyle from "./style/SocialMediaIconStyle";

const SocialMediaIcon = (props) => {
  return (
    <>
      <SocialMediaIconStyle>
        <Logo src={props.src} alt={props.alt}>
          <AnchorLink href={props.href} />
        </Logo>
      </SocialMediaIconStyle>
    </>
  );
};

export default SocialMediaIcon;
