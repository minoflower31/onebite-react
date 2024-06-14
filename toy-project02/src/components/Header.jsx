import style from "./Header.module.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className={style.container}>
      <h3>오늘은 🗓️</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// export default Header;
export default memo(Header);
