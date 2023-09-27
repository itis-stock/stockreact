import classes from "./StartPage.module.scss";
import arrow from "/images/arrow.svg"
const StartPageIdeas = () => {
  return (
    <div className={classes["page__idea"]}>
      <a href="https://t.me/lld4n" className={classes["page__idea-item"]}>
        <h3 className={classes["item-title"]}>Хочешь разработать бота для telegram</h3>
        <img src={arrow} alt=""/>
      </a>
      <a href="https://t.me/lld4n" className={classes["page__idea-item"]}>
        <h3 className={classes["item-title"]}>Шаришь за React и хочешь добавить новую ультракрутую фичу</h3>
        <img src={arrow} alt=""/>
      </a>
      <a href="https://t.me/lld4n" className={classes["page__idea-item"]}>
        <h3 className={classes["item-title"]}>Хочешь разработать приложение на android/ios</h3>
        <img src={arrow} alt=""/>
      </a>
      <a href="https://t.me/lld4n" className={classes["page__idea-item"]}>
        <h3 className={classes["item-title"]}>Ты смешарик, но у тебя есть гениальная идея</h3>
        <img src={arrow} alt=""/>
      </a>
    </div>
  );
};

export default StartPageIdeas;