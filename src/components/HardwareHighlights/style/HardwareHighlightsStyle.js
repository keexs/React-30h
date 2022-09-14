import styled from "styled-components";

const HardwareHighlightsStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 123px;
  background-image: url("/assets/img/photoBackground-2.svg");
  background-repeat: no-repeat;
  background-position-x: 150px;
  background-size: 600px;

  h3 {
    width: 425px;
    font-family: Montserrat;
    font-size: 36px;
    font-weight: 700;
    line-height: 43px;
    letter-spacing: 0em;
    text-align: left;
  }

  p {
    width: 459px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }

  .HomeContent-buttons {
    display: flex;
    flex-direction: row;
    justify-content: left;
    margin-top: 47px;
    gap: 16px;

    button {
      height: 50px;
      width: 184px;
      border-radius: 28px;
    }

    button:last-child {
      height: 50px;
      width: 244px;
      border-radius: 28px;
      border-style: solid;
      background-color: white;
      border-color: #ee7333;
      color: #ee7333;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    width: 375;
    background-image: none;

    h3 {
      width: 327px;
      font-size: 32px;
      line-height: 32px;
    }

    p {
      width: 327px;
      font-size: 16px;
      line-height: 21.6px;
    }

    .HomeContent-buttons {
      display: flex;
      flex-direction: column;
      justify-content: center;

      button {
        width: 325px;
      }
      button:last-child {
        width: 325px;
      }
    }
  }
`;

export default HardwareHighlightsStyle;
