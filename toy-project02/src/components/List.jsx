import style from "./List.module.css";
import TodoItem from "./TodoItem.jsx";

const List = () => {
  return (
    <div className={style.container}>
      <h4>Todo List 🌱</h4>
      <input placeholder="검색어를 입력하세요" />
      <div className={style.todoWrapper}>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default List;
