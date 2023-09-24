import classes from "../Modal.module.scss";

export default function ModalAccountTelegram() {
  return (
    <div>
      <div
        className={[
          classes["account__telegram"],
          classes["account-block"],
        ].join(" ")}
      >
        <div className={classes["account__telegram-block"]}>
          <span
            className={[
              classes["account__telegram-title"],
              classes["account-title"],
            ].join(" ")}
          >
            Телеграм
          </span>
          <span
            className={[
              classes["account__telegram-text"],
              classes["account-text"],
            ].join(" ")}
          >
            идея в том, чтобы полностью перейти на вход с помощью телеграм
          </span>
        </div>
        <span
          className={[
            classes["account__telegram-name"],
            classes["account-name"],
          ].join(" ")}
        >
          lldan
        </span>
        <div
          className={[
            classes["account__telegram-button"],
            classes["account-button"],
          ].join(" ")}
        >
          изменить
        </div>
      </div>
    </div>
  );
}
