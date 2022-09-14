import TitleStyle from "./style/TitleStyle";

const Title = (props) => {
  return (
    <>
      <TitleStyle>{props.text}</TitleStyle>
    </>
  );
};

export default Title;
