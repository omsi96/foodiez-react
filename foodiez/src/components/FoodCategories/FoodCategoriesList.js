import { Link } from "react-router-dom";
import FoodCategoryCard from "./FoodCategoryCard";
import foodCategories from "../../data/foodCategories";
import GridWrapper from "../../styles/GridWrapper";
import { observer } from "mobx-react";

import AddButton from "../../data/buttons/AddButton";
import foodCategoriesStore from "../../stores/categoryStore";

const FoodCategoriesList = () => {
  // Remove this when connecting to database

  return (
    <div>
      <h1>Categories</h1>
      <AddButton />
      <GridWrapper>
        {foodCategoriesStore.foodCategories.map((category) => (
          <Link to={`/categories/${category.id}`} key={category.slug}>
            <FoodCategoryCard category={category} key={category.slug} />
          </Link>
        ))}
      </GridWrapper>
    </div>
  );
};

export default observer(FoodCategoriesList);
