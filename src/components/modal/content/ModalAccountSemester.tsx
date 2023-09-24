import classes from "../Modal.module.scss";

export default function ModalAccountSemester() {
  return (
    <div>
      <div className={classes["modalContent__semester"]}>
        <div className={classes["modalContent__semester-block"]}>
          <span
            className={[
              classes["modalContent__semester-title"],
              classes["account-title"],
            ].join(" ")}
          >
            Семестр
          </span>
          <span
            className={[
              classes["modalContent__semester-text"],
              classes["account-text"],
            ].join(" ")}
          >
            определяется автоматически, смена семестра происходит 2 сентября и 2
            февраля
          </span>
        </div>
        <span
          className={[
            classes["modalContent__semester-name"],
            classes["account-name"],
          ].join(" ")}
        >
          Второй семестр
        </span>
      </div>
    </div>
  );
}
