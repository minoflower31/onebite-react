import style from "./TodoItem.module.css";

const TodoItem = () => {
  return (
    <div className={style.container}>
      <input type="checkbox" />
      <div className={style.content}>Todo...</div>
      <div className={style.date}>Date</div>
      <button className={style.delete}>삭제</button>
    </div>
  );
};

export default TodoItem;
