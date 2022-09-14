import Button from "../Button/Button";
import Photo from "../Photo/Photo";
import Subtitle from "../Subtitle/Subtitle";
import Title from "../Title/Title";
import HomeStyle from "./style/HomeStyle";

const Home = () => {
  return (
    <>
      <HomeStyle className={"home"}>
        <div className={"HomeContent"}>
          <Title
            className={"title"}
            text="Alimentar bien a tu perro es mas fácil que nunca."
          />
          <Subtitle text="La nueva alimentación canina ha llegado. Con Kibus, podrás ofrecer a tu compañero comida sana, rica y recién cocinada de una forma fácil y cómoda" />
          <div className={"HomeContent-buttons"}>
            <Button className={"reservaAhora-button"} text="Reserva Ahora" />
            <Button className={"saberMas-button"} text="Quiero saber mas >" />
          </div>
        </div>
        <Photo
          className={"homePhoto"}
          src="/assets/img/dogWithGirl.svg"
          alt="Happy dog with her owner"
        ></Photo>
      </HomeStyle>
    </>
  );
};

export default Home;
