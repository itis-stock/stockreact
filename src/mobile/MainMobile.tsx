import logo from './images/rooster.svg'
import search from './images/searchIcon.svg'
import slivikr from './images/slivikr.svg'
import sliviexams from './images/sliviexams.svg'
import documents from './images/documents.svg'
import apipizza from './images/apipizza.svg'
import smileAccount from './images/smileAccount.svg'
import addIcon from './images/addIcon.svg'

import classes from './modules/MainMobile.module.scss'
import MainMobileSelect from './components/MainMobile/MainMobileSelect.tsx'
import { useState } from 'react'
import StartMobileAPI from './components/StartMobile/StartMobileAPI.tsx'
import MainMobileDocs from './components/MainMobile/MainMobileDocs.tsx'
import MainMobileItem from './components/MainMobile/MainMobileItem.tsx'

export default function MainMobile() {
  const [openModalAPI, setOpenModalAPI] = useState(false)
  const [openModalItem, setOpenModalItem] = useState(false)
  const [openModalDocs, setOpenModalDocs] = useState(false)
  const [buffer, setBuffer] = useState<'exams' | 'tests' | null>(null)
  return (
    <div className={classes['mainMobile']}>
      <h1 className={classes['mainMobile__title']}>Меню</h1>
      <div className={classes['mainMobile__info']}>
        <div className={classes['mainMobile__blocks']}>
          <MainMobileSelect
            title={'Общий поиск'}
            image={search}
            develop={true}
            last={false}
            setOpenModal={() => console.log('в разработке')}
          />
          <MainMobileSelect
            title={'Сливы кр'}
            image={slivikr}
            develop={false}
            last={false}
            setOpenModal={(bool) => {
              setOpenModalItem(bool)
              setBuffer('tests')
            }}
          />
          <MainMobileSelect
            title={'Сливы экзаменов'}
            image={sliviexams}
            develop={false}
            last={false}
            setOpenModal={(bool) => {
              setOpenModalItem(bool)
              setBuffer('exams')
            }}
          />
          <MainMobileSelect
            title={'Документы'}
            image={documents}
            develop={false}
            last={false}
            setOpenModal={(bool) => {
              setOpenModalDocs(bool)
              setBuffer(null)
            }}
          />
          <MainMobileSelect
            title={'API'}
            image={apipizza}
            develop={false}
            last={false}
            setOpenModal={(bool) => {
              setOpenModalAPI(bool)
              setBuffer(null)
            }}
          />
          <MainMobileSelect
            title={'Аккаунт'}
            image={smileAccount}
            develop={true}
            last={false}
            setOpenModal={() => console.log('в разработке')}
          />
          <MainMobileSelect
            title={'Добавление'}
            image={addIcon}
            develop={true}
            last={true}
            setOpenModal={() => console.log('в разработке')}
          />
        </div>
      </div>
      <img src={logo} alt="" className={classes['mainMobile__logo']} />
      {openModalAPI ? <StartMobileAPI setOpenModal={setOpenModalAPI} /> : ''}
      {openModalItem ? (
        <MainMobileItem
          buttonsKey={buffer}
          title={buffer === 'exams' ? 'Сливы экзаменов' : 'Сливы кр'}
          setOpenModal={setOpenModalItem}
        />
      ) : (
        ''
      )}

      {openModalDocs ? (
        <MainMobileDocs title={'Документы'} setOpenModal={setOpenModalDocs} />
      ) : (
        ''
      )}
    </div>
  )
}
