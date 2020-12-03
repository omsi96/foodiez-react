import React from "react";
import { useParams } from "react-router";
// Temporary until we link the databse
import data from "../../data/foodCategories";

const FoodCategoryDetails = () => {
  const slug = useParams().categorySlug;
  const category = data.find((category) => category.slug === slug);
  return (
    <div>
      <h1>{category.name}</h1>
      <img src={category.image} alt=""></img>
    </div>
  );
};

export default FoodCategoryDetails;
