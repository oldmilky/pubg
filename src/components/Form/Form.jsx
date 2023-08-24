import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import s from "./Form.module.scss";

function Form() {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h6ui37n",
        "template_1ilepce",
        form.current,
        "e7MatIjkNPo9wpDR8"
      )
      .then(
        result => {
          console.log(result.text);
          navigate("/sended");
          form.current.reset();
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Header />
      <form className={s.form} ref={form} onSubmit={sendEmail}>
        <div className={s.wrap}>
          <h2 className={s.title}>
            <span className={s.span}>Ваш позывной или UID</span>{" "}
            <span className={s.spanYellow}>*</span>
          </h2>
          <input className={s.input} type="text" name="message" required />
        </div>

        <div className={s.wrap}>
          <h2 className={s.title}>
            1 <span className={s.span}>Как вы потеряли свой аккаунт?</span>{" "}
            <span className={s.spanYellow}>*</span>
          </h2>
          <input className={s.input} type="text" name="message1" />
        </div>

        <div className={s.wrap}>
          <h2 className={s.title}>
            2{" "}
            <span className={s.span}>
              Из какого региона вы входили в игру чаще всего за последние 6
              месяцев?
            </span>{" "}
            <span className={s.spanYellow}>*</span>
          </h2>
          <input className={s.input} type="text" name="message2" />
        </div>

        <div className={s.wrap}>
          <h2 className={s.title}>
            3{" "}
            <span className={s.span}>
              Укажите бренд и модель устройства с которого вы играли чаще всего
              за последние 6 месяцев?
            </span>{" "}
            <span className={s.spanYellow}>*</span>
          </h2>
          <input className={s.input} type="text" name="message3" />
        </div>

        <div className={s.wrap}>
          <h2 className={s.title}>
            4{" "}
            <span className={s.span}>
              Учетные записи каких соцплатформ вы привязали к игровому аккаунту
              за все время игры?
            </span>{" "}
            <span className={s.spanYellow}>*</span>
          </h2>
          <input className={s.input} type="text" name="message4" />
        </div>

        <div className={s.wrap}>
          <h2 className={s.title}>
            5{" "}
            <span className={s.span}>
              Какие email-адреса были привязаны к игровому аккаунту за все время
              игры?
            </span>{" "}
            <span className={s.spanYellow}>*</span>
          </h2>
          <input className={s.input} type="text" name="message5" />
        </div>

        <div className={s.wrap}>
          <h2 className={s.title}>
            6{" "}
            <span className={s.span}>
              Какие номера телефонов были привязаны к игровому аккаунту за все
              время игры?
            </span>{" "}
            <span className={s.spanYellow}>*</span>
          </h2>
          <input className={s.input} type="text" name="message6" />
        </div>

        <div className={s.wrap}>
          <h2 className={s.title}>
            7{" "}
            <span className={s.span}>Какие имена вы использовали в игре?</span>{" "}
            <span className={s.spanYellow}>*</span>
          </h2>
          <p className={s.textPoint}>
            Если в имени вы использовали специальные символы, то укажите их,
            например: PubgūMobile [Укажите по крайней мере 2.]
          </p>
          <input className={s.input} type="text" name="message7" />
        </div>

        <div className={s.wrap}>
          <h2 className={s.title}>
            8{" "}
            <span className={s.span}>
              Какого наивысшего ранга вы достигли за последние 6 месяцев?
            </span>{" "}
            <span className={s.spanYellow}>*</span>
          </h2>
          <input className={s.input} type="text" name="message8" />
        </div>

        <div className={s.wrap}>
          <h2 className={s.title}>
            9{" "}
            <span className={s.span}>
              На какой из классических карт вы играли больше всего за последние
              6 месяцев?
            </span>{" "}
            <span className={s.spanYellow}>*</span>
          </h2>
          <input className={s.input} type="text" name="message9" />
        </div>

        <div className={s.wrap}>
          <h2 className={s.title}>
            10{" "}
            <span className={s.span}>
              Укажите имена друзей, с которыми вы объединялись в команду за
              последние 6 месяцев? [Укажите по крайней мере 2.]
            </span>{" "}
            <span className={s.spanYellow}>*</span>
          </h2>
          <input className={s.input} type="text" name="message10" />
        </div>

        <div className={s.wrap}>
          <h2 className={s.title}>
            11{" "}
            <span className={s.span}>
              Регистрировались ли вы на Чемпионат талантов за последние 6
              месяцев?
            </span>{" "}
            <span className={s.spanYellow}>*</span>
          </h2>
          <input className={s.input} type="text" name="message11" />
        </div>

        <div className={s.wrap}>
          <h2 className={s.title}>
            12{" "}
            <span className={s.span}>
              Предоставьте историю покупок за период от 30 до 180 дней. (
              Укажите по крайней мере 2. )
            </span>{" "}
            <span className={s.spanYellow}>*</span>
          </h2>
          <input className={s.input} type="text" name="message12" />
        </div>

        <div className={s.wrap}>
          <h2 className={s.title}>
            13{" "}
            <span className={s.span}>
              Какой email-адрес вы хотели бы привязать в случае удовлетворения
              вашей претензии?
            </span>{" "}
            <span className={s.spanYellow}>*</span>
          </h2>
          <input className={s.input} type="text" name="message13" />
        </div>

        <div className={s.wrap}>
          <h2 className={s.title}>
            14{" "}
            <span className={s.span}>
              Хотите ли вы предоставить дополнительную информацию? В противном
              случае это может повлиять на результат рассмотрения вашей заявки.
            </span>{" "}
            <span className={s.spanYellow}>*</span>
          </h2>
          <input className={s.input} type="text" name="message14" />
        </div>
        
        <div className={s.buttonWrap}>
          <input
            className={s.button}
            type="submit"
            value="Отправить"
            placeholder="Отправить"
          />
        </div>
      </form>
    </>
  );
}

export default Form;
