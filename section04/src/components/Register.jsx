import { useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  console.log(input);

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // const onChangeName = (e) => {
  //   setInput({
  //     ...input,
  //     name: e.target.value,
  //   });
  // };
  //
  // const onChangeBirth = (e) => {
  //   setInput({
  //     ...input,
  //     birth: e.target.value,
  //   });
  // };
  //
  // const onChangeCountry = (e) => {
  //   setInput({
  //     ...input,
  //     country: e.target.value,
  //   });
  // };
  //
  // const onChangeBio = (e) => {
  //   setInput({
  //     ...input,
  //     bio: e.target.value,
  //   });
  // };

  return (
    <div>
      <div>
        <input
          placeholder={"이름"}
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
    </div>
  );
};

export default Register;
