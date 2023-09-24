import classes from "../Modal.module.scss";

export default function ModalAccountCourse() {
  return (
    <div>
      <div className={classes["modalContent__course"]}>
        <div className={classes["modalContent__course-block"]}>
          <span
            className={[
              classes["modalContent__course-title"],
              classes["account-title"],
            ].join(" ")}
          >
            Курс
          </span>
          <span
            className={[
              classes["modalContent__course-text"],
              classes["account-text"],
            ].join(" ")}
          >
            подгружается автоматически
          </span>
        </div>
        <span
          className={[
            classes["modalContent__course-name"],
            classes["account-name"],
          ].join(" ")}
        >
          Первый курс
        </span>
      </div>
    </div>
  );
}
