import styled from "styled-components";

const PaymentMethodListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 76px;
  width: 256px;

  h3 {
    font-family: Montserrat;
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    margin: 0px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 36px;
    width: 256px;
    margin-top: 21px;
  }
`;

export default PaymentMethodListStyle;
