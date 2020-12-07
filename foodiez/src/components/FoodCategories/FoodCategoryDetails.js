import React from "react";
import { useParams } from "react-router";
// Temporary until we link the databse
import data from "../../data/foodCategories";
import foodCategoriesStore from "../../stores/categoryStore";
import { observer } from "mobx-react";
import IngredientsList from "./IngredientsList";

const FoodCategoryDetails = () => {
  const slug = useParams().categorySlug;
  const foodCategory = foodCategoriesStore.foodCategories.find(
    (fc) => fc.slug === slug
  );
  return (
    <div>
      <h1>{foodCategory.name}</h1>
      <img src={foodCategory.image} alt="" />
      <IngredientsList foodCategory={foodCategory} />
    </div>
  );
};

export default observer(FoodCategoryDetails);
