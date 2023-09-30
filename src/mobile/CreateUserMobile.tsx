/* eslint-disable */

import classes from "./modules/CreateUser.module.scss";
import React, { useEffect, useState } from "react";
import CreateUserMobileMain from "./components/CreateUser/CreateUserMobileMain.tsx";
import CreateUserMobileInput from "./components/CreateUser/CreateUserMobileInput.tsx";
import CreateUserMobileSelect from "./components/CreateUser/CreateUserMobileSelect.tsx";
import CreateUserMobileCourse from "./components/CreateUser/CreateUserMobileCourse.tsx";
import axios from "axios";

export default function CreateUserMobile() {
  const [openTelegramModal, setOpenTelegramModal] = React.useState(false);
  const [openDescriptionModal, setOpenDescriptionModal] = React.useState(false);
  const [openNameModal, setOpenNameModal] = React.useState(false);
  const [name, setName] = React.useState("Написать");
  const [description, setDescription] = React.useState("Написать");
  const [telegramName, setTelegramName] = React.useState("Написать");
  const [openGroupModal, setOpenGroupModal] = React.useState(false);
  const [openCourseModal, setOpenCourseModal] = React.useState(false);
  const [group, setGroup] = React.useState("Выбрать");
  const [groups, setGroups] = React.useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const [course, setCourse] = useState("Выбрать");
  const courses = ["1 курс", "2 курс", "3 курс", "4 курс"];
  useEffect(() => {
    const getGroups = async () => {
      const response = await axios.get(
        "https://stockapi.netlify.app/api/meta.getActual",
      );
      setGroups(response.data.response.data.groups);
    };
    getGroups();
  }, []);
  return (
    <div className={classes["create"]}>
      <CreateUserMobileMain
        setOpenTelegramModal={setOpenTelegramModal}
        setOpenCourseModal={setOpenCourseModal}
        setOpenGroupModal={setOpenGroupModal}
        setOpenNameModal={setOpenNameModal}
        setOpenDescriptionModal={setOpenDescriptionModal}
        telegramName={telegramName}
        group={group}
        course={course}
        name={name}
        description={description}
      />
      {openTelegramModal ? (
        <CreateUserMobileInput
          inputValue={telegramName}
          setOpen={setOpenTelegramModal}
          setInputValue={setTelegramName}
          title={"Telegram"}
        />
      ) : (
        ""
      )}
      {openGroupModal ? (
        <CreateUserMobileSelect
          setOpenGroupModal={setOpenGroupModal}
          setSelectValue={setGroup}
          setActiveItem={setActiveItem}
          activeItem={activeItem}
          groups={groups}
          course={course}
          setCourse={setCourse}
        />
      ) : (
        ""
      )}
      {openCourseModal ? (
        <CreateUserMobileCourse
          setOpenCourseModal={setOpenCourseModal}
          setActiveItem={setActiveItem}
          activeItem={activeItem}
          course={course}
          courses={courses}
          setCourse={setCourse}
          setGroup={setGroup}
        />
      ) : (
        ""
      )}
      {openNameModal ? (
        <CreateUserMobileInput
          inputValue={name}
          setOpen={setOpenNameModal}
          setInputValue={setName}
          title={"Отображаемое имя"}
        />
      ) : (
        ""
      )}
      {openDescriptionModal ? (
        <CreateUserMobileInput
          inputValue={description}
          setOpen={setOpenDescriptionModal}
          setInputValue={setDescription}
          title={"Описание"}
        />
      ) : (
        ""
      )}
    </div>
  );
}
