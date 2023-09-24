import classes from "../Modal.module.scss";

export default function ModalAccountDescription() {
  return (
    <div>
      <div
        className={[
          classes["account__description"],
          classes["account-block"],
        ].join(" ")}
      >
        <div className={classes["account__description-block"]}>
          <span
            className={[
              classes["account__description-title"],
              classes["account-title"],
            ].join(" ")}
          >
            Описание аккаунта
          </span>
          <span
            className={[
              classes["account__description-text"],
              classes["account-text"],
            ].join(" ")}
          >
            краткое описание, максимум 30 символов
          </span>
        </div>
        <span className={[classes["account__description-name"]].join(" ")}>
          бля заебался это делать
        </span>
      </div>
    </div>
  );
}
