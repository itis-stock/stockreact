import React, { useState } from "react";
import classes from "../modules/CreateUser.module.scss";
import arrow from "/mobile/arrowleft.svg";
import arrowSelect from "/mobile/arrowdown.svg";
import rooster from "/mobile/rooster.svg";
import CreateUserMobileCourse from "./CreateUserMobileCourse.tsx";

const CreateUserMobileSelect = ({
  setOpenGroupModal,
  selectValue,
  setSelectValue,
  activeItem,
  groups,
  setActiveItem,
  setCourse,
  course,
}: {
  setOpenGroupModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
  selectValue: string;
}) => {
  const [mount, setMount] = useState(true);
  const [selectData, setSelectData] = useState(selectValue);
  const [showModal, setShowModal] = useState(false);
  const courses = ["1 курс", "2 курс", "3 курс", "4 курс"];
  const groupsCourse1 = groups.filter((item) => item.course == "1");
  const groupsCourse2 = groups.filter((item) => item.course == "2");
  const groupsCourse3 = groups.filter((item) => item.course == "3");
  const groupsCourse4 = groups.filter((item) => item.course == "4");
  groupsCourse1.sort((a, b) => (a.group > b.group ? 1 : -1));
  groupsCourse2.sort((a, b) => (a.group > b.group ? 1 : -1));
  groupsCourse3.sort((a, b) => (a.group > b.group ? 1 : -1));
  groupsCourse4.sort((a, b) => (a.group > b.group ? 1 : -1));

  const groupsCourse = [
    groupsCourse1,
    groupsCourse2,
    groupsCourse3,
    groupsCourse4,
  ];

  function select(event) {
    setSelectData(event.target.value);
    setSelectValue(event.target.value);
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
          <input
            type="button"
            className={classes["createUser__select-name"]}
            value={course}
            onClick={() => setShowModal(true)}
          />
          {groups.length >= 1 && course !== "Курс" ? (
            <div className={classes["createUser__select-info"]}>
              {groupsCourse[+course.charAt(0) - 1].map(
                (item, index: number) => (
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
                    {index !==
                    groupsCourse[+course.charAt(0) - 1].length - 1 ? (
                      <span
                        className={classes["createUser__select-line"]}
                      ></span>
                    ) : (
                      ""
                    )}
                  </label>
                ),
              )}
            </div>
          ) : (
            <span
              style={{
                color: "rgba(255, 255, 255, 0.30)",
                fontWeight: 500,
              }}
            >
              Выберите курс для отображения групп
            </span>
          )}
        </div>
      </div>
      {showModal ? (
        <CreateUserMobileCourse
          course={course}
          courses={courses}
          setCourse={setCourse}
          setShowModal={setShowModal}
        />
      ) : (
        ""
      )}
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
