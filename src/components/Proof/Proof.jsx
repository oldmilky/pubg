import { NavLink } from "react-router-dom";
import s from "./Proof.module.scss";

function Proof() {
  return (
    <section className={s.proof}>
      <h1 className={s.title}>Претензии по поводу взломанного аккаунта</h1>
      <h2 className={s.subtitle}>
        Для обеспечения безопасности аккаунта, вы обязаны предоставлять
        правдивую информацию в соответствии с указанными рекомендациями. (Любые
        пропущенные ответы и не ответственно заполненные поля могут повлиять на
        окончательное решение. Будьте внимательны.)
      </h2>
      <h2 className={s.subtitleActive}>
        Ваша заявка будет рассмотрена в течение 14 рабочих дней. Отправка других
        заявок будет невозможна вплоть до окончания рассмотрения текущей. В
        случае подтверждения заявки, отправка новой будет невозможна в
        последующие 3–6 месяцев.
      </h2>
      <h3 className={s.subtitle}>Я подтверждаю согласие с условиями.</h3>
      <div className={s.buttonWrap}>
        <NavLink to="/form">
          <button className={s.button}>Далее</button>
        </NavLink>
      </div>
    </section>
  );
}

export default Proof;
