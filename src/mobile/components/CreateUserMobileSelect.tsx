import React, { useState } from "react";
import classes from "../modules/CreateUser.module.scss";
import arrow from "/mobile/arrowleft.svg";
import arrowSelect from "/mobile/arrowdown.svg";
import rooster from "/mobile/rooster.svg";

const CreateUserMobileSelect = ({
  setOpenGroupModal,
  selectValue,
  setSelectValue,
  groups,
}: {
  setOpenGroupModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
  selectValue: string;
}) => {
  const [mount, setMount] = useState(true);
  const [selectData, setSelectData] = useState(selectValue);
  const [selected, setSelected] = useState(false);
  const [activeItem, setActiveItem] = useState(selectValue);

  const groupsCourse1 = groups.filter((item) => item.course == "1");
  groupsCourse1.sort((a, b) => (a.group > b.group ? 1 : -1));
  const groupsCourse2 = groups.filter((item) => item.course == "2");
  const groupsCourse3 = groups.filter((item) => item.course == "3");
  const groupsCourse4 = groups.filter((item) => item.course == "4");
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
            {groupsCourse1.map((item, index) => (
              <label
                key={index}
                className={classes["createUser__select-label"]}
              >
                <input
                  type="button"
                  value={item.group}
                  className={classes["createUser__select-input"]}
                  onClick={(event) => {
                    select(event);
                    setActiveItem(item);
                  }}
                />
                {activeItem === item ? (
                  <img
                    src={arrowSelect}
                    alt="select"
                    className={classes["createUser__select-arrow"]}
                  />
                ) : (
                  ""
                )}
              </label>
            ))}
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
