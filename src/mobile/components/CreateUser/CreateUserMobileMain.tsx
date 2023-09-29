/* eslint-disable */

import classes from '../../modules/CreateUser.module.scss';
import arrow from '../../images/arrowright.svg';
import arrowDisabled from '../../images/arrowdisabled.svg';
import rooster from '../../images/rooster.svg';
import React from 'react';

const CreateUserMobileMain = ({
  setOpenTelegramModal,
  telegramName,
  setOpenGroupModal,
  setOpenCourseModal,
  setOpenNameModal,
  setOpenDescriptionModal,
  group,
  course,
  name,
  description,
}: {
  setOpenTelegramModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenGroupModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenCourseModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenDescriptionModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenNameModal: React.Dispatch<React.SetStateAction<boolean>>;
  telegramName: string;
  group: string;
  course: string;
  name: string;
  description: string;
}) => {
  const buffer: string | null = localStorage.getItem('buffer');
  const JSONBuffer: object = JSON.parse(buffer);
  const id_vk = JSONBuffer.id;
  const name_vk = JSONBuffer.fullname;
  const vk_photo = JSONBuffer.photo;
  function checkString(str: string): string {
    if (str.length >= 41) return '';
    if (window.innerWidth <= 500) {
      if (str.length <= 8) {
        return str;
      } else {
        str = str.slice(0, 8) + '...';
        return str;
      }
    } else {
      if (str.length <= 20) {
        return str;
      } else {
        str = str.slice(0, 20) + '...';
        return str;
      }
    }
  }

  return (
    <div className={classes['createUser']}>
      <h1 className={classes['createUser__title']}>Создание аккаунта</h1>
      <div className={classes['createUser__item']}>
        <div className={classes['createUser__item-title']}>Обязательные</div>
        <div className={classes['createUser__item-info']}>
          <div className={classes['createUser__item-block']}>
            <span className={classes['createUser__item-name']}>VK ID</span>
            <span className={classes['createUser__item-value']}>{id_vk}</span>
            <span className={classes['start__line']}></span>
          </div>
          <div className={classes['createUser__item-block']}>
            <span className={classes['createUser__item-name']}>Имя VK</span>
            <span className={classes['createUser__item-value']}>{name_vk}</span>
            <span className={classes['start__line']}></span>
          </div>
          <div
            className={classes['createUser__item-block']}
            onClick={() => setOpenTelegramModal(true)}
          >
            <span className={classes['createUser__item-name']}>Telegram</span>
            <span className={classes['createUser__item-value']}>{telegramName}</span>
            <img src={arrow} alt="arrow" />
            <span className={classes['start__line']}></span>
          </div>
          <div
            className={classes['createUser__item-block']}
            onClick={() => setOpenCourseModal(true)}
          >
            <span className={classes['createUser__item-name']}>Курс</span>
            <span className={classes['createUser__item-value']}>{course}</span>
            <img src={arrow} alt="arrow" />
            <span className={classes['start__line']}></span>
          </div>
          {course !== 'Выбрать' ? (
            <div
              className={classes['createUser__item-block']}
              onClick={() => setOpenGroupModal(true)}
            >
              <span className={classes['createUser__item-name']}>Группа</span>
              <span className={classes['createUser__item-value']}>{group}</span>
              <img src={arrow} alt="arrow" />
            </div>
          ) : (
            <div className={classes['createUser__item-inactiveBlock']}>
              <span className={classes['createUser__item-name']}>Группа</span>
              <span className={classes['createUser__item-value']}>{group}</span>
              <img src={arrowDisabled} alt="arrowDisabled" />
            </div>
          )}
        </div>
      </div>
      <div className={[classes['createUser__item'], classes['createUser__lastItem']].join(' ')}>
        <div className={classes['createUser__item-title']}>Необязательные</div>
        <div className={classes['createUser__item-info']}>
          <div className={classes['createUser__item-block']}>
            <span className={classes['createUser__item-name']}>Аватарка</span>
            <span className={classes['createUser__item-value']}>
              <img src={vk_photo} alt="avatar" className={classes['createUser__avatar']} />
            </span>
            <span className={classes['start__line']}></span>
          </div>
          <div className={classes['createUser__item-block']} onClick={() => setOpenNameModal(true)}>
            <span className={classes['createUser__item-name']}>Отображаемое имя</span>
            <span className={classes['createUser__item-value']}>{checkString(name)}</span>
            <span className={classes['start__line']}></span>
            <img src={arrow} alt="arrow" />
          </div>
          <div
            className={classes['createUser__item-block']}
            onClick={() => setOpenDescriptionModal(true)}
          >
            <span className={classes['createUser__item-name']}>Описание</span>
            <span className={classes['createUser__item-value']}>{checkString(description)}</span>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
      <button type="submit" className={classes['createUser__button']}>
        Принять
      </button>
      <img src={rooster} alt="" />
    </div>
  );
};

export default CreateUserMobileMain;
