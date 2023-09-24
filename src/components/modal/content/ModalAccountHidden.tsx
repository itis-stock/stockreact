import classes from "../Modal.module.scss";
import Switch from "../../universal/Switch/Switch.tsx";

export default function ModalAccountHidden() {
  return (
    <div>
      <div
        className={[classes["account__hidden"], classes["account-block"]].join(
          " ",
        )}
      >
        <div className={classes["account__hidden-block"]}>
          <span
            className={[
              classes["account__hidden-title"],
              classes["account-title"],
            ].join(" ")}
          >
            Скрыть аккаунт
          </span>
          <span
            className={[
              classes["account__hidden-text"],
              classes["account-text"],
            ].join(" ")}
          >
            аккаунт будет Анонимом
          </span>
        </div>
        <Switch func={(isHandled) => console.log(isHandled)} />
      </div>
    </div>
  );
}
