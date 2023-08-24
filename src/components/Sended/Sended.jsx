import s from "./Sended.module.scss";

function Sended() {
  return (
    <div className={s.sended}>
      <h1 className={s.text}>
        На процесс может потребоваться 14 рабочих дней. Результаты будут
        отправлены на ваш привязанный email-адрес.
      </h1>
    </div>
  );
}

export default Sended;
