import Button from "../Button/Button";
import ParagraphText from "../ParagraphText/ParagraphText";
import Photo from "../Photo/Photo";
import AddRecipeStyle from "./style/AddRecipeStyle";

const AddRecipe = () => {
  return (
    <>
      <AddRecipeStyle>
        <Photo
          src="/assets/img/recipe-polloPimiento.svg"
          alt="Una fotografia de una de tus recetas"
        />
        <Button text="Tu Receta >" />
        <ParagraphText text="Ayúdanos a decidir nuestra nueva receta" />
      </AddRecipeStyle>
    </>
  );
};

export default AddRecipe;
