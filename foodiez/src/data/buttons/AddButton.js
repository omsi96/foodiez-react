import React from "react";
import { BsPlusCircle } from "react-icons/bs";

import { useState } from "react";
import CategoryModal from "../../modal/CategoryModal";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <div>
      <>
        <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
        <CategoryModal isOpen={isOpen} closeModal={closeModal} />
      </>
    </div>
  );
};

export default AddButton;
