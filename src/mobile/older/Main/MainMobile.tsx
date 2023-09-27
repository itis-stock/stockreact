import classes from "./MainMobile.module.scss";
import MainMobileList from "./MainMobileList.tsx";
import MainMobileSettings from "./MainMobileSettings.tsx";

const MainMobile = () => {
  return (
    <div className={classes["main__mobile"]}>
      <h1 className={classes["main__mobile-title"]}>Меню</h1>
      <MainMobileList/>
      <MainMobileSettings/>
    </div>
  );
};

export default MainMobile;
