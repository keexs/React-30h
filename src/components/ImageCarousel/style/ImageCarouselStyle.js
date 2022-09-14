import styled from "styled-components";

const ImageCarouselStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  height: 600px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    width: 700px;
    bottom: 225px;
  }

  button {
    width: 50px;
    height: 50px;
    background-color: rgba(81, 81, 81, 0.5);
    margin: 20px;
  }

  img {
    position: relative;
    top: 50px;
    width: 700px;
    height: auto;
    border-radius: 28px;
  }

  @media screen and (max-width: 600px) {
    width: 327px;
    height: auto;

    img {
      width: 325px;
    }

    div {
      width: 325px;
      bottom: 80px;
    }

    button {
      height: 30px;
      width: 30px;
      margin: 10px;
    }
  }
`;

export default ImageCarouselStyle;
