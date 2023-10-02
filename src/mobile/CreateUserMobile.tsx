import classes from './modules/CreateUser.module.scss';
import React, { useEffect, useState } from 'react';
import CreateUserMobileMain from './components/CreateUser/CreateUserMobileMain.tsx';
import CreateUserMobileInput from './components/CreateUser/CreateUserMobileInput.tsx';
import CreateUserMobileSelect from './components/CreateUser/CreateUserMobileSelect.tsx';
import CreateUserMobileCourse from './components/CreateUser/CreateUserMobileCourse.tsx';
import axios from 'axios';
import Modal from './components/Modal.tsx';
import { groupsType, metaType } from '../@types';

export default function CreateUserMobile() {
  const [openModal, setOpenModal] = React.useState<
    'telegram' | 'course' | 'description' | 'group' | 'name' | null
  >(null);

  const [name, setName] = React.useState('Написать');
  const [description, setDescription] = React.useState('Написать');
  const [telegramName, setTelegramName] = React.useState('Написать');

  const [groups, setGroups] = React.useState<groupsType[]>([]);
  const [group, setGroup] = React.useState('Выбрать');

  const [course, setCourse] = useState('Выбрать');
  const courses = ['1 курс', '2 курс', '3 курс', '4 курс'];
  useEffect(() => {
    const getGroups = async () => {
      const response = await axios.get('https://stockapi.netlify.app/api/meta.getActual');
      const metaBuffer: metaType = response.data.response.data;
      setGroups(metaBuffer.groups);
    };
    getGroups();
  }, []);
  return (
    <>
      <div className={classes['create']}>
        <CreateUserMobileMain
          setOpenModal={setOpenModal}
          telegramName={telegramName}
          group={group}
          course={course}
          name={name}
          description={description}
        />
      </div>
      {openModal === 'telegram' ? (
        <Modal
          element={
            <CreateUserMobileInput inputValue={telegramName} setInputValue={setTelegramName} />
          }
          title={'Telegram'}
          func={(e) => setOpenModal(e)}
        />
      ) : (
        ''
      )}
      {openModal === 'name' ? (
        <Modal
          element={<CreateUserMobileInput inputValue={name} setInputValue={setName} />}
          title={'Отображаемое имя'}
          func={(e) => setOpenModal(e)}
        />
      ) : (
        ''
      )}
      {openModal === 'course' ? (
        <Modal
          element={
            <CreateUserMobileCourse
              course={course}
              courses={courses}
              setCourse={setCourse}
              setGroup={setGroup}
            />
          }
          title={'Курс'}
          func={(e) => setOpenModal(e)}
        />
      ) : (
        ''
      )}
      {openModal === 'group' ? (
        <Modal
          element={
            <CreateUserMobileSelect
              group={group}
              setGroup={setGroup}
              groups={groups}
              course={course}
            />
          }
          title={'Группа'}
          func={(e) => setOpenModal(e)}
        />
      ) : (
        ''
      )}
      {openModal === 'description' ? (
        <Modal
          element={
            <CreateUserMobileInput inputValue={description} setInputValue={setDescription} />
          }
          title={'Описание'}
          func={(e) => setOpenModal(e)}
        />
      ) : (
        ''
      )}
    </>
  );
}
