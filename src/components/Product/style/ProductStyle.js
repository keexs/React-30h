import styled from "styled-components";

const ProductStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    height: 655px;
  }

  @media screen and (max-width: 600px) {
    flex-wrap: wrap-reverse;

    img {
      height: auto;
      width: 327px;
    }
  }
`;

export default ProductStyle;
