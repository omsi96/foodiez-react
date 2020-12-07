import React from "react";
import { useParams } from "react-router";
// Temporary until we link the databse
// import data from "../../data/foodIngerdients";
import IngerdientsStore from "../../stores/ingerdientStore";
import { observer } from "mobx-react";

const IngerdientDetails = () => {
  const slug = useParams().ingerdientSlug;
  const ingerdient = IngerdientsStore.getIngerdient(slug);

  return (
    <div>
      <h1>{ingerdient.name}</h1>
      <img src={ingerdient.image} alt="" />
    </div>
  );
};

export default observer(IngerdientDetails);
