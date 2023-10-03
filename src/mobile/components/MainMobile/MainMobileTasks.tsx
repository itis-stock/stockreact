import { useEffect, useState } from 'react'

import classes from '../../modules/MainMobile.module.scss'
import arrowRight from '../../images/arrowright.svg'
import axios from 'axios'
import { metaType, teachersType } from '../../../@types'
import joinTeachers from '../../../utils/joinTeachers'
import getSemestr from '../../../utils/getSemestr'
import Skeleton from '../../../desktop/components/Skeleton'
import Modal from '../Modal.tsx'
import Post from '../Post.tsx'

const MainMobileTasks = ({ buttonsKey }: { buttonsKey: 'exams' | 'tests' }) => {
  const [items, setItems] = useState(null)
  const [teachers, setTeachers] = useState<teachersType | null>(null)
  const [relevantKeys, setRelevantKeys] = useState<string[] | null>(null)
  const [openModal, setOpenModal] = useState<string[] | null>(null)
  const [element, setElement] = useState<string | null>(null)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, teachers])
  if (relevantKeys?.length === 0) {
    return (
      <>
        <Skeleton width={window.innerWidth - 20} height={60} radius={9} />
        <Skeleton width={window.innerWidth - 20} height={60} radius={9} />
        <Skeleton width={window.innerWidth - 20} height={60} radius={9} />
        <Skeleton width={window.innerWidth - 20} height={60} radius={9} />
        <Skeleton width={window.innerWidth - 20} height={60} radius={9} />
        <Skeleton width={window.innerWidth - 20} height={60} radius={9} />
        <Skeleton width={window.innerWidth - 20} height={60} radius={9} />
        <Skeleton width={window.innerWidth - 20} height={60} radius={9} />
      </>
    )
  }
  return (
    <>
      <div className={classes['mainMobile__items']}>
        <h2 className={classes['mainMobile__items-title']}>
          Релевантные результаты
        </h2>
        <div className={classes['mainMobile__items-blocks']}>
          {items
            ? Object.keys(items).map((el) => {
                if (relevantKeys?.includes(el)) {
                  const elemArray = el.split('-') //    <course>-<semestr>-<subject>-<teacher>
                  return (
                    <>
                      <div className={classes['mainMobile__separator']}></div>
                      <div
                        className={classes['mainMobile__items-block']}
                        onClick={() => {
                          setElement(el)
                          setOpenModal(items[el])
                        }}>
                        <div
                          className={
                            classes['mainMobile__items-blockInfoLeft']
                          }>
                          <div>{elemArray[2]}</div>
                          <div>{elemArray[3]}</div>
                        </div>
                        <div
                          className={
                            classes['mainMobile__items-blockInfoRight']
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
      <div className={classes['mainMobile__items']}>
        <h2 className={classes['mainMobile__items-title']}>
          Остальные результаты
        </h2>
        <div className={classes['mainMobile__items-blocks']}>
          {items
            ? Object.keys(items).map((el) => {
                if (!relevantKeys?.includes(el)) {
                  const elemArray = el.split('-') //    <course>-<semestr>-<subject>-<teacher>
                  return (
                    <>
                      <div
                        className={classes['mainMobile__items-block']}
                        onClick={() => {
                          setElement(el)
                          setOpenModal(items[el])
                        }}>
                        <div
                          className={
                            classes['mainMobile__items-blockInfoLeft']
                          }>
                          <div>{elemArray[2]}</div>
                          <div>{elemArray[3]}</div>
                        </div>
                        <div
                          className={
                            classes['mainMobile__items-blockInfoRight']
                          }>
                          <div>{elemArray[0]} курс</div>
                          <div>{elemArray[1]} семестр</div>
                        </div>
                        <img src={arrowRight} />
                      </div>
                      <div className={classes['mainMobile__separator']}></div>
                    </>
                  )
                }
              })
            : ''}
        </div>
      </div>
      {openModal ? (
        <Modal
          element={
            <Post posts={openModal} buttonsKey={buttonsKey} element={element} />
          }
          func={(c) => setOpenModal(c)}
          title={buttonsKey === 'tests' ? 'Cлив кр' : 'Слив экзамена'}
        />
      ) : (
        ''
      )}
    </>
  )
}

export default MainMobileTasks
