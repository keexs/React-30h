import AddRecipe from "../AddRecipe/AddRecipe";
import Recipe from "../Recipe/Recipe";
import RecipeListStyle from "./style/RecipeListStyle";

const RecipeList = (props) => {
  return (
    <>
      <RecipeListStyle>
        {props.recipes.map((recipe) => (
          <Recipe
            imgSrc={recipe.imgSrc}
            alt={recipe.alt}
            recipeName={recipe.recipeName}
            recipeSummary={recipe.recipeSummary}
          />
        ))}
        <AddRecipe></AddRecipe>
      </RecipeListStyle>
    </>
  );
};

export default RecipeList;
