import Photo from "../Photo/Photo";
import ProductInfoList from "../ProductInfoList/ProductInfoList";
import ProductStyle from "./style/ProductStyle";

const Product = () => {
  return (
    <>
      <ProductStyle>
        <ProductInfoList />
        <Photo
          src="/assets/img/product.png"
          alt="Dispensador de comida kibus junto con app"
        ></Photo>
      </ProductStyle>
    </>
  );
};

export default Product;
