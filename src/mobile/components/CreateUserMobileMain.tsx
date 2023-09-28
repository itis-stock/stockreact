import classes from "../modules/CreateUser.module.scss";
import arrow from "/mobile/arrowright.svg";
import rocket from "/mobile/rocket.svg";
import rooster from "/mobile/rooster.svg";
import React from "react";

const CreateUserMobileMain = ({
  setOpenTelegramModal,
  telegramName,
  setOpenGroupModal,
  group,
}: {
  setOpenTelegramModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenGroupModal: React.Dispatch<React.SetStateAction<boolean>>;
  telegramName: string;
  group: string;
}) => {
  function checkString(str: string): string {
    if (str.length >= 41) return "";
    if (window.innerWidth <= 500) {
      if (str.length <= 8) {
        return str;
      } else {
        str = str.slice(0, 8) + "...";
        return str;
      }
    } else {
      if (str.length <= 20) {
        return str;
      } else {
        str = str.slice(0, 20) + "...";
        return str;
      }
    }
  }

  return (
    <div className={classes["createUser"]}>
      <h1 className={classes["createUser__title"]}>Создание аккаунта</h1>
      <div className={classes["createUser__item"]}>
        <div className={classes["createUser__item-title"]}>Обязательные</div>
        <div className={classes["createUser__item-info"]}>
          <div className={classes["createUser__item-block"]}>
            <span className={classes["createUser__item-name"]}>VK ID</span>
            <span className={classes["createUser__item-value"]}>21321314</span>
            <span className={classes["start__line"]}></span>
          </div>
          <div className={classes["createUser__item-block"]}>
            <span className={classes["createUser__item-name"]}>Имя VK</span>
            <span className={classes["createUser__item-value"]}>
              Марат Солнцев
            </span>
            <span className={classes["start__line"]}></span>
          </div>
          <div
            className={classes["createUser__item-block"]}
            onClick={() => setOpenTelegramModal(true)}
          >
            <span className={classes["createUser__item-name"]}>Telegram</span>
            <span className={classes["createUser__item-value"]}>
              {telegramName}
            </span>
            <img src={arrow} alt="arrow" />
            <span className={classes["start__line"]}></span>
          </div>
          <div
            className={classes["createUser__item-block"]}
            onClick={() => setOpenGroupModal(true)}
          >
            <span className={classes["createUser__item-name"]}>Группа</span>
            <span className={classes["createUser__item-value"]}>{group}</span>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div
        className={[
          classes["createUser__item"],
          classes["createUser__lastItem"],
        ].join(" ")}
      >
        <div className={classes["createUser__item-title"]}>Необязательные</div>
        <div className={classes["createUser__item-info"]}>
          <div className={classes["createUser__item-block"]}>
            <span className={classes["createUser__item-name"]}>Аватарка</span>
            <span className={classes["createUser__item-value"]}>
              <img src={rocket} alt="luv" />
            </span>
            <span className={classes["start__line"]}></span>
          </div>
          <div className={classes["createUser__item-block"]}>
            <span className={classes["createUser__item-name"]}>
              Отображаемое имя
            </span>
            <span className={classes["createUser__item-value"]}>
              {checkString("0000000000000000000000000000000000000000")}
            </span>
            <span className={classes["start__line"]}></span>
            <img src={arrow} alt="arrow" />
          </div>
          <div className={classes["createUser__item-block"]}>
            <span className={classes["createUser__item-name"]}>Описание</span>
            <span className={classes["createUser__item-value"]}>
              {checkString("тупо похуй мне")}
            </span>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
      <button type="submit" className={classes["createUser__button"]}>
        Принять
      </button>
      <img src={rooster} alt="" />
    </div>
  );
};

export default CreateUserMobileMain;
