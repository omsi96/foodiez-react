import React, { useState } from "react";
import Modal from "react-modal";

const CategoryModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      //   style={customStyles}
      contentLabel="Category Modal"
    >
      <form>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input className="form-control" />
          </div>
        </div>

        <div className="form-group">
          <label>Image</label>
          <input className="form-control" />
        </div>
      </form>
    </Modal>
  );
};

export default CategoryModal;
