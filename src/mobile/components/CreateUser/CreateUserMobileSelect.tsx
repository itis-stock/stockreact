/* eslint-disable */
import React, { useState } from "react";
import classes from "../../modules/CreateUser.module.scss";
import arrow from "../../images/arrowleft.svg";
import arrowSelect from "../../images/arrowdown.svg";
import rooster from "../../images/rooster.svg";
const CreateUserMobileSelect = ({
  setOpenGroupModal,
  setSelectValue,
  setActiveItem,
  activeItem,
  groups,
  course,
}: {
  setOpenGroupModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
  setActiveItem: (value: ((prevState: null) => null) | null) => void;
  activeItem: any;
  groups: any;
  course: string;
  setCourse: (value: ((prevState: string) => string) | string) => void;
}) => {
  const [mount, setMount] = useState(true);
  const groupsCourse1 = groups.filter(
    (item: { course: string }) => item.course == "1",
  );
  const groupsCourse2 = groups.filter(
    (item: { course: string }) => item.course == "2",
  );
  const groupsCourse3 = groups.filter(
    (item: { course: string }) => item.course == "3",
  );
  const groupsCourse4 = groups.filter(
    (item: { course: string }) => item.course == "4",
  );
  groupsCourse1.sort((a: { group: number }, b: { group: number }) =>
    a.group > b.group ? 1 : -1,
  );
  groupsCourse2.sort((a: { group: number }, b: { group: number }) =>
    a.group > b.group ? 1 : -1,
  );
  groupsCourse3.sort((a: { group: number }, b: { group: number }) =>
    a.group > b.group ? 1 : -1,
  );
  groupsCourse4.sort((a: { group: number }, b: { group: number }) =>
    a.group > b.group ? 1 : -1,
  );

  const groupsCourse = [
    groupsCourse1,
    groupsCourse2,
    groupsCourse3,
    groupsCourse4,
  ];

  function select(event: React.SyntheticEvent) {
    const target = event.target as HTMLInputElement;
    setSelectValue(target.value);
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
      <h1 className={classes["createUser__select-title"]}>Группа</h1>
      <div className={classes["createUser__select-form"]}>
        <div className={classes["createUser__select-block"]}>
          <div className={classes["createUser__select-info"]}>
            {groupsCourse[+course.charAt(0) - 1].map(
              (item: any, index: number) => (
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
                  {index !== groupsCourse[+course.charAt(0) - 1].length - 1 ? (
                    <span className={classes["createUser__select-line"]}></span>
                  ) : (
                    ""
                  )}
                </label>
              ),
            )}
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
