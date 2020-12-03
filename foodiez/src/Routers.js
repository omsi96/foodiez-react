import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import FoodCategoriesList from "./components/FoodCategories/FoodCategoriesList";
import FoodCategoryDetails from "./components/FoodCategories/FoodCategoryDetails";

const Routers = () => {
  return (
    <Switch>
      <Route path="/categories/:categorySlug">
        <FoodCategoryDetails />
      </Route>
      <Route path="/categories">
        <FoodCategoriesList />
      </Route>
      <Route path="/recipes">
        <h1>Recipes</h1>
      </Route>
      <Route path="/recipes/:recipeSlug">
        <h1>A single recipe</h1>
      </Route>
      <Route path="/">
        <h1>Home</h1>
      </Route>
    </Switch>
  );
};

export default Routers;
