import React from "react";
import "../components/toDo.css";
import { useState } from "react";
import ToDo from "./toDo";
import InputArea from "./inputArea";

function ToDolList() {
  
  const [todoTask, setTodoTask] = useState([]);



  function handleClick(todo) {
    setTodoTask((preValue) => {
      return [...preValue, todo];
    });
    
  }
  function deleteItems(key ) {
    
    setTodoTask((prevalue) => {
      return prevalue.filter((todo,index ) => {
        
        return index !== key;
      });
     console.log(index)
    });
    console.log(key )
  }


  return (
    <div className="main_container">
      <div className="header">
        <h1>To-Do-List</h1>
      </div>
     <InputArea
     onAdd={handleClick}
     />

      <div className="list">
        <ul>
          {todoTask.map((todo, index) => (
            <ToDo id={index} text={todo} onChecked={deleteItems} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDolList;
