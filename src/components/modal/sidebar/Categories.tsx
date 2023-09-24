import classes from "./Sidebar.module.scss";

export default function Categories() {
  return (
    <div className={classes.categories}>
      <div className={classes["categories__item"]}>
        <img src="/images/rocket2.svg" alt="аватарка" />
        <span>Сафин Ильдан</span>
      </div>
      <div className={classes["categories__item"]}>
        <img src="/images/oform.svg" alt="" />
        <span>Оформление</span>
      </div>
      <div className={classes["categories__item"]}>
        <img src="/images/short.svg" alt="" />
        <span>Шорткаты</span>
      </div>
      <div className={classes["categories__item"]}>
        <img src="/images/teachers.svg" alt="" />
        <span>Преподаватели</span>
      </div>
    </div>
  );
}
