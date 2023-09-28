import classes from "../modules/CreateUser.module.scss";
import rooster from "/mobile/rooster.svg";
import arrow from "/mobile/arrowleft.svg";
import React, { useState } from "react";
const CreateUserMobileInput = ({
  inputValue,
  setOpenTelegramModal,
  setInputValue,
}: {
  setOpenTelegramModal: React.Dispatch<React.SetStateAction<boolean>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [inputData, setInputData] = useState(inputValue);
  const [mount, setMount] = useState(true);
  return (
    <div
      className={
        mount
          ? [
              classes["createUser__choose"],
              classes["createUser__choose-active"],
            ].join(" ")
          : [
              classes["createUser__choose"],
              classes["createUser__choose-inactive"],
            ].join(" ")
      }
    >
      <h1 className={classes["createUser__choose-title"]}>telegram_nickname</h1>
      <div className={classes["createUser__choose-form"]}>
        <label className={classes["createUser__choose-label"]}>
          <input
            type="text"
            value={inputData}
            placeholder="Введите что-то..."
            className={classes["createUser__choose-input"]}
            onChange={(event) => {
              setInputData(event.target.value);
              setInputValue(event.target.value);
            }}
          />
          <button
            className={classes["createUser__choose-reset"]}
            onClick={() => {
              setInputData("");
              setInputValue("");
            }}
          />
        </label>
      </div>
      <div className={classes["createUser__choose-footer"]}>
        <div
          className={classes["createUser__choose-back"]}
          onClick={() => {
            setMount(false);
            setTimeout(() => {
              setOpenTelegramModal(false);
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

export default CreateUserMobileInput;
