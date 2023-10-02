import classes from '../../modules/CreateUser.module.scss';
import arrow from '../../images/arrowright.svg';
import arrowDisabled from '../../images/arrowdisabled.svg';
import rooster from '../../images/rooster.svg';
import React from 'react';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
type CreateUserMobileMainPropsType = {
  setOpenModal: React.Dispatch<
    React.SetStateAction<'telegram' | 'course' | 'description' | 'group' | 'name' | null>
  >;
  telegramName: string;
  group: string;
  course: string;
  name: string;
  description: string;
};
const CreateUserMobileMain = ({
  telegramName,
  group,
  course,
  name,
  description,
  setOpenModal,
}: CreateUserMobileMainPropsType) => {
  const navigate = useNavigate();
  if (!localStorage.getItem('buffer')) {
    navigate('/error');
  }
  const buffer: string | null = localStorage.getItem('buffer');
  const JSONBuffer: { id: string; fullname: string; photo: string } = JSON.parse(buffer || '');
  const id_vk: string = JSONBuffer.id;
  const name_vk: string = JSONBuffer.fullname;
  const vk_photo: string = JSONBuffer.photo;

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

  function check(group: string, telegram: string): boolean {
    return group !== 'Выбрать' && telegram !== 'Написать';
  }
  async function postInfo(): Promise<void> {
    if (check(group, telegramName)) {
      const dataPost = {
        id: JSONBuffer?.id,
        id_vk: JSONBuffer?.id,
        name_vk: JSONBuffer?.fullname,
        telegram_nickname: telegramName,
        group: group,
        photo_url: JSONBuffer?.photo,
        display_name: name || JSONBuffer?.fullname,
        description: description,
      };
      if (name === 'Написать') dataPost['display_name'] = JSONBuffer?.fullname;
      if (description === 'Написать') dataPost['description'] = '';
      console.log(dataPost);
      const data = await axios.post(
        'https://stockapi.netlify.app/api/users.post',
        qs.stringify(dataPost),
        {
          headers: {
            master_key: import.meta.env.VITE_MASTER_KEY,
            'content-type': 'application/x-www-form-urlencoded',
          },
        },
      );
      console.log(data.data);
      localStorage.removeItem('buffer');
      localStorage.setItem('user', JSON.stringify(dataPost));
      navigate('/main');
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
            onClick={() => setOpenModal('telegram')}
          >
            <span className={classes['createUser__item-name']}>Telegram</span>
            <span className={classes['createUser__item-value']}>{checkString(telegramName)}</span>
            <img src={arrow} alt="arrow" />
            <span className={classes['start__line']}></span>
          </div>
          <div className={classes['createUser__item-block']} onClick={() => setOpenModal('course')}>
            <span className={classes['createUser__item-name']}>Курс</span>
            <span className={classes['createUser__item-value']}>{course}</span>
            <img src={arrow} alt="arrow" />
            <span className={classes['start__line']}></span>
          </div>
          {course !== 'Выбрать' ? (
            <div
              className={classes['createUser__item-block']}
              onClick={() => setOpenModal('group')}
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
          <div className={classes['createUser__item-block']} onClick={() => setOpenModal('name')}>
            <span className={classes['createUser__item-name']}>Отображаемое имя</span>
            <span className={classes['createUser__item-value']}>{checkString(name)}</span>
            <span className={classes['start__line']}></span>
            <img src={arrow} alt="arrow" />
          </div>
          <div
            className={classes['createUser__item-block']}
            onClick={() => setOpenModal('description')}
          >
            <span className={classes['createUser__item-name']}>Описание</span>
            <span className={classes['createUser__item-value']}>{checkString(description)}</span>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
      <div
        onClick={postInfo}
        className={
          check(group, telegramName)
            ? classes['createUser__button']
            : [classes['createUser__button'], classes['createUser__inactiveButton']].join(' ')
        }
      >
        Принять
      </div>
      <img src={rooster} />
    </div>
  );
};

export default CreateUserMobileMain;
