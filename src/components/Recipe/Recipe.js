import ParagraphText from "../ParagraphText/ParagraphText";
import Photo from "../Photo/Photo";
import Subtitle from "../Subtitle/Subtitle";
import RecipeStyle from "./style/RecipeStyle";

const Recipe = (props) => {
  return (
    <>
      <RecipeStyle>
        <Photo src={props.imgSrc} alt={props.alt} />
        <Subtitle text={props.recipeName} />
        <ParagraphText text={props.recipeSummary} />
      </RecipeStyle>
    </>
  );
};

export default Recipe;
