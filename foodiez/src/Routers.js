import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import FoodCategoriesList from "./components/FoodCategories/FoodCategoriesList";
import FoodCategoryDetails from "./components/FoodCategories/FoodCategoryDetails";
import foodCategoriesStore from "./stores/categoryStore";

const Routers = () => {
  return (
    <Switch>
      {/* Food Category Details Page*/}
      <Route path="/categories/:categorySlug">
        <FoodCategoryDetails />
      </Route>
      {/* Food Categories List Page*/}
      <Route path="/categories">
        <FoodCategoriesList
          foodCategoris={foodCategoriesStore.foodCategories}
        />
      </Route>
      {/* Recipes L:ist Page*/}
      <Route path="/recipes">
        <h1>Recipes</h1>
      </Route>
      {/* Recipe Details Page*/}
      <Route path="/recipes/:recipeSlug">
        <h1>A single recipe</h1>
      </Route>
      {/* Home Page*/}
      <Route path="/">
        <h1>Home</h1>
      </Route>
    </Switch>
  );
};

export default Routers;
