import React, { useEffect, useState } from 'react'
import classes from '../../modules/CreateUser.module.scss'
import classes2 from '../../modules/MainMobile.module.scss'
import arrow from '../../images/arrowleft.svg'
import arrowRight from '../../images/arrowRight.svg'
import rooster from '../../images/rooster.svg'
import axios from 'axios'
import { metaType, teachersType } from '../../../@types'
import joinTeachers from '../../../utils/joinTeachers'
import getSemestr from '../../../utils/getSemestr'

const MainMobileItem = ({
  title,
  setOpenModal,
  buttonsKey,
}: {
  title: string
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  buttonsKey: 'exams' | 'tests' | null
}) => {
  const [mount, setMount] = useState(true)
  const [items, setItems] = useState(null)
  const [teachers, setTeachers] = useState<teachersType | null>(null)
  const [relevantKeys, setRelevantKeys] = useState<string[] | null>(null)

  useEffect(() => {
    const getItems = async () => {
      const group = JSON.parse(String(localStorage.getItem('user'))).group
      const response = await axios.get(
        'https://stockapi.netlify.app/api/meta.getActual'
      )
      const meta: metaType = response.data.response.data
      if (buttonsKey) {
        setItems(meta[buttonsKey])
      }
      const teachersFirebase = meta.groups.find(
        (el) => el.group === group
      )?.teacher
      const responseTeachers = await axios.get(
        'https://stockapi.netlify.app/api/teachers.get?fb_id=' +
          teachersFirebase
      )
      setTeachers(responseTeachers.data.response.data)
    }
    getItems()
  }, [])

  useEffect(() => {
    const currentCourse = teachers?.course
    const lecture = teachers?.lecture
    const practice = teachers?.practice
    const keys = items ? Object.keys(items) : []
    const relevantKeysBuffer: string[] = []
    for (let i = 0; i < keys.length; i++) {
      if (buttonsKey === 'exams') {
        lecture?.forEach((el) => {
          const keyString = joinTeachers(
            currentCourse || 0,
            getSemestr(),
            el.subject,
            el.name
          )
          if (keyString === keys[i]) {
            relevantKeysBuffer.push(keys[i])
          }
        })
      } else if (buttonsKey === 'tests') {
        practice?.forEach((el) => {
          const keyString = joinTeachers(
            currentCourse || 0,
            getSemestr(),
            el.subject,
            el.name
          )
          if (keyString === keys[i]) {
            relevantKeysBuffer.push(keys[i])
          }
        })
      }
    }
    setRelevantKeys(relevantKeysBuffer)
  }, [items, teachers])
  console.log(relevantKeys)
  return (
    <div
      className={
        mount
          ? [
              classes['createUser__select'],
              classes['createUser__select-active'],
            ].join(' ')
          : [
              classes['createUser__select'],
              classes['createUser__select-inactive'],
            ].join(' ')
      }>
      <h1 className={classes['createUser__select-title']}>{title}</h1>
      <div className={classes2['mainMobile__items-wrapper']}>
        <div className={classes2['mainMobile__items']}>
          <h2 className={classes2['mainMobile__items-title']}>
            Релевантные результаты
          </h2>
          <div className={classes2['mainMobile__items-blocks']}>
            {items
              ? Object.keys(items).map((el) => {
                  if (relevantKeys?.includes(el)) {
                    const elemArray = el.split('-') //    <course>-<semestr>-<subject>-<teacher>
                    return (
                      <>
                        <div
                          className={classes2['mainMobile__separator']}></div>
                        <div className={classes2['mainMobile__items-block']}>
                          <div
                            className={
                              classes2['mainMobile__items-blockInfoLeft']
                            }>
                            <div>{elemArray[2]}</div>
                            <div>{elemArray[3]}</div>
                          </div>
                          <div
                            className={
                              classes2['mainMobile__items-blockInfoRight']
                            }>
                            <div>{elemArray[0]} курс</div>
                            <div>{elemArray[1]} семестр</div>
                          </div>
                          <img src={arrowRight} />
                        </div>
                      </>
                    )
                  }
                })
              : ''}
          </div>
        </div>
        <div className={classes2['mainMobile__items']}>
          <h2 className={classes2['mainMobile__items-title']}>
            Остальные результаты
          </h2>
          <div className={classes2['mainMobile__items-blocks']}>
            {items
              ? Object.keys(items).map((el) => {
                  if (!relevantKeys?.includes(el)) {
                    const elemArray = el.split('-') //    <course>-<semestr>-<subject>-<teacher>
                    return (
                      <>
                        <div className={classes2['mainMobile__items-block']}>
                          <div
                            className={
                              classes2['mainMobile__items-blockInfoLeft']
                            }>
                            <div>{elemArray[2]}</div>
                            <div>{elemArray[3]}</div>
                          </div>
                          <div
                            className={
                              classes2['mainMobile__items-blockInfoRight']
                            }>
                            <div>{elemArray[0]} курс</div>
                            <div>{elemArray[1]} семестр</div>
                          </div>
                          <img src={arrowRight} />
                        </div>
                        <div
                          className={classes2['mainMobile__separator']}></div>
                      </>
                    )
                  }
                })
              : ''}
          </div>
        </div>
      </div>

      <div className={classes['createUser__choose-footer']}>
        <div
          className={classes['createUser__choose-back']}
          onClick={() => {
            setMount(false)
            setTimeout(() => {
              setOpenModal(false)
            }, 300)
          }}>
          <img src={arrow} alt="" />
          <span className={classes['createUser__choose-text']}>Назад</span>
        </div>
        <div className={'createUser__choose-logo'}>
          <img src={rooster} alt="rooster" />
        </div>
      </div>
    </div>
  )
}

export default MainMobileItem
