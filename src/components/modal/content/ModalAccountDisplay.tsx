import classes from "../Modal.module.scss";

export default function ModalAccountDisplay() {
  return (
    <div>
      <div
        className={[classes["account__display"], classes["account-block"]].join(
          " ",
        )}
      >
        <span
          className={[
            classes["account__display-title"],
            classes["account-title"],
          ].join(" ")}
        >
          Отображаемое имя
        </span>
        <span className={[classes["account__display-name"]].join(" ")}>
          Имя
        </span>
      </div>
    </div>
  );
}
