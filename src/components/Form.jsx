import React, { useState } from "react";

const Form = props => {
  const [value, setValue] = useState("");
  const updateValue = e => {
    setValue(e.target.value);
  };

  return (
    <form>
      <div>
        <label htmlFor="todo">Enter a Todo:</label>
        <input
          value={value}
          onChange={updateValue}
          className="form-control"
          name="todo"
          id="todo"
          type="text"
        />
      </div>
    </form>
  );
};

export default Form;
