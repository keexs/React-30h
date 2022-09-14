import Logo from "../Logo/Logo";
import Subtitle from "../Subtitle/Subtitle";
import ProductInfoStyle from "./style/ProductInfoStyle";

const ProductInfo = (props) => {
  return (
    <>
      <ProductInfoStyle>
        <Logo width="42" src={props.src} alt={props.alt} />
        <Subtitle text={props.text} />
      </ProductInfoStyle>
    </>
  );
};

export default ProductInfo;
