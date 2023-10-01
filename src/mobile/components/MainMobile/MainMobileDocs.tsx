import React, { useState } from "react";
import classes from "../../modules/CreateUser.module.scss";
import arrow from "../../images/arrowleft.svg";
import rooster from "../../images/rooster.svg";

const MainMobileDocs = ({
  title,
  setOpenModal,
}: {
  title: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [mount, setMount] = useState(true);
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
      <h1 className={classes["createUser__select-title"]}>{title}</h1>
      <div className={classes["createUser__choose-footer"]}>
        <div
          className={classes["createUser__choose-back"]}
          onClick={() => {
            setMount(false);
            setTimeout(() => {
              setOpenModal(false);
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

export default MainMobileDocs;
