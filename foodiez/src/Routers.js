import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import FoodCategoriesList from "./components/FoodCategoriesList";

const Routers = () => {
  return (
    <Switch>
      <Route path="/categories/:categorySlug">
        <h1>A single category</h1>
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
