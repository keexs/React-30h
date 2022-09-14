import AnchorLinkStyle from "./style/AnchorLinkStyle";

const AnchorLink = (props) => {
  return (
    <>
      <AnchorLinkStyle href={props.href}>{props.text}</AnchorLinkStyle>
    </>
  );
};

export default AnchorLink;
