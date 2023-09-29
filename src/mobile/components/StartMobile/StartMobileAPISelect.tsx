import React, { useState } from "react";
import classes from "../../modules/CreateUser.module.scss";
import arrow from "../../images/arrowleft.svg";
import rooster from "../../images/rooster.svg";
import { apiContentType } from "./StartMobileAPI";

type StartMobileAPISelectPropsType = {
  content: apiContentType[];
  title: string;
  setApiSelectModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const StartMobileApiSelect = ({
  content,
  title,
  setApiSelectModal,
}: StartMobileAPISelectPropsType) => {
  const [mount, setMount] = useState(true);
  console.log(content);
  return (
    <div
      className={
        mount
          ? [classes["api"], classes["api-active"]].join(" ")
          : [classes["api"], classes["api-inactive"]].join(" ")
      }
    >
      <h1 className={classes["createUser__select-title"]}>{title}</h1>
      <div className={classes["createUser__select-form"]}>
        <div className={classes["createUser__select-block"]}>
          <div className={classes["createUser__api-info"]}>
            {content.map((elem) => {
              if (elem.type === "subsubtitle") {
                return (
                  <span className={classes["api-subsubtitle"]}>
                    {String(elem.item)}
                  </span>
                );
              } else if (elem.type === "subtitle") {
                return (
                  <span className={classes["api-subtitle"]}>
                    {String(elem.item)}
                  </span>
                );
              } else {
                return (
                  <div className={classes["api-textBlock"]}>
                    {elem.item.map((el) => {
                      if (el.highlight) {
                        return (
                          <span className={classes["api-highlight"]}>
                            {el.text}
                          </span>
                        );
                      } else {
                        return (
                          <span className={classes["api-text"]}>{el.text}</span>
                        );
                      }
                    })}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>

      <div className={classes["createUser__choose-footer"]}>
        <div
          className={classes["createUser__choose-back"]}
          onClick={() => {
            window.scrollTo(0, 0);
            setMount(false);
            setTimeout(() => {
              setApiSelectModal(false);
            }, 300);
          }}
        >
          <img src={arrow} alt="" />
          <span className={classes["createUser__choose-text"]}>Назад</span>
        </div>
        <div className={"createUser__choose-logo"}>
          <img src={rooster} alt="rooster" />
        </div>
      </div>
    </div>
  );
};

export default StartMobileApiSelect;
