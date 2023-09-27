import MainMobileCategory from "./MainMobileCategory.tsx";
import rocket from "/images/rocket.svg";
import palette from "/images/palette.svg";
import shortCats from "/images/shortcats.svg";
import robot from "/images/robot.svg";
import classes from "./MainMobile.module.scss";
const MainMobileCategories = () => {
  return (
    <div className={classes["category__list"]}>
      <MainMobileCategory title={"Сафин Ильдан"} image={rocket} />
      <MainMobileCategory title={"Оформление"} image={palette} />
      <MainMobileCategory title={"Шорткаты"} image={shortCats} />
      <MainMobileCategory title={"Преподаватели"} image={robot} />
    </div>
  );
};

export default MainMobileCategories;
