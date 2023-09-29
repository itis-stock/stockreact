import React from 'react';
import '../scss/NonFunctional.scss';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

type NonFunctionalPropsType = {
  err: boolean;
};
const texts = [
  'ты попал на ошибку, сочувствую',
  'yarn create vite@latest',
  'завариваем чай',
  'устанавливаем git',
];
export default function NonFunctional({ err }: NonFunctionalPropsType) {
  const [selectedIndex, setSelectedIndex] = React.useState(
    Math.floor(Math.random() * (texts.length - 1)) + 1,
  );

  React.useEffect(() => {
    if (err) {
      setSelectedIndex(0);
    } else {
      setInterval(() => {
        const ind = Math.floor(Math.random() * (texts.length - 1)) + 1;
        setSelectedIndex(ind);
      }, 10000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="non-functional">
      <div className="non-functional__wrapper">
        <img src={logo} alt="logo" className="non-functional__logo" />
        <div className="non-functional__text">{texts[selectedIndex]}...</div>
        {!err ? (
          <div className="non-functional__light">
            Если вы находитесь на этой странице более минуты, то это значит что что-то пошло не так.
            Рекомендуется вернуться на домашнюю страницу и попробовать еще раз
          </div>
        ) : (
          <div className="non-functional__light">
            Попробуйте снова. Если ошибка не пропадет напишите разработчику
          </div>
        )}

        {err ? (
          <Link to="/" className="non-functional__error">
            Вернуться домой
          </Link>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
