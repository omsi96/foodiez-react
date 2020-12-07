import { Link } from "react-router-dom";
import IngredientCard from "./IngredientCard";
// import Ingerdients from "../../data/Ingerdients";
import GridWrapper from "../../styles/GridWrapper";
import { observer } from "mobx-react";

import AddButton from "../../data/buttons/AddButton";

const IngerdientsList = ({ foodCategory }) => {
  // Remove this when connecting to database

  return (
    <div>
      <h1>Categories</h1>
      <AddButton />
      <GridWrapper>
        {foodCategory.ingerdient.map((ingerdient) => (
          <Link to={`/ingerdients/${ingerdient.slug}`} key={ingerdient.slug}>
            <IngredientCard ingerdient={ingerdient} key={ingerdient.slug} />
          </Link>
        ))}
      </GridWrapper>
    </div>
  );
};

export default observer(IngerdientsList);
