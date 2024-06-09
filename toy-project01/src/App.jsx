import Controller from "./components/Controller.jsx";
import Viewer from "./components/Viewer.jsx";
import style from "./App.module.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

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
          <Viewer count={count} />
          <Controller onClickButton={onClickButton} />
        </div>
      </div>
    </>
  );
}

export default App;
