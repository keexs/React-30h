import HardwareHighlights from "../../components/HardwareHighlights/HardwareHighlight";
import Home from "../../components/Home/Home";
import Logo from "../../components/Logo/Logo";
import Product from "../../components/Product/Product";
import RecipeList from "../../components/RecipeList/RecipeList";
import { recipesData } from "../../data/recipesData";
import HomePageStyle from "./style/HomePageStyle";

const HomePage = () => {
  return (
    <>
      <HomePageStyle>
        <Logo src="/assets/img/logo-secondaryColor.svg" alt="Kibus logo" />
        <Home className={"Home"} />
        <RecipeList className={"RecipeList"} recipes={recipesData} />
        <HardwareHighlights />
        <Product />
      </HomePageStyle>
    </>
  );
};

export default HomePage;
