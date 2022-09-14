import Button from "../Button/Button";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import ParagraphText from "../ParagraphText/ParagraphText";
import Subtitle from "../Subtitle/Subtitle";
import HardwareHighlightsStyle from "./style/HardwareHighlightsStyle";

const BASE_CLASS = "HomeContent";

const HardwareHighlights = () => {
  return (
    <>
      <HardwareHighlightsStyle>
        <ImageCarousel />
        <div className={BASE_CLASS}>
          <Subtitle text="Mejor para ellos, más fácil y cómodo para ti" />
          <ParagraphText text="Con Kibus, nunca tendrás que preocuparte de cómo ofrecer una dieta sana y natural a tu perro de forma cómoda y rápida. Nuestro dispositivo cocina automáticamente la cantidad exacta en cada comida e incluso lo puedes programar a través de la app. Tu perro disfrutará comida de casera de primera calidad, con el mínimo esfuerzo." />
          <div className={`${BASE_CLASS}-buttons`}>
            <Button className="reservaAhora-button" text="Reserva Ahora" />
            <Button className="saberMas-button" text="Quiero saber mas >" />
          </div>
        </div>
      </HardwareHighlightsStyle>
    </>
  );
};

export default HardwareHighlights;
