import classes from "./MainMobile.module.scss";
import MainMobileItem from "./MainMobileItem.tsx";
import search from "/images/search.svg";
import document from "/images/document.svg";
import cookie from "/images/cookie.svg";
import account from "/images/smile.svg";
import pencil from "/images/pencil.svg";
import sliv from "/images/slivi.svg";

const MainMobileList = () => {
  return (
    <div className={classes["main__mobile-list"]}>
      <MainMobileItem name={"Общий поиск"} img={search}/>
      <MainMobileItem name={"Сливы кр"} img={sliv}/>
      <MainMobileItem name={"Сливы экзаменов"} img={cookie}/>
      <MainMobileItem name={"Документы"} img={document}/>
      <MainMobileItem name={"Аккаунт"} img={account}/>
      <MainMobileItem name={"Добавление"} img={pencil}/>
    </div>
  );
};

export default MainMobileList;