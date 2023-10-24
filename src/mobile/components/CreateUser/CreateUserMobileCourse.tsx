import React, { useState } from "react";
import classes from "../../modules/CreateUser.module.scss";
import arrowSelect from "../../images/arrowdown.svg";

const CreateUserMobileCourse = ({
  course,
  setCourse,
  courses,
  setGroup,
}: {
  courses: string[];
  course: string;
  setCourse: React.Dispatch<React.SetStateAction<string>>;
  setGroup: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [activeItem, setActiveItem] = useState(course);
  const [selectData, setSelectData] = useState(course);

  function select(event: React.SyntheticEvent) {
    const target = event.target as HTMLInputElement;
    if (selectData === target.value) {
      setSelectData(target.value);
      setCourse(target.value);
    } else {
      setSelectData(target.value);
      setCourse(target.value);
      setGroup("Выбрать");
    }
  }
  return (
    <>
      <div className={classes["createUser__select-form"]}>
        <div className={classes["createUser__select-block"]}>
          <div className={classes["createUser__select-info"]}>
            {courses.map((item, index: number) => (
              <label
                key={index}
                className={classes["createUser__select-label"]}
              >
                <input
                  type="button"
                  value={item}
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
                {index !== courses.length - 1 ? (
                  <span className={classes["createUser__select-line"]}></span>
                ) : (
                  ""
                )}
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUserMobileCourse;
