import './scss/StartDesktop.scss';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
export default function StartDesktop() {
  return (
    <div className="start">
      <div className="start__wrapper">
        <img src={logo} alt="logo" className="start__logo" />
        <div className="start__content">
          <div className="start__content-item">Твердо и четко. Новый сток</div>
          <div className="start__content-item">Просто потому что могу и мне похуй в принципе</div>
          <div className="start__content-item">
            <span>Ты можешь разработать буквально все, что ты захочешь на основе моего API</span>
            <span>Хочешь разработать android или ios приложение - вперед</span>
            <span>Хочешь попрактиковаться Java или C# - перепиши мое API на этих языках</span>
            <span>Хочешь разработать сайт на любой технологии - вперед</span>
            <span>Это чистый воды практика для любого</span>
          </div>
        </div>
        <div className="start__socials">
          <a href="https://github.com/itis-stock" className="start__socials-item">
            Github
          </a>
          <a href="https://t.me/lld4n" className="start__socials-item">
            Telegram разработчика
          </a>
        </div>
        <motion.a
          href="https://oauth.vk.com/authorize?client_id=51757279&redirect_uri=http://localhost:5173/check&display=page&scope=groups&response_type=token&v=5.131"
          className="start__vk"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="start__white">Продолжить с VK</span>
          <span className="start__light">Только для тех, кто состоит в оригинальном стоке</span>
        </motion.a>
      </div>

      <div className="start__bottom">
        <Link to="/history" className="start__link">
          1.0.0b
        </Link>
        <Link to="/API" className="start__link">
          API
        </Link>
      </div>
    </div>
  );
}
