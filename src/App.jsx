import React, { useState } from "react";
import Form from "./components/Form";

const App = () => {
  return (
    <React.Fragment>
      <div className="jumbotron">
        <h2 className="text-center">Simple Todo App with React Hooks</h2>
      </div>
      <div className="container">
        <Form />
      </div>
    </React.Fragment>
  );
};

export default App;
