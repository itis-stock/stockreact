import classes from "./MainMobile.module.scss";

const MainMobileSearch = () => {
  return (
    <div>
      <label>
        <input
          type="text"
          placeholder={"Поиск"}
          className={classes["input-search"]}
        />
      </label>
    </div>
  );
};

export default MainMobileSearch;
