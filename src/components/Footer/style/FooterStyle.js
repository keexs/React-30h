import styled from "styled-components";

const FooterStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  height: 320px;
  background-color: #111111;
  padding-top: 97px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 970px;
    padding-left: 24px;
  }
`;

export default FooterStyle;
