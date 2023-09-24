import classes from "./Sidebar.module.scss";

export default function Icons() {
  return (
    <div className={classes.icons}>
      <img src="/images/close.svg" alt="close" />
      <img src="/images/icon.svg" alt="icon" />
      <img src="/images/zoom.svg" alt="zoom" />
    </div>
  );
}
