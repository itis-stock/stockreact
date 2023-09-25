import React from 'react';
import logoText from '/images/logo-text.png';
import rooster from '/images/Rooster.png';
import './StartDesktop.scss';
import Switch from '../../components/universal/Switch/Switch';
import { motion } from 'framer-motion';
export default function StartDesktop() {
  const [noiseOn, setNoiseOn] = React.useState(false);
  return (
    <div className={noiseOn ? 'start noiseOn' : 'start'}>
      <div className="start__logo">
        <img src={logoText} alt="Новый сток" className="start__logo-text" />
        <img src={rooster} alt="" className="start__rooster" />
      </div>
      <div className="start__content">
        <div className="start__item">
          <div className="start__item-top">
            <div>Что?</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" fill="none">
              <path
                fill="#000"
                d="M3.624 8.484c.64 0 1.016-.378 1.016-.838v-.142c0-.66.413-1.085 1.279-1.628C7.135 5.121 8 4.436 8 3.021 8 1.062 6.144 0 4.013 0 1.868 0 .45.968.1 2.053c-.062.189-.1.378-.1.578 0 .531.439.814.853.814.439 0 .702-.188.928-.472l.225-.283c.44-.684 1.104-1.085 1.931-1.085 1.141 0 1.881.613 1.881 1.51 0 .802-.526 1.192-1.617 1.912-.903.59-1.58 1.215-1.58 2.371v.154c0 .613.363.932 1.003.932ZM3.599 12c.727 0 1.354-.543 1.354-1.227s-.614-1.227-1.354-1.227c-.74 0-1.354.554-1.354 1.227 0 .672.626 1.227 1.354 1.227Z"
              />
            </svg>
          </div>
          <div className="start__item-bottom">
            <div>Хз, что тут объяснять. Твердо и четко. Новый сток.</div>
          </div>
        </div>
        <div className="start__item">
          <div className="start__item-top">
            <div>Зачем?</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" fill="none">
              <path
                fill="#000"
                d="M3.624 8.484c.64 0 1.016-.378 1.016-.838v-.142c0-.66.413-1.085 1.279-1.628C7.135 5.121 8 4.436 8 3.021 8 1.062 6.144 0 4.013 0 1.868 0 .45.968.1 2.053c-.062.189-.1.378-.1.578 0 .531.439.814.853.814.439 0 .702-.188.928-.472l.225-.283c.44-.684 1.104-1.085 1.931-1.085 1.141 0 1.881.613 1.881 1.51 0 .802-.526 1.192-1.617 1.912-.903.59-1.58 1.215-1.58 2.371v.154c0 .613.363.932 1.003.932ZM3.599 12c.727 0 1.354-.543 1.354-1.227s-.614-1.227-1.354-1.227c-.74 0-1.354.554-1.354 1.227 0 .672.626 1.227 1.354 1.227Z"
              />
            </svg>
          </div>
          <div className="start__item-bottom">
            <div>Потому что тупо могу и мне похуй в принципе.</div>
          </div>
        </div>
        <div className="start__item">
          <div className="start__item-top">
            <div>Github</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
              <g clipPath="url(#a)">
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M6 0c3.314 0 6 2.754 6 6.152 0 2.717-1.717 5.022-4.1 5.837-.304.06-.412-.132-.412-.296 0-.202.007-.865.007-1.688 0-.574-.192-.948-.407-1.139 1.336-.152 2.74-.673 2.74-3.035 0-.672-.233-1.22-.618-1.652.062-.155.268-.78-.059-1.628 0 0-.503-.165-1.648.63A5.637 5.637 0 0 0 6 2.976c-.51.002-1.023.07-1.502.207-1.146-.796-1.65-.63-1.65-.63-.326.846-.12 1.472-.059 1.627-.383.431-.618.98-.618 1.652 0 2.356 1.401 2.885 2.734 3.04-.172.154-.327.425-.381.822-.342.158-1.21.43-1.746-.51 0 0-.317-.592-.92-.635 0 0-.585-.008-.04.374 0 0 .392.19.665.9 0 0 .353 1.098 2.022.726.003.514.008.999.008 1.145 0 .163-.11.353-.41.296C1.72 11.176 0 8.87 0 6.152 0 2.754 2.687 0 6 0Z"
                  clipRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h12v12H0z" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="start__item-bottom">
            <div className="light">
              Почему в институте, где тупо все программисты, нет ни одного open-source проекта?
            </div>
            <a href="#" className="start__item-link">
              <div>Хочешь разработать бота для telegram</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="none">
                <path
                  fill="#000"
                  d="M1.609.86c0 .51.361.847.91.847h2.016l1.819-.174-1.796 1.672L.268 7.48A.907.907 0 0 0 0 8.14C0 8.65.338 9 .863 9a.926.926 0 0 0 .63-.279l4.301-4.285 1.69-1.811-.186 1.718v2.114c0 .557.338.917.851.917.513 0 .851-.348.851-.894V.975C9 .383 8.732 0 8.044 0H2.541c-.536 0-.932.348-.932.86Z"
                />
              </svg>
            </a>
            <a href="#" className="start__item-link">
              <div>Шаришь за React и хочешь добавить новую ультракрутую фичу</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="none">
                <path
                  fill="#000"
                  d="M1.609.86c0 .51.361.847.91.847h2.016l1.819-.174-1.796 1.672L.268 7.48A.907.907 0 0 0 0 8.14C0 8.65.338 9 .863 9a.926.926 0 0 0 .63-.279l4.301-4.285 1.69-1.811-.186 1.718v2.114c0 .557.338.917.851.917.513 0 .851-.348.851-.894V.975C9 .383 8.732 0 8.044 0H2.541c-.536 0-.932.348-.932.86Z"
                />
              </svg>
            </a>
            <a href="#" className="start__item-link">
              <div>Хочешь разработать приложение на android/ios</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="none">
                <path
                  fill="#000"
                  d="M1.609.86c0 .51.361.847.91.847h2.016l1.819-.174-1.796 1.672L.268 7.48A.907.907 0 0 0 0 8.14C0 8.65.338 9 .863 9a.926.926 0 0 0 .63-.279l4.301-4.285 1.69-1.811-.186 1.718v2.114c0 .557.338.917.851.917.513 0 .851-.348.851-.894V.975C9 .383 8.732 0 8.044 0H2.541c-.536 0-.932.348-.932.86Z"
                />
              </svg>
            </a>
            <a href="#" className="start__item-link">
              <div>Ты смешарик, но у тебя есть гениальная идея</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="none">
                <path
                  fill="#000"
                  d="M1.609.86c0 .51.361.847.91.847h2.016l1.819-.174-1.796 1.672L.268 7.48A.907.907 0 0 0 0 8.14C0 8.65.338 9 .863 9a.926.926 0 0 0 .63-.279l4.301-4.285 1.69-1.811-.186 1.718v2.114c0 .557.338.917.851.917.513 0 .851-.348.851-.894V.975C9 .383 8.732 0 8.044 0H2.541c-.536 0-.932.348-.932.86Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="start__vk">
        <motion.a
          href="https://oauth.vk.com/authorize?client_id=51756450&redirect_uri=http://localhost:5173&display=page&scope=groups&response_type=token&v=5.131"
          className="start__vk-link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Продолжить с VK
        </motion.a>
        <div>Только для тех, кто состоит в оригинальном стоке</div>
      </div>
      <div className="start__left">
        <a href="#" className="start__left-item">
          1.0.0
        </a>
        <a href="#" className="start__left-item">
          API
        </a>
      </div>
      <div className="start__right">
        <div>Шум</div>
        <Switch func={(isHandled) => setNoiseOn(isHandled)} />
      </div>
    </div>
  );
}
