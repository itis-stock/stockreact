import classes from '../../modules/CreateUser.module.scss'
import rooster from '../../images/rooster.svg'
import arrow from '../../images/arrowleft.svg'
import React, { useState } from 'react'
const CreateUserMobileInput = ({
  inputValue,
  setOpen,
  setInputValue,
  title,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  inputValue: string
  title: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}) => {
  const [inputData, setInputData] = useState(inputValue)
  const [mount, setMount] = useState(true)
  console.log()
  if (inputData === 'Написать') {
    setInputData('')
  }
  return (
    <div
      className={
        mount
          ? [
              classes['createUser__choose'],
              classes['createUser__choose-active'],
            ].join(' ')
          : [
              classes['createUser__choose'],
              classes['createUser__choose-inactive'],
            ].join(' ')
      }>
      <h1 className={classes['createUser__choose-title']}>{title}</h1>
      <div className={classes['createUser__choose-form']}>
        <label className={classes['createUser__choose-label']}>
          <input
            type="text"
            value={inputData}
            placeholder="Введите что-то..."
            className={classes['createUser__choose-input']}
            onChange={(event) => {
              setInputData(event.target.value)
              setInputValue(event.target.value)
            }}
          />
          {inputValue ? (
            <button
              className={classes['createUser__choose-reset']}
              onClick={() => {
                setInputData('')
                setInputValue('Написать')
              }}
            />
          ) : (
            ''
          )}
        </label>
      </div>
      <div className={classes['createUser__choose-footer']}>
        <div
          className={classes['createUser__choose-back']}
          onClick={() => {
            window.scrollTo(0, 0)
            setMount(false)
            setTimeout(() => {
              setOpen(false)
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

export default CreateUserMobileInput
