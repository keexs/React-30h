import ProductInfo from "../ProductInfo/ProductInfo";
import ProductInfoListStyle from "./style/ProductInfoListStyle";

const ProductInfoList = () => {
  return (
    <>
      <ProductInfoListStyle>
        <ProductInfo
          src="/assets/img/programableIcon.svg"
          text="Programmable 24h"
        />
        <ProductInfo
          src="/assets/img/programableIcon.svg"
          text="Agua siempre disponible"
        />
        <ProductInfo
          src="/assets/img/programableIcon.svg"
          text="Cantidad personalizable"
        />
        <ProductInfo
          src="/assets/img/programableIcon.svg"
          text="Histórial de las comidas"
        />
        <ProductInfo
          src="/assets/img/programableIcon.svg"
          text="Fácil de usar y lavar"
        />
        <ProductInfo
          src="/assets/img/programableIcon.svg"
          text="App para iOS y Android"
        />
      </ProductInfoListStyle>
    </>
  );
};

export default ProductInfoList;
