import React, { useState } from "react";
import classes from "../modules/CreateUser.module.scss";
import arrow from "/mobile/arrowleft.svg";
import arrowSelect from "/mobile/arrowdown.svg";
import rooster from "/mobile/rooster.svg";

const CreateUserMobileSelect = ({
  setOpenGroupModal,
  selectValue,
  setSelectValue,
}: {
  setOpenGroupModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
  selectValue: string;
}) => {
  const [mount, setMount] = React.useState(true);
  const [selectData, setSelectData] = useState(selectValue);
  const [selected, setSelected] = useState(false);

  function select(event) {
    setSelectData(event.target.value);
    setSelectValue(event.target.value);
    setSelected(true);
  }
  return (
    <div
      className={
        mount
          ? [
              classes["createUser__select"],
              classes["createUser__select-active"],
            ].join(" ")
          : [
              classes["createUser__select"],
              classes["createUser__select-inactive"],
            ].join(" ")
      }
    >
      <h1 className={classes["createUser__select-title"]}>group</h1>
      <div className={classes["createUser__select-form"]}>
        <div className={classes["createUser__select-block"]}>
          <div className={classes["createUser__select-name"]}>1 курс</div>
          <div className={classes["createUser__select-info"]}>
            <label className={classes["createUser__select-label"]}>
              <input
                type="button"
                value={"11-301"}
                className={classes["createUser__select-input"]}
                onClick={(event) => select(event)}
              />
              {selected ? (
                <img
                  src={arrowSelect}
                  alt="select"
                  className={classes["createUser__select-arrow"]}
                />
              ) : (
                ""
              )}
              <span className={classes["createUser__select-line"]}></span>
            </label>
            <label className={classes["createUser__select-label"]}>
              <input
                type="button"
                value={"11-302"}
                className={classes["createUser__select-input"]}
                onClick={(event) => select(event)}
              />
              {selected ? (
                <img
                  src={arrowSelect}
                  alt="select"
                  className={classes["createUser__select-arrow"]}
                />
              ) : (
                ""
              )}
              <span className={classes["createUser__select-line"]}></span>
            </label>
            <label className={classes["createUser__select-label"]}>
              <input
                type="button"
                value={"11-303"}
                className={classes["createUser__select-input"]}
                onClick={(event) => select(event)}
              />
              {selected ? (
                <img
                  src={arrowSelect}
                  alt="select"
                  className={classes["createUser__select-arrow"]}
                />
              ) : (
                ""
              )}
              <span className={classes["createUser__select-line"]}></span>
            </label>
            <label className={classes["createUser__select-label"]}>
              <input
                type="button"
                value={"11-304"}
                className={classes["createUser__select-input"]}
                onClick={(event) => select(event)}
              />
              {selected ? (
                <img
                  src={arrowSelect}
                  alt="select"
                  className={classes["createUser__select-arrow"]}
                />
              ) : (
                ""
              )}
              <span className={classes["createUser__select-line"]}></span>
            </label>
            <label className={classes["createUser__select-label"]}>
              <input
                type="button"
                value={"11-305"}
                className={classes["createUser__select-input"]}
                onClick={(event) => select(event)}
              />
              {selected ? (
                <img
                  src={arrowSelect}
                  alt="select"
                  className={classes["createUser__select-arrow"]}
                />
              ) : (
                ""
              )}
            </label>
          </div>
        </div>
      </div>
      <div className={classes["createUser__choose-footer"]}>
        <div
          className={classes["createUser__choose-back"]}
          onClick={() => {
            setMount(false);
            setTimeout(() => {
              setOpenGroupModal(false);
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

export default CreateUserMobileSelect;
