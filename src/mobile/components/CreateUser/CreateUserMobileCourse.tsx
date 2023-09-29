import { useState } from 'react'
import classes from '../../modules/CreateUser.module.scss'
import arrowSelect from '../../images/arrowdown.svg'
import rooster from '../../images/rooster.svg'
import arrow from '../../images/arrowleft.svg'

const CreateUserMobileCourse = ({
  courses,
  setOpenCourseModal,
  setCourse,
  course,
  setGroup,
}: {
  courses: string[]
}) => {
  const [mount, setMount] = useState(true)
  const [activeItem, setActiveItem] = useState(course)
  const [selectData, setSelectData] = useState(course)
  function select(event) {
    if (selectData === event.target.value) {
      setSelectData(event.target.value)
      setCourse(event.target.value)
    } else {
      setSelectData(event.target.value)
      setCourse(event.target.value)
      setGroup('Выбрать')
    }
  }
  return (
    <div
      className={
        mount
          ? [
              classes['createUser__select-group'],
              classes['createUser__select-groupActive'],
            ].join(' ')
          : [
              classes['createUser__select-group'],
              classes['createUser__select-groupInactive'],
            ].join(' ')
      }>
      <h1 className={classes['createUser__select-title']}>Курс</h1>
      <div className={classes['createUser__select-form']}>
        <div className={classes['createUser__select-block']}>
          <div className={classes['createUser__select-info']}>
            {courses.map((item, index: number) => (
              <label
                key={index}
                className={classes['createUser__select-label']}>
                <input
                  type="button"
                  value={item}
                  className={classes['createUser__select-input']}
                  onClick={(event) => {
                    select(event)
                    setActiveItem(item)
                  }}
                />
                {activeItem === item ? (
                  <img
                    src={arrowSelect}
                    alt="select"
                    className={classes['createUser__select-arrow']}
                  />
                ) : (
                  ''
                )}
                {index !== courses.length - 1 ? (
                  <span className={classes['createUser__select-line']}></span>
                ) : (
                  ''
                )}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className={classes['createUser__choose-footer']}>
        <div
          className={classes['createUser__choose-back']}
          onClick={() => {
            window.scrollTo(0, 0)
            setMount(false)
            setTimeout(() => {
              setOpenCourseModal(false)
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

export default CreateUserMobileCourse
