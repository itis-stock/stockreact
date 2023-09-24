import classes from "../Modal.module.scss";

export default function ModalAccountBackground() {
  return (
    <div>
      <div
        className={[
          classes["account__background"],
          classes["account-block"],
        ].join(" ")}
      >
        <div className={classes["account__background-block"]}>
          <span
            className={[
              classes["account__background-title"],
              classes["account-title"],
            ].join(" ")}
          >
            Фон аккаунта
          </span>
          <span
            className={[
              classes["account__background-text"],
              classes["account-text"],
            ].join(" ")}
          >
            фотография, однотонный цвет на профиле аккаунта
          </span>
        </div>
        <div className={[classes["account__background-image"]].join(" ")}></div>
        <div
          className={[
            classes["account__background-button"],
            classes["account-button"],
          ].join(" ")}
        >
          изменить
        </div>
      </div>
    </div>
  );
}
