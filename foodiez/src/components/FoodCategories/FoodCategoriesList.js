import React from "react";
import { Link } from "react-router-dom";
import FoodCategoryCard from "./FoodCategoryCard";
import foodCategories from "../../data/foodCategories";
import GridWrapper from "../../styles/GridWrapper";
const FoodCategoriesList = () => {
  // Remove this when connecting to database

  return (
    <div>
      <h1>Categories</h1>
      <GridWrapper>
        {foodCategories.map((category) => (
          <Link to={`/categories/${category.slug}`} key={category.slug}>
            <FoodCategoryCard category={category} key={category.slug} />
          </Link>
        ))}
      </GridWrapper>
    </div>
  );
};

export default FoodCategoriesList;
