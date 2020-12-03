import React from "react";
import FoodCategoryCard from "./FoodCategoryCard";
import foodCategories from "../data/foodCategories";
const FoodCategoriesList = () => {
  // Remove this when connecting to database

  return (
    <div>
      <h1>Categories</h1>
      {foodCategories.map((category) => (
        <FoodCategoryCard category={category} />
      ))}
    </div>
  );
};

export default FoodCategoriesList;
