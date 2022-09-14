import styled from "styled-components";

const RecipeListStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 33px;
  width: 100%;
  height: 462px;
  background: #ffffff;
  box-shadow: 0px 14px 37px 19px rgba(126, 126, 126, 0.08);
  border-radius: 20px;
  margin-bottom: 123px;

  @media screen and (max-width: 600px) {
    width: 325px;
    height: 400px;
    justify-content: start;
    overflow-x: scroll;

    div {
      margin-right: 30px;
      margin-left: 30px;
    }
  }
`;

export default RecipeListStyle;
