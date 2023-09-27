import classes from "./MainMobile.module.scss";
import rooster from "/images/rooster.png";

const MainMobileSettings = () => {
  return (
    <div className={classes["main__mobile-settings"]}>
      <span onClick={() => console.log(5)}>Настройки</span>
      <img src={rooster} alt="" />
    </div>
  );
};

export default MainMobileSettings;
