import { useEffect, useState } from 'react'
// import classes from "../../modules/StartMobile.module.scss";
import classes from '../../modules/CreateUser.module.scss'
import arrow from '../../images/arrowleft.svg'
import rooster from '../../images/rooster.svg'
import arrowRight from '../../images/arrowright.svg'
import axios from 'axios'
import StartMobileAPISelect from './StartMobileAPISelect.tsx'

type apiType = {
  title: string
  content: apiContentType[]
}
export type apiContentType = {
  type: 'text' | 'subtitle' | 'subsubtitle'
  item: apiContentItemType[]
}
export type apiContentItemType = {
  text: string
  highlight: boolean
}

const StartMobileAPI = ({ setOpenModal }) => {
  const [mount, setMount] = useState(true)
  const [api, setAPI] = useState<apiType[]>([])
  const [apiSelectModal, setApiSelectModal] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState<apiContentType[]>([])
  useEffect(() => {
    const getAPI = async () => {
      const response = await axios.get(
        'https://stockapi.netlify.app/api/api.get'
      )
      setAPI(response.data.response.data)
    }
    getAPI()
  }, [])
  if (!api) {
    return <div>Идет загрузка</div>
  }
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
      <h1 className={classes['createUser__select-title']}>API</h1>
      <div className={classes['createUser__select-form']}>
        <div className={classes['createUser__select-block']}>
          <div className={classes['createUser__select-info']}>
            {api.map((item, index: number) => (
              <label
                key={index}
                className={classes['createUser__select-label']}>
                <input
                  type="button"
                  value={item.title}
                  className={classes['createUser__select-input']}
                  onClick={() => {
                    window.scrollTo(0, 0)
                    setApiSelectModal(true)
                    setTitle(item.title)
                    setContent(item.content)
                  }}
                />
                {index !== api.length - 1 ? (
                  <span className={classes['createUser__select-line']}></span>
                ) : (
                  ''
                )}
                <img
                  src={arrowRight}
                  alt="arrow"
                  className={classes['createUser__select-arrow']}
                />
              </label>
            ))}
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
      {apiSelectModal ? (
        <StartMobileAPISelect
          content={content}
          title={title}
          setApiSelectModal={setApiSelectModal}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default StartMobileAPI
