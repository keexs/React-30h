import styled from "styled-components";

const ProductInfoListStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 274px;
  height: 564;

  @media screen and (max-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: auto;
    align-items: center;
    justify-content: center;

    div {
      width: 158px;
      height: 146px;
    }
  }
`;

export default ProductInfoListStyle;
