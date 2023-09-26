import classes from "./MainMobile.module.scss";


const MainMobileItem = ({name, img} : {name: string; img: string}) => {
  return (
    <div className={classes['main__mobile-item']}>
      <img src={img} alt=""/>
      <span>{name}</span>
    </div>
  );
};

export default MainMobileItem;