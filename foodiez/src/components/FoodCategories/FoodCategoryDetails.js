import React from "react";
import { useParams } from "react-router";
// Temporary until we link the databse
import data from "../../data/foodCategories";
import foodCategoriesStore from "../../stores/categoryStore";
import { observer } from "mobx-react";

const FoodCategoryDetails = () => {
  const slug = useParams().categorySlug;
  const category = foodCategoriesStore.data.find(
    (category) => category.slug === slug
  );
  return (
    <div>
      <h1>{category.name}</h1>
      <img src={category.image} alt=""></img>
    </div>
  );
};

export default observer(FoodCategoryDetails);
