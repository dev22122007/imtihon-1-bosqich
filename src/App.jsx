import React, { useState } from "react";
import './App.css'
import trash from './img/trash.svg'
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "./redux/todoSlice";

const App = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="todo_container">
      <div className="add_todo">
        <input type="text" value={text} onChange={handleInputChange} placeholder="Add a new task" />{" "}
        <button onClick={handleAddTodo}>+</button>{" "}
      </div>
      <div className="todos_list">
        <h4 className="todo-task">Tasks to do - 4</h4>
        {todos.map((todo) => {
          return (
            <div className="todo_list">
              <li key={todo.id} style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }} className="todo-item">
                <div className="todo-item-content">

                  <span className="todo-item-text">{todo.text}</span>
                  <div className="actions">

                    <button onClick={() => handleToggleComplete(todo.id)}>
                      {" "}
                      {todo.completed ? "Incomplete" : "Complete"}{" "}
                    </button>{" "}
                    <img className="image" src={trash} alt="trash" onClick={() => handleDeleteTodo(todo.id)} /></div>

                </div>
              </li>
            </div>
          );
        })}
        <ul>
        </ul>


      </div>
      <h4 className="todo-task">Done - 1</h4>
      <ul></ul>

    </div>
  );
};

export default App;