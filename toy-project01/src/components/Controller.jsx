import style from "./Controller.module.css";

const Controller = ({ onClickButton }) => {
  return (
    <>
      <div className={style.container}>
        <button
          onClick={() => {
            onClickButton(-1);
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            onClickButton(-10);
          }}
        >
          -10
        </button>
        <button
          onClick={() => {
            onClickButton(-100);
          }}
        >
          -100
        </button>
        <button
          onClick={() => {
            onClickButton(100);
          }}
        >
          +100
        </button>
        <button
          onClick={() => {
            onClickButton(10);
          }}
        >
          +10
        </button>
        <button
          onClick={() => {
            onClickButton(1);
          }}
        >
          +1
        </button>
        <button
          value={0}
          onClick={() => {
            onClickButton(0);
          }}
        >
          clear
        </button>
      </div>
    </>
  );
};

export default Controller;
