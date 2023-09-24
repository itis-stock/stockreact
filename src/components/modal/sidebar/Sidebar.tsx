import Categories from "./Categories.tsx";
import Icons from "./Icons.tsx";
import Search from "./Search.tsx";
import classes from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <Icons />
      <Search />
      <Categories />
    </div>
  );
}
