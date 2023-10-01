import logo from "./images/rooster.svg";
import search from "./images/searchIcon.svg";
import slivikr from "./images/slivikr.svg";
import sliviexams from "./images/sliviexams.svg";
import documents from "./images/documents.svg";
import apipizza from "./images/apipizza.svg";
import history from "./images/history.svg";
import smileAccount from "./images/smileAccount.svg";
import addIcon from "./images/addIcon.svg";

import classes from "./modules/MainMobile.module.scss";
import MainMobileSelect from "./components/MainMobile/MainMobileSelect.tsx";
import { useState } from "react";
import StartMobileAPI from "./components/StartMobile/StartMobileAPI.tsx";
import MainMobileExams from "./components/MainMobile/MainMobileExams.tsx";
import MainMobileDocs from "./components/MainMobile/MainMobileDocs.tsx";
import MainMobileTests from "./components/MainMobile/MainMobileTests.tsx";

export default function MainMobile() {
  const [openModalAPI, setOpenModalAPI] = useState(false);
  const [openModalTests, setOpenModalTests] = useState(false);
  const [openModalExams, setOpenModalExams] = useState(false);
  const [openModalDocs, setOpenModalDocs] = useState(false);
  return (
    <div className={classes["mainMobile"]}>
      <h1 className={classes["mainMobile__title"]}>Меню</h1>
      <div className={classes["mainMobile__info"]}>
        <div className={classes["mainMobile__blocks"]}>
          <MainMobileSelect
            title={"Общий поиск"}
            image={search}
            develop={true}
            last={false}
            setOpenModal={() => console.log("в разработке")}
          />
          <MainMobileSelect
            title={"Сливы кр"}
            image={slivikr}
            develop={false}
            last={false}
            setOpenModal={setOpenModalTests}
          />
          <MainMobileSelect
            title={"Сливы экзаменов"}
            image={sliviexams}
            develop={false}
            last={false}
            setOpenModal={setOpenModalExams}
          />
          <MainMobileSelect
            title={"Документы"}
            image={documents}
            develop={false}
            last={false}
            setOpenModal={setOpenModalDocs}
          />
          <MainMobileSelect
            title={"API"}
            image={apipizza}
            develop={false}
            last={false}
            setOpenModal={setOpenModalAPI}
          />
          <MainMobileSelect
            title={"1.0.0"}
            image={history}
            develop={false}
            last={false}
            setOpenModal={() => console.log("в разработке")}
          />
          <MainMobileSelect
            title={"Аккаунт"}
            image={smileAccount}
            develop={true}
            last={false}
            setOpenModal={() => console.log("в разработке")}
          />
          <MainMobileSelect
            title={"Добавление"}
            image={addIcon}
            develop={true}
            last={true}
            setOpenModal={() => console.log("в разработке")}
          />
        </div>
      </div>
      <img src={logo} alt="" className={classes["mainMobile__logo"]} />
      {openModalAPI ? <StartMobileAPI setOpenModal={setOpenModalAPI} /> : ""}
      {openModalTests ? (
        <MainMobileTests title={"Сливы кр"} setOpenModal={setOpenModalTests} />
      ) : (
        ""
      )}
      {openModalExams ? (
        <MainMobileExams
          title={"Сливы экзаменов"}
          setOpenModal={setOpenModalExams}
        />
      ) : (
        ""
      )}
      {openModalDocs ? (
        <MainMobileDocs title={"Документы"} setOpenModal={setOpenModalDocs} />
      ) : (
        ""
      )}
    </div>
  );
}
