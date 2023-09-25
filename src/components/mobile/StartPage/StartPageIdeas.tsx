import classes from "./StartPage.module.scss";

const StartPageIdeas = () => {
  return (
    <div className={classes["page__idea"]}>
      <div className={classes["page__idea-item"]}>
        <h3 className={classes["item-title"]}>Хочешь разработать бота для telegram</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" fill="none"><path fill="#000" d="M1.609 1.36c0 .51.361.847.91.847h2.016l1.819-.174-1.796 1.672L.268 7.98A.907.907 0 0 0 0 8.64c0 .51.338.859.863.859a.926.926 0 0 0 .63-.279l4.301-4.285 1.69-1.811-.186 1.718v2.114c0 .557.338.917.851.917.513 0 .851-.348.851-.894V1.475C9 .883 8.732.5 8.044.5H2.541c-.536 0-.932.348-.932.86Z"/></svg>
      </div>
      <div className={classes["page__idea-item"]}>
        <h3 className={classes["item-title"]}>Шаришь за React и хочешь добавить новую ультракрутую фичу</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" fill="none"><path fill="#000" d="M1.609 1.36c0 .51.361.847.91.847h2.016l1.819-.174-1.796 1.672L.268 7.98A.907.907 0 0 0 0 8.64c0 .51.338.859.863.859a.926.926 0 0 0 .63-.279l4.301-4.285 1.69-1.811-.186 1.718v2.114c0 .557.338.917.851.917.513 0 .851-.348.851-.894V1.475C9 .883 8.732.5 8.044.5H2.541c-.536 0-.932.348-.932.86Z"/></svg>
      </div>
      <div className={classes["page__idea-item"]}>
        <h3 className={classes["item-title"]}>Хочешь разработать приложение на android/ios</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" fill="none"><path fill="#000" d="M1.609 1.36c0 .51.361.847.91.847h2.016l1.819-.174-1.796 1.672L.268 7.98A.907.907 0 0 0 0 8.64c0 .51.338.859.863.859a.926.926 0 0 0 .63-.279l4.301-4.285 1.69-1.811-.186 1.718v2.114c0 .557.338.917.851.917.513 0 .851-.348.851-.894V1.475C9 .883 8.732.5 8.044.5H2.541c-.536 0-.932.348-.932.86Z"/></svg>
      </div>
      <div className={classes["page__idea-item"]}>
        <h3 className={classes["item-title"]}>Ты смешарик, но у тебя есть гениальная идея</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" fill="none"><path fill="#000" d="M1.609 1.36c0 .51.361.847.91.847h2.016l1.819-.174-1.796 1.672L.268 7.98A.907.907 0 0 0 0 8.64c0 .51.338.859.863.859a.926.926 0 0 0 .63-.279l4.301-4.285 1.69-1.811-.186 1.718v2.114c0 .557.338.917.851.917.513 0 .851-.348.851-.894V1.475C9 .883 8.732.5 8.044.5H2.541c-.536 0-.932.348-.932.86Z"/></svg>
      </div>
    </div>
  );
};

export default StartPageIdeas;