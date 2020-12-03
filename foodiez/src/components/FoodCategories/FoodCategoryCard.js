import React from "react";
import FoodCategoryCardStyled from "../../styles/FoodCategoryStyled";
import CardTitle from "../../styles/CardTitle";
const FoodCategoryCard = ({ category }) => {
  return (
    <div>
      <FoodCategoryCardStyled image={category.image}>
        <CardTitle>{category.name}</CardTitle>
      </FoodCategoryCardStyled>
    </div>
  );
};

export default FoodCategoryCard;
