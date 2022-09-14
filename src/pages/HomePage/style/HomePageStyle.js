import styled from "styled-components";

const HomePageStyle = styled.div`
  margin-right: 80px;
  margin-left: 80px;
  margin-top: 68px;

  @media screen and (max-width: 600px) {
    margin-right: 24px;
    margin-left: 24px;
    margin-top: 24px;

    .Logo {
      width: 72px;
      height: 32px;
    }
  }
`;

export default HomePageStyle;
