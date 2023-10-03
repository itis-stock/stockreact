import classes from './modules/StartMobile.module.scss'
import logo from './images/logo.png'
import arrow from './images/arrowright.svg'
import React from 'react'
import Modal from './components/Modal.tsx'
import MobileAPI from './components/MobileApi/MobileAPI.tsx'
import List from './components/List.tsx'

export default function StartMobile() {
  const [openModal, setOpenModal] = React.useState<'API' | null>(null)

  return (
    <>
      <div className={classes['start']}>
        <img src={logo} />
        <div className={classes['start__content']}>
          <div className={classes['start__item']}>
            <div className={classes['start__item-title']}>Что?</div>
            <div className={classes['start__item-text']}>
              Хз, что тут объяснять. Твердо и четко. Новый сток
            </div>
          </div>
          <div className={classes['start__item']}>
            <div className={classes['start__item-title']}>Зачем?</div>
            <div className={classes['start__item-text']}>
              Просто потому что могу и мне похуй в принципе
            </div>
          </div>
          <List
            elements={[
              <a
                href="https://github.com/itis-stock"
                className={classes['start__link']}>
                <div className={classes['start__link-text']}>Github</div>
                <div className={classes['start__link-icon']}>
                  <img src={arrow} alt="arrow" />
                </div>
              </a>,
              <a href="https://t.me/lld4n" className={classes['start__link']}>
                <div className={classes['start__link-text']}>
                  Telegram разработчика
                </div>
                <div className={classes['start__link-icon']}>
                  <img src={arrow} alt="arrow" />
                </div>
              </a>,
            ]}
          />
          <p className={classes['start__info-text']}>
            Ты можешь разработать своё приложение на основе моего API, будь то
            Android-приложение или бот для Telegram. Можно создать буквально
            всё, что ты захочешь.
          </p>
        </div>

        <a
          href={
            'https://oauth.vk.com/authorize?client_id=' +
            import.meta.env.VITE_GROUP_INDEX +
            '&redirect_uri=' +
            window.location.origin +
            '/check&display=page&scope=groups&response_type=token&v=5.131'
          }
          className={classes['start__button']}>
          <span className={classes['start__button-title']}>
            Продолжить с VK
          </span>
          <span className={classes['start__button-text']}>
            Только для тех, кто состоит в оригинальном стоке
          </span>
        </a>

        <div className={classes['start__footer']}>
          <div onClick={() => setOpenModal('API')}>1.0.0</div>
          <div onClick={() => setOpenModal('API')}>API</div>
        </div>
      </div>
      {openModal === 'API' ? (
        <Modal
          title="API"
          element={<MobileAPI />}
          func={(e) => setOpenModal(e)}
        />
      ) : (
        ''
      )}
    </>
  )
}
