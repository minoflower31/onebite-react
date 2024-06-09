import Controller from "./components/Controller.jsx";
import Viewer from "./components/Viewer.jsx";
import style from "./App.module.css";
import { useEffect, useState } from "react";
import Even from "./components/Even.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // 마운트, 업데이트, 언마운트
  useEffect(() => {}, [count, input]);
  const onClickButton = (value) => {
    if (value === 0) {
      setCount(0);
    } else {
      setCount(count + value);
    }
  };

  return (
    <>
      <div>
        <div className={style.container}>
          <h1>Simple Counter</h1>
          <section>
            <input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </section>
          <Viewer count={count} />
          {count % 2 === 0 ? <Even /> : null}
          <Controller onClickButton={onClickButton} />
        </div>
      </div>
    </>
  );
}

export default App;
