import {useCallback, useState} from "react";

const Counter = () => {
  const [state, setState] = useState(0);
  const onClick = useCallback(() => {
    setState(state + 1);
  }, [state]);

  console.log(state);
  return (
      <div>
        <h1>{state}</h1>
        <button onClick={onClick}>+1</button>
      </div>
  );
};

export default Counter;