import classes from "../Modal.module.scss";

export default function ModalAccountPhoto() {
  return (
    <div>
      <div
        className={[classes["account__photo]"], classes["account-block"]].join(
          " ",
        )}
      >
        <span
          className={[
            classes["account__photo-title"],
            classes["account-title"],
          ].join(" ")}
        >
          Фотография аккаунта
        </span>
        <img
          src="/images/rocket.svg"
          alt=""
          className={classes["account__photo-image"]}
        />
        <div
          className={[
            classes["account__photo-button"],
            classes["account-button"],
          ].join(" ")}
        >
          изменить
        </div>
      </div>
    </div>
  );
}
