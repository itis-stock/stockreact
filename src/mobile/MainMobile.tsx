import logo from './images/rooster.svg';
import search from './images/searchIcon.svg';
import slivikr from './images/slivikr.svg';
import sliviexams from './images/sliviexams.svg';
import documents from './images/documents.svg';
import apipizza from './images/apipizza.svg';
import smileAccount from './images/smileAccount.svg';
import addIcon from './images/addIcon.svg';

import classes from './modules/MainMobile.module.scss';
import MainMobileSelect from './components/MainMobile/MainMobileSelect.tsx';
import { useState } from 'react';
import MainMobileDocs from './components/MainMobile/MainMobileDocs.tsx';
import MainMobileItem from './components/MainMobile/MainMobileItem.tsx';
import List from './components/List.tsx';
import Modal from './components/Modal.tsx';
import MobileAPI from './components/MobileApi/MobileAPI.tsx';

export default function MainMobile() {
  const [openModal, setOpenModal] = useState<'exams' | 'tests' | 'docs' | 'api' | null>(null);
  return (
    <>
      {' '}
      <div className={classes['mainMobile']}>
        <h1 className={classes['mainMobile__title']}>Меню</h1>
        <div className={classes['mainMobile__info']}>
          <div className={classes['mainMobile__blocks']}>
            <List
              elements={[
                <MainMobileSelect
                  title={'Общий поиск'}
                  image={search}
                  develop={true}
                  setOpenModal={() => console.log('в разработке')}
                />,
                <MainMobileSelect
                  title={'Сливы кр'}
                  image={slivikr}
                  develop={false}
                  setOpenModal={() => {
                    setOpenModal('tests');
                  }}
                />,
                <MainMobileSelect
                  title={'Сливы экзаменов'}
                  image={sliviexams}
                  develop={false}
                  setOpenModal={() => {
                    setOpenModal('exams');
                  }}
                />,
                <MainMobileSelect
                  title={'Документы'}
                  image={documents}
                  develop={false}
                  setOpenModal={() => {
                    setOpenModal('docs');
                  }}
                />,
                <MainMobileSelect
                  title={'API'}
                  image={apipizza}
                  develop={false}
                  setOpenModal={() => {
                    setOpenModal('api');
                  }}
                />,
                <MainMobileSelect
                  title={'Аккаунт'}
                  image={smileAccount}
                  develop={true}
                  setOpenModal={() => console.log('в разработке')}
                />,
                <MainMobileSelect
                  title={'Добавление'}
                  image={addIcon}
                  develop={true}
                  setOpenModal={() => console.log('в разработке')}
                />,
              ]}
            />
          </div>
        </div>
        <img src={logo} alt="" className={classes['mainMobile__logo']} />
      </div>
      {openModal === 'tests' ? (
        <Modal
          element={<MainMobileItem buttonsKey="tests" />}
          title="Сливы кр"
          func={(c) => setOpenModal(c)}
        />
      ) : (
        ''
      )}
      {openModal === 'exams' ? (
        <Modal
          element={<MainMobileItem buttonsKey="exams" />}
          title="Сливы экзаменов"
          func={(c) => setOpenModal(c)}
        />
      ) : (
        ''
      )}
      {openModal === 'docs' ? (
        <Modal element={<MainMobileDocs />} title="Документы" func={(c) => setOpenModal(c)} />
      ) : (
        ''
      )}
      {openModal === 'api' ? (
        <Modal element={<MobileAPI />} title="API" func={(c) => setOpenModal(c)} />
      ) : (
        ''
      )}
    </>
  );
}
