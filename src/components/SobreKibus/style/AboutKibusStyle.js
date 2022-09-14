import styled from "styled-components";

const AboutKibusStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  position: relative;
  bottom: 20px;

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

  img {
    height: 38px;
    width: 44px;
  }

  p {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: White;
    margin: 0px;
  }

  @media screen and (max-width: 600px) {
    width: 327px;
  }
`;

export default AboutKibusStyle;
