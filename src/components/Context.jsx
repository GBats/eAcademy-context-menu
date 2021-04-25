import React, { useState } from "react";
import "./context.scss";
import Option from "./Option";
function Context() {
  const data = [
    { title: "Home" },
    { title: "Contact" },
    { title: "About" },
    { title: "Gallery" },
    { title: "Branches" },
  ];

  const [visible, setVisible] = useState(-1);

  return (
    <div className="main-container">
      <ul className="list">
        {data.map((item, idx) => (
          <li
            onContextMenu={(e) => {
              e.preventDefault();
              setVisible(idx);
            }}
            key={idx}
            className="list-item"
          >
            {item.title}
            {visible === idx ? (
              <Option visible={visible} setVisible={setVisible} />
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Context;
