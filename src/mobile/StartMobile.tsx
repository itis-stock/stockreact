import classes from "./modules/StartMobile.module.scss";

import logo from "./images/logo.svg";
import arrow from "./images/arrowright.svg";
import CheckMobileAPI from "./components/StartMobile/StartMobileAPI.tsx";
import React from "react";

export default function StartMobile() {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div className={classes["start"]}>
      <div className={classes["start__page"]}>
        <div className={classes["start__logo"]}>
          <img src={logo} alt="logo" />
        </div>
        <div className={[classes["start__item"], classes["item"]].join(" ")}>
          <div
            className={[classes["start__item-title"], classes["title"]].join(
              " ",
            )}
          >
            Что?
          </div>
          <div
            className={[classes["start__item-text"], classes["text"]].join(" ")}
          >
            Хз, что тут объяснять. Твердо и четко. Новый сток
          </div>
        </div>
        <div className={[classes["start__item"], classes["item"]].join(" ")}>
          <div
            className={[classes["start__item-title"], classes["title"]].join(
              " ",
            )}
          >
            Зачем?
          </div>
          <div
            className={[classes["start__item-text"], classes["text"]].join(" ")}
          >
            Просто потому что могу и мне похуй в принципе
          </div>
        </div>
        <div className={classes["start__info"]}>
          <a
            href="https://github.com/itis-stock"
            className={classes["start__github"]}
          >
            <div className={classes["start__github-text"]}>Github</div>
            <div className={classes["start__github-icon"]}>
              <img src={arrow} alt="arrow" />
            </div>
          </a>
          <span className={classes["start__line"]}></span>
          <a href="https://t.me/lld4n" className={classes["start__telegram"]}>
            <div className={classes["start__telegram-text"]}>
              Telegram разработчика
            </div>
            <div className={classes["start__telegram-icon"]}>
              <img src={arrow} alt="arrow" />
            </div>
          </a>
        </div>
        <p className={classes["start__info-text"]}>
          Ты можешь разработать своё приложение на основе моего API, будь то
          Android-приложение или бот для Telegram. Можно создать буквально всё,
          что ты захочешь.
        </p>
        <a
          href="https://oauth.vk.com/authorize?client_id=51757279&redirect_uri=http://localhost:5173/check&display=page&scope=groups&response_type=token&v=5.131"
          className={classes["start__button"]}
        >
          <span className={classes["start__button-title"]}>
            Продолжить с VK
          </span>
          <span className={classes["start__button-text"]}>
            Только для тех, кто состоит в оригинальном стоке
          </span>
        </a>
        <div className={classes["start__footer"]}>
          <div className="start__version">1.0.0</div>
          <div className="start__api" onClick={() => setOpenModal(true)}>
            API
          </div>
        </div>
      </div>
      {openModal ? <CheckMobileAPI setOpenModal={setOpenModal} /> : ""}
    </div>
  );
}
