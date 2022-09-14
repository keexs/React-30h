import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon";
import SocialMediaIconListStyle from "./style/SocialMediaIconListStyle";

const SocialMediaIconList = () => {
  return (
    <>
      <SocialMediaIconListStyle>
        <SocialMediaIcon
          href=""
          src="/assets/img/logo-facebook.svg"
          alt="Facebook"
        />
        <SocialMediaIcon
          href=""
          src="/assets/img/logo-instagram.svg"
          alt="Instagram"
        />
        <SocialMediaIcon
          href=""
          src="/assets/img/logo-youtube.svg"
          alt="Youtube"
        />
      </SocialMediaIconListStyle>
    </>
  );
};

export default SocialMediaIconList;
