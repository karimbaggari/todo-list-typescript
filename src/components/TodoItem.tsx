import classes from "./css/TodoItem.module.css";
const todoItem: React.FC<{ itemText: String; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.itemText}
    </li>
  );
};

export default todoItem;
