import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./css/Todos.module.css";
import { TodoContext } from "../store/todos-context";
const Todos: React.FC = () => {
  const todosContext = useContext(TodoContext);
  return (
    <ul className={classes.todos}>
      {todosContext.items?.map((item) => (
        <TodoItem
          key={item.id}
          itemText={item.text}
          onRemoveTodo={todosContext.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
