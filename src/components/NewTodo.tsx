import { useRef,useContext } from "react";
import { TodoContext } from "../store/todos-context";
import classes from "./css/NewTodo.module.css";
const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodoContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText?.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredText);
    todoTextInputRef.current!.value = "";
  };
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
