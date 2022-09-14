import styled from "styled-components";

const HomeStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 123px;

  h1 {
    width: 710px;
  }

  h3 {
    width: 652px;
  }

  img {
    width: 754px;
    height: 502px;
    background-image: url("/assets/img/photoBackground.svg");
    background-size: 420px;
    background-repeat: no-repeat;
    background-position: center;
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

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: center;
    width: 327px;
    height: auto;

    h1 {
      margin: 0;
      width: 327px;
      font-family: Montserrat;
      font-size: 32px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0em;
      text-align: left;
    }

    h3 {
      width: 327px;
      font-size: 16px;
      line-height: 21.6px;
    }

    img {
      width: 300px;
      height: auto;
      background-image: url("/assets/img/photoBackground.svg");
      background-size: 230px;
      background-repeat: no-repeat;
      background-position: center;
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

export default HomeStyle;
