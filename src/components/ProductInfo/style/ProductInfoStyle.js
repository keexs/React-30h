import styled from "styled-components";

const ProductInfoStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 73px;
  position: relative;
  bottom: 80px;
  left: 110px;

  h3 {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }

  img {
    width: 42px;
    height: 42px;
    margin-right: 16px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    left: 0;
    bottom: 0;

    h3 {
      text-align: center;
    }

    img {
      height: 42px;
      width: 42px;
      margin-right: 0px;
    }
  }
`;

export default ProductInfoStyle;
