import React, { useState } from "react";
import Modal from "react-modal";
import foodCategoriesStore from "../stores/categoryStore";

import { CreateButtonStyled } from "../styles/CreatButtonStyled";

const CategoryModal = ({ isOpen, closeModal, createCategory }) => {
  const [category, setCategory] = useState({
    name: "",
    image: "",
  });
  const handleChange = (event) => {
    setCategory({ ...category, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    foodCategoriesStore.createCategory(category);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      //   style={customStyles}
      contentLabel="Category Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              className="form-control"
              name="name"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Image</label>
          <input
            className="form-control"
            name="image"
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          Create
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default CategoryModal;
