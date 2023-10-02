import arrow from '../../images/arrowright.svg';
import classes from '../../modules/MainMobile.module.scss';

const MainMobileSelect = ({
  image,
  title,
  develop,
  setOpenModal,
}: {
  image: string;
  title: string;
  develop: boolean;
  setOpenModal: () => void;
}) => {
  return (
    <>
      <div className={classes['mainMobile__block']} onClick={() => setOpenModal()}>
        <img src={image} alt="icon" />
        <span
          className={
            develop
              ? classes['mainMobile__block-inactiveTitle']
              : classes['mainMobile__block-title']
          }
        >
          {title}
        </span>
        {develop ? (
          <div className={classes['mainMobile__block-develop']}>в разработке</div>
        ) : (
          <img src={arrow} />
        )}
      </div>
    </>
  );
};

export default MainMobileSelect;
