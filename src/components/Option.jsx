import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const Option = ({ setVisible }) => {
  const itemRef = useRef();
  const handleRemove = () => {
    console.log("remove");
    setVisible(-1);
  };

  const handleEdit = () => {
    console.log("edit");
    setVisible(-1);
  };

  const closeContextMenu = (e) => {
    let item = itemRef.current;
    item && item.contains(e.target) ? e.preventDefault() : setVisible(-1);
  };

  useEffect(() => {
    document.addEventListener("click", closeContextMenu);
    return () => {
      document.removeEventListener("click", closeContextMenu);
    };
  });

  return (
    <div className="options" ref={itemRef}>
      <FontAwesomeIcon
        className="option-btn"
        icon={faTrash}
        onClick={handleRemove}
      />
      <FontAwesomeIcon
        className="option-btn"
        icon={faEdit}
        onClick={handleEdit}
      />
    </div>
  );
};

export default Option;
