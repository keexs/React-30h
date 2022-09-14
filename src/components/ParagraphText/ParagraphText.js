import ParagraphTextStyle from "./style/ParagraphTextStyle";

const ParagraphText = (props) => {
  return (
    <>
      <ParagraphTextStyle>{props.text}</ParagraphTextStyle>
    </>
  );
};

export default ParagraphText;
