import style from "./Viewer.module.css";

const Viewer = ({ count }) => {
  return (
    <div className={style.container}>
      <div>현재 카운트 :</div>
      <div className={style.count}>{count}</div>
    </div>
  );
};

export default Viewer;
