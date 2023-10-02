import classes from './modules/CheckMobile.module.scss';
import logo from './images/logo.svg';
import rooster from './images/rooster.svg';
import { Link } from 'react-router-dom';

export default function ErrorPageMobile() {
  return (
    <div className={classes['check']}>
      <div className={classes['check__info']}>
        <div className={classes['check__logo']}>
          <img src={logo} alt="" />
        </div>
        <span className={classes['check__info-title']}>чел, ты попал на ошибку...</span>
        <p className={classes['check__info-text']}>
          Попробуйте снова. Если ошибка не пропадет напишите разработчику
        </p>
      </div>
      <Link to="/" className={classes['check__info-button']}>
        Гоу хоум
      </Link>
      <div className="check__rooster">
        <img src={rooster} alt="" />
      </div>
    </div>
  );
}
