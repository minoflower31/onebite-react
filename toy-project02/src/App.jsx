import "./App.module.css";
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";

import style from "./App.module.css";
import { useRef, useState } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Docker 인강듣기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "데이트하기",
    date: new Date().getTime(),
  },
  {
    id: 3,
    isDone: false,
    content: "일기 쓰기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(todos.length);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <div className={style.container}>
        <Header />
        <Editor onCreate={onCreate} />
        <List />
      </div>
    </>
  );
}

export default App;
