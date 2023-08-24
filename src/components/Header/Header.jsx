import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";

function Header() {
  return (
    <div className={s.header}>
      <NavLink className={s.link} to="/">
        <button className={s.back}></button>
      </NavLink>
      <h1 className={s.title}>Претензии по поводу взломанного аккаунта</h1>
      <button className={s.button}>Отправить данные</button>
    </div>
  );
}

export default Header;
