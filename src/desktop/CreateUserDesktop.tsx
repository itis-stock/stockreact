import React from 'react';
import './scss/CreateUser.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setMeta } from '../redux/metaSlice';
import Select from '../components/Select/Select';
import qs from 'qs';
import { bufferType, metaType } from '../@types';
export default function CreateUserDesktop() {
  const [telegramValue, setTelegramValue] = React.useState('');
  const [displayName, setDisplayName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [group, setGroup] = React.useState('');
  const [buffer, setBuffer] = React.useState<bufferType | null>(null);
  async function postUser() {
    const dataPost = {
      id: buffer?.id,
      id_vk: buffer?.id,
      name_vk: buffer?.fullname,
      telegram_nickname: telegramValue,
      group: group,
      photo_url: buffer?.photo,
      display_name: displayName || buffer?.fullname,
      description: description,
    };
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

  const meta = useSelector((state: metaType) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function gettingMeta() {
    const data = (await axios.get('https://stockapi.netlify.app/api/meta.getActual')).data;
    if (data.response.data) {
      dispatch(setMeta(data.response.data));
    }
  }
  React.useEffect(() => {
    if (localStorage.getItem('buffer')) {
      setBuffer(JSON.parse(String(localStorage.getItem('buffer'))));
    } else {
      navigate('/error');
    }
    gettingMeta();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="create-user">
      <div className="create-user__wrapper">
        <div className="create-user__title">Создание аккаунта</div>
        <div className="create-user__content">
          <div className="create-user__content-title">Обязательные</div>
          <div className="create-user__content-block">
            <div className="create-user__content-item">
              <div className="create-user__left">VK ID</div>
              <div className="create-user__text">{buffer?.id}</div>
            </div>
            <div className="create-user__separator"></div>
            <div className="create-user__content-item">
              <div className="create-user__left">Имя ID</div>
              <div className="create-user__text">{buffer?.fullname}</div>
            </div>
            <div className="create-user__separator"></div>
            <div className="create-user__content-item">
              <div className="create-user__left">Telegram /[0-9a-zA-Z_]*/</div>
              <input
                type="text"
                className="create-user__input"
                placeholder="Кликни, чтобы изменить"
                value={telegramValue}
                onChange={(e) => {
                  if (/^[0-9a-zA-Z_]*$/.test(e.target.value)) {
                    setTelegramValue(e.target.value);
                  }
                }}
              />
            </div>
            <div className="create-user__separator"></div>
            <div className="create-user__content-item create-user__content-item--special">
              <div className="create-user__left">Группа</div>
              {meta && meta.groups ? (
                <Select
                  list={meta?.groups.map((el: { group: string }) => el.group).sort()}
                  func={(c) => setGroup(c)}
                />
              ) : (
                <div className="create-user__text">Ожидаем ответ с базы данных</div>
              )}
            </div>
          </div>

          <div className="create-user__content-title">Необязательные</div>
          <div className="create-user__content-block">
            <div className="create-user__content-item">
              <div className="create-user__left">Аватарка</div>
              <img src={buffer?.photo} alt="" className="create-user__img" />
            </div>
            <div className="create-user__separator"></div>
            <div className="create-user__content-item">
              <div className="create-user__left">Отображаемое имя</div>
              <input
                type="text"
                className="create-user__input"
                value={displayName}
                onChange={(e) => {
                  if (e.target.value.length <= 40) {
                    setDisplayName(e.target.value);
                  }
                }}
                placeholder="Кликни, чтобы изменить"
              />
            </div>
            <div className="create-user__separator"></div>
            <div className="create-user__content-item">
              <div className="create-user__left">Описание</div>
              <input
                type="text"
                className="create-user__input"
                placeholder="Кликни, чтобы изменить"
                value={description}
                onChange={(e) => {
                  if (e.target.value.length <= 40) {
                    setDescription(e.target.value);
                  }
                }}
              />
            </div>
          </div>
        </div>
        <button
          className="create-user__btn"
          style={{ opacity: telegramValue ? 1 : 0 }}
          onClick={() => postUser()}
        >
          Принять
        </button>
      </div>
    </div>
  );
}
