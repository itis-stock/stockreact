import classes from "../Modal.module.scss";

export default function ModalAccountStatus() {
  return (
    <div>
      <div
        className={[classes["account__status"], classes["account-block"]].join(
          " ",
        )}
      >
        <div className={classes["account__status-block"]}>
          <span
            className={[
              classes["account__status-title"],
              classes["account-title"],
            ].join(" ")}
          >
            Статус
          </span>
          <span
            className={[
              classes["account__status-text"],
              classes["account-text"],
            ].join(" ")}
          >
            эмодзи, которое высвечивается при каждом посте
          </span>
        </div>
        <img
          src="/images/fish.svg"
          alt=""
          className={classes["account__status-image"]}
        />
        <div
          className={[
            classes["account__status-button"],
            classes["account-button"],
          ].join(" ")}
        >
          изменить
        </div>
      </div>
    </div>
  );
}
