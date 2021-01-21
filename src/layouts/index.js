import React from "react";

const Index = (props) => {
  return (
    <div>
      <h1>Header</h1>
      {props.children}
      <h1>Footer</h1>
    </div>
  );
};

export default Index;

