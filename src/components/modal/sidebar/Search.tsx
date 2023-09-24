import classes from "./Sidebar.module.scss";

export default function Search() {
  return (
    <div>
      <input
        type="text"
        placeholder="Поиск"
        className={classes["search__input"]}
      />
    </div>
  );
}
