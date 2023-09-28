import classes from "./modules/CreateUser.module.scss";
import React from "react";
import CreateUserMobileMain from "./components/CreateUserMobileMain.tsx";
import CreateUserMobileInput from "./components/CreateUserMobileInput.tsx";
import CreateUserMobileSelect from "./components/CreateUserMobileSelect.tsx";

export default function CreateUserMobile() {
  const [openTelegramModal, setOpenTelegramModal] = React.useState(false);
  const [telegramName, setTelegramName] = React.useState("");
  const [openGroupModal, setOpenGroupModal] = React.useState(false);
  const [group, setGroup] = React.useState("");
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
        />
      ) : (
        ""
      )}
    </div>
  );
}
