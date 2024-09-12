import React, { useState } from "react";
useState;
function InputArea(props) {
  const [todo, setTodo] = useState([]);

  function handleChange(e) {
    const todo_value = e.target.value;
    setTodo(todo_value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="form_con">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          value={todo}
          id="todo"
          placeholder="Enter Your Next Task"
          onChange={handleChange}
        />
        <button
          onClick={() => {
            props.onAdd(todo);
            setTodo("");
          }}
        >
          <i className="fa fa-add"></i>
        </button>
      </form>
    </div>
  );
}

export default InputArea;
