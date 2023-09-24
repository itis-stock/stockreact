import classes from "../Modal.module.scss";

export default function ModalAccountLinked() {
  return (
    <div>
      <div
        className={[classes["account__linked"], classes["account-block"]].join(
          " ",
        )}
      >
        <span
          className={[
            classes["account__linked-title"],
            classes["account-title"],
          ].join(" ")}
        >
          Аккаунт привязан
        </span>
        <span
          className={[
            classes["account__linked-name"],
            classes["account-name"],
          ].join(" ")}
        >
          Имя Фамилия
        </span>
        <img src="/images/vk.svg" alt="vk" />
      </div>
    </div>
  );
}
