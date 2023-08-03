import React, { useContext } from "react";
import MyContext from "./MyContext";

const ChildComponent = () => {
  const context = useContext(MyContext);
  return (
    <div>
      <p>conext data: {context.data}</p>
    </div>
  );
};

export default ChildComponent;
