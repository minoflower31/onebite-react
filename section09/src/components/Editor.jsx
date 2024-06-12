import style from "./Editor.module.css";
import { useRef, useState } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef(null);

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className={style.container}>
      <input
        ref={contentRef}
        value={content}
        placeholder="새로운 Todo..."
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
