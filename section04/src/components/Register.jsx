import { useRef, useState } from "react";

// 외부 선언 시, 부모 컴포넌트에서 2번 선언하게 된다면
// 두 컴포넌트 모두 같은 변수를 공유하기 때문에 의도치 않은 문제가 발생됨
let globalCount = 0;

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  console.log("Rendering..");

  const countRef = useRef(0);
  const inputRef = useRef(null);

  // 리렌더링될 때 Register가 다시 호출되므로 count 변수는 reset됨
  let count = 0;

  const onChange = (e) => {
    countRef.current++;
    count++;
    globalCount++;
    console.log(globalCount);
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          placeholder={"이름"}
          ref={inputRef}
          value={input.name}
          name={"name"}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          name={"birth"}
          type={"date"}
          onChange={onChange}
          value={input.birth}
        />
      </div>
      <div>
        <select name={"country"} value={input.country} onChange={onChange}>
          <option>-선택-</option>
          <option value={"kr"}>한국</option>
          <option value={"sw"}>스위스</option>
          <option value={"uk"}>영국</option>
        </select>
      </div>

      <div>
        <textarea name={"bio"} value={input.bio} onChange={onChange}></textarea>
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
