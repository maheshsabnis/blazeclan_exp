import React, { useState, useEffect } from "react";

const MouseMoveComponent = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getPositions = (evt) => {
    setX(evt.clientX);
    setY(evt.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", getPositions);
    return () => {
      // perform the cleanup Operations
      console.log("Mousemove Component is UnMounted");
      window.removeEventListener("mousemove", getPositions);
    };
  }, []);

  return (
    <div className="container">
      <h2>The Mouse Move Component</h2>

      <div>
        <strong>
          x = {x} &&&& y = {y}
        </strong>
      </div>
    </div>
  );
};

export default MouseMoveComponent;
