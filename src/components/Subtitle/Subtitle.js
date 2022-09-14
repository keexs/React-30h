import SubtitleStyle from "./style/SubtitleStyle";

const Subtitle = (props) => {
  return (
    <>
      <SubtitleStyle>{props.text}</SubtitleStyle>
    </>
  );
};

export default Subtitle;
