import axios from 'axios'
import { useEffect, useState } from 'react'
import { docsType, metaType, teachersType } from '../../../@types'
import getSemestr from '../../../utils/getSemestr'
import classes from '../../modules/MainMobile.module.scss'
import arrowRight from '../../images/arrowRight.svg'
import checkingSpecial from '../../../utils/checkingSpecial'
import Modal from '../Modal'
import MainMobileDocsItem from './MainMobileDocsItem'
import Skeleton from '../../../desktop/components/Skeleton'
export default function MainMobileDocs() {
  const [items, setItems] = useState<docsType[]>([])
  const [teachers, setTeachers] = useState<teachersType | null>(null)
  const [relevant, setRelevant] = useState<docsType[]>([])
  const [openModal, setOpenModal] = useState<string | null>(null)
  useEffect(() => {
    const getItems = async () => {
      const group = JSON.parse(String(localStorage.getItem('user'))).group
      const response = await axios.get(
        'https://stockapi.netlify.app/api/meta.getActual'
      )
      const meta: metaType = response.data.response.data
      setItems(meta['docs'])
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
    const lectureName = lecture?.map((el) => el.name)
    const lectureSubject = lecture?.map((el) => el.subject)
    const relevantBuffer: docsType[] = []
    items.forEach((el) => {
      if (el.teacher !== null && el.subject !== null) {
        if (
          el.course === currentCourse &&
          lectureName?.includes(el.teacher) &&
          getSemestr() === el.semestr &&
          lectureSubject?.includes(el.subject)
        ) {
          relevantBuffer.push(el)
        }
      }
    })

    setRelevant(relevantBuffer)
  }, [items, teachers])

  if (relevant?.length === 0) {
    return (
      <>
        <Skeleton width={window.innerWidth} height={60} radius={9} />
        <Skeleton width={window.innerWidth} height={60} radius={9} />
        <Skeleton width={window.innerWidth} height={60} radius={9} />
        <Skeleton width={window.innerWidth} height={60} radius={9} />
        <Skeleton width={window.innerWidth} height={60} radius={9} />
        <Skeleton width={window.innerWidth} height={60} radius={9} />
        <Skeleton width={window.innerWidth} height={60} radius={9} />
        <Skeleton width={window.innerWidth} height={60} radius={9} />
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
            ? items.map((el) => {
                if (relevant?.includes(el)) {
                  return (
                    <>
                      <div className={classes['mainMobile__separator']}></div>
                      <div
                        className={classes['mainMobile__items-block']}
                        onClick={() => setOpenModal(el.fb_id)}>
                        <div
                          className={
                            classes['mainMobile__items-blockInfoLeft']
                          }>
                          {el.subject ? <div>{el.subject}</div> : ''}
                          {el.teacher ? <div>{el.teacher}</div> : ''}
                          {el.title ? (
                            <div className={classes['mainMobile__item-title']}>
                              {el.title}
                            </div>
                          ) : checkingSpecial(el.fb_id) ? (
                            <div
                              className={classes['mainMobile__item-special']}>
                              by lldan
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                        <div
                          className={
                            classes['mainMobile__items-blockInfoRight']
                          }>
                          {el.course ? <div>{el.course} курс</div> : ''}
                          {el.semestr ? <div>{el.semestr} семестр</div> : ''}
                          {el.year ? (
                            <div className={classes['mainMobile__item-year']}>
                              {el.year}
                            </div>
                          ) : (
                            ''
                          )}
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
            ? items.map((el) => {
                if (!relevant?.includes(el)) {
                  return (
                    <>
                      <div className={classes['mainMobile__separator']}></div>
                      <div
                        className={classes['mainMobile__items-block']}
                        onClick={() => setOpenModal(el.fb_id)}>
                        <div
                          className={
                            classes['mainMobile__items-blockInfoLeft']
                          }>
                          {el.subject ? <div>{el.subject}</div> : ''}
                          {el.teacher ? <div>{el.teacher}</div> : ''}
                          {el.title ? (
                            <div className={classes['mainMobile__item-title']}>
                              {el.title}
                            </div>
                          ) : checkingSpecial(el.fb_id) ? (
                            <div
                              className={classes['mainMobile__item-special']}>
                              by lldan
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                        <div
                          className={
                            classes['mainMobile__items-blockInfoRight']
                          }>
                          {el.course ? <div>{el.course} курс</div> : ''}
                          {el.semestr ? <div>{el.semestr} семестр</div> : ''}
                          {el.year ? (
                            <div className={classes['mainMobile__item-year']}>
                              {el.year}
                            </div>
                          ) : (
                            ''
                          )}
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
      {openModal ? (
        <Modal
          element={<MainMobileDocsItem fb_id={openModal} />}
          func={(c) => setOpenModal(c)}
          title={'Документ'}
        />
      ) : (
        ''
      )}
    </>
  )
}
