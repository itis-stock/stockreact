import classes from "./modules/CreateUser.module.scss";
import React, { useEffect, useState } from "react";
import CreateUserMobileMain from "./components/CreateUserMobileMain.tsx";
import CreateUserMobileInput from "./components/CreateUserMobileInput.tsx";
import CreateUserMobileSelect from "./components/CreateUserMobileSelect.tsx";
import axios from "axios";

export default function CreateUserMobile() {
  const [openTelegramModal, setOpenTelegramModal] = React.useState(false);
  const [telegramName, setTelegramName] = React.useState("");
  const [openGroupModal, setOpenGroupModal] = React.useState(false);
  const [group, setGroup] = React.useState("Выбрать");
  const [groups, setGroups] = React.useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const [course, setCourse] = useState("Курс");
  // useEffect(() => {
  //   const getGroups = async () => {
  //     const response = await axios.get(
  //       "https://stockapi.netlify.app/api/meta.getActual",
  //     );
  //     setGroups(response.data.response.data.groups);
  //   };
  //   getGroups();
  // }, []);
  return (
    <div className={classes["create"]}>
      <CreateUserMobileMain
        setOpenTelegramModal={setOpenTelegramModal}
        telegramName={telegramName}
        setOpenGroupModal={setOpenGroupModal}
        group={group}
      />
      {openTelegramModal ? (
        <CreateUserMobileInput
          inputValue={telegramName}
          setOpenTelegramModal={setOpenTelegramModal}
          setInputValue={setTelegramName}
        />
      ) : (
        ""
      )}
      {openGroupModal ? (
        <CreateUserMobileSelect
          setOpenGroupModal={setOpenGroupModal}
          selectValue={group}
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
    </div>
  );
}
