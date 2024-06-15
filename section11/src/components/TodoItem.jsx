import style from "./TodoItem.module.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App.jsx";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickButton = () => {
    onDelete(id);
  };

  return (
    <div className={style.container}>
      <input checked={isDone} type="checkbox" onChange={onChangeCheckbox} />
      <div className={style.content}>{content}</div>
      <div className={style.date}>{new Date(date).toLocaleDateString()}</div>
      <button className={style.delete} onClick={onClickButton}>
        삭제
      </button>
    </div>
  );
};

export default memo(TodoItem);
