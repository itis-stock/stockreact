import classes from "./StartPage.module.scss";


const StartPageInfo = () => {
  const currentVersion: string = "1.0.0"
  return (
    <div className={classes["page__info"]}>
      <span className={classes["current__version"]}>{currentVersion}</span>
      <span className={classes["api"]}>API</span>
    </div>
  );
};

export default StartPageInfo;