import StartPage from '../../components/mobile/StartPage/StartPage.tsx';
import classes from './StartMobile.module.scss';
// import MainMobile from './Main/MainMobile.tsx';

export default function StartMobile() {
  return (
    <div className={classes['mobile__wrapper']}>
      <StartPage />
      {/* <MainMobile /> */}
    </div>
  );
}
