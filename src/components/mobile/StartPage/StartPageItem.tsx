import classes from "./StartPage.module.scss";
import { JSX } from "react";
import StartPageIdeas from "./StartPageIdeas";

const StartPageItem = ({
  title,
  svg,
  text,
  block,
}: {
  title: string;
  svg: JSX.Element;
  text: string;
  block: boolean;
}) => {
  return (
    <div className={classes["page__item"]}>
      <h2 className={classes["page__item-title"]}>
        <span>{title}</span>
        {svg}
      </h2>
      <span
        className={
          block ? classes["page__github-text"] : classes["page__item-text"]
        }
      >
        {text}
      </span>
      {block ? <StartPageIdeas /> : ""}
    </div>
  );
};

export default StartPageItem;
