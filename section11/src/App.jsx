import "./App.module.css";

import style from "./App.module.css";
import { createContext, useCallback, useMemo, useReducer, useRef } from "react";
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";

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

function reducer(state, action) {
  switch (action.type) {
    case "C":
      return [...state, action.data];
    case "U": {
      return state.map((todo) =>
        todo.id === action.data
          ? {
              ...todo,
              isDone: !todo.isDone,
            }
          : todo,
      );
    }
    case "D": {
      return state.filter((todo) => todo.id !== action.data);
    }
    default:
      return state;
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(todos.length);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "C",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "U",
      data: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "D",
      data: targetId,
    });
  }, []);

  // const memorizedDispatch = { onCreate, onUpdate, onDelete };

  const memorizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <>
      <div className={style.container}>
        <Header />
        <TodoStateContext.Provider value={todos}>
          <TodoDispatchContext.Provider value={memorizedDispatch}>
            <Editor />
            <List />
          </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
      </div>
    </>
  );
}

export default App;
