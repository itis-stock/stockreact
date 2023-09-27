import classes from "./StartPage.module.scss";

const StartPageButton = () => {
  return (
    <div className={classes["page__button"]}>
      <button type="submit" className={classes["page__button-item"]}>
        Продолжить с ВК
      </button>
      <span className={classes["page__button-text"]}>
        Только для тех, кто состоит в оригинальном стоке
      </span>
    </div>
  );
};

export default StartPageButton;
