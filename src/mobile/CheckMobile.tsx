import classes from "./modules/CheckMobile.module.scss";
import logo from "../../public/mobile/logo.svg";
import rooster from "../../public/mobile/rooster.svg";
export default function CheckMobile() {
  return (
    <div className={classes["check"]}>
      <div className={classes["check__logo"]}>
        <img src={logo} alt="" />
      </div>
      <div className={classes["check__info"]}>
        <span className={classes["check__info-title"]}>
          Устанавливаем git...
        </span>
        <p className={classes["check__info-text"]}>
          Если вы находитесь на этой странице более минуты, то это значит что
          что-то пошло не так. Рекомендуется вернуться на домашнюю страницу и
          попробовать еще раз.
        </p>
      </div>
      <div className="check__rooster">
        <img src={rooster} alt="" />
      </div>
    </div>
  );
}
