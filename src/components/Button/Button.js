import ButtonStyle from "./style/ButtonStyle";

const Button = (props) => {
  const { text, ...restProps } = props;
  return <ButtonStyle {...restProps}>{text}</ButtonStyle>;
};

export default Button;
