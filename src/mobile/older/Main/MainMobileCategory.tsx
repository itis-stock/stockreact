import classes from "./MainMobile.module.scss";
import arrow from "/images/arrowright.svg";

const MainMobileCategory = ({
  title,
  image,
}: {
  title: string;
  image: string;
}) => {
  return (
    <div className={classes["category__item"]}>
      <img src={image} alt="" />
      <span>{title}</span>
      <img src={arrow} alt="" />
    </div>
  );
};

export default MainMobileCategory;
