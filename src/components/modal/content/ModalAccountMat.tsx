import classes from "../Modal.module.scss";
import Switch from "../../universal/Switch/Switch.tsx";

export default function ModalAccountMat() {
  return (
    <div>
      <div
        className={[classes["account__mat"], classes["account-block"]].join(
          " ",
        )}
      >
        <div className={classes["account__mat-block"]}>
          <span
            className={[
              classes["account__mat-title"],
              classes["account-title"],
            ].join(" ")}
          >
            Я боюсь мата
          </span>
          <span
            className={[
              classes["account__mat-text"],
              classes["account-text"],
            ].join(" ")}
          >
            Да, такие люди тоже бывают
          </span>
        </div>
        <Switch func={(isHandled) => console.log(isHandled)} />
      </div>
    </div>
  );
}
