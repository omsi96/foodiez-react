import React from "react";
import FoodCategoryCardStyled from "../../styles/FoodCategoryStyled";
import CardTitle from "../../styles/CardTitle";
const IngerdientCard = ({ ingerdient }) => {
  return (
    <div>
      <FoodCategoryCardStyled image={ingerdient.image}>
        <CardTitle>{ingerdient.name}</CardTitle>
      </FoodCategoryCardStyled>
    </div>
  );
};

export default IngerdientCard;
