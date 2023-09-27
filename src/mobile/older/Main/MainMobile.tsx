import classes from "./MainMobile.module.scss";
import MainMobileSearch from "./MainMobileSearch.tsx";
import MainMobileCategories from "./MainMobileCategories.tsx";
import MainMobileList from "./MainMobileList.tsx";
import MainMobileSettings from "./MainMobileSettings.tsx";

const MainMobile = () => {
  return (
    <div className={classes["mobile"]}>
      <div className={classes["main__mobile"]}>
        <h1 className={classes["main__mobile-title"]}>Меню</h1>
        <MainMobileList />
        <MainMobileSettings />
      </div>
      <div className={classes["mobile__settings"]}>
        <h1 className={classes["main__mobile-title"]}>Настройки</h1>
        <MainMobileSearch />
        <MainMobileCategories />
      </div>
    </div>
  );
};

export default MainMobile;
