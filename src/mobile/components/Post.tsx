import MainMobileTasksItem from './MainMobile/MainMobileTasksItem.tsx'
import classes from '../modules/MainMobile.module.scss'
type MainPostPropsType = {
  posts: string[]
  buttonsKey: 'exams' | 'tests'
  element: string | null
}
export default function MainPost({
  posts,
  buttonsKey,
  element,
}: MainPostPropsType) {
  const elemArray = element?.split('-')
  return (
    <div className={classes['mainMobile__post']}>
      {element ? (
        <div className={classes['mainMobile__post-block']}>
          <div className={classes['mainMobile__items-blockInfoLeft']}>
            <div>{elemArray?.[2]}</div>
            <div>{elemArray?.[3]}</div>
          </div>
          <div className={classes['mainMobile__items-blockInfoRight']}>
            <div>{elemArray?.[0]} курс</div>
            <div>{elemArray?.[1]} семестр</div>
          </div>
        </div>
      ) : (
        ''
      )}
      <div className={classes['mainMobile__post-content']}>
        {posts.map((el) => {
          return <MainMobileTasksItem fb_id={el} buttonsKey={buttonsKey} />
        })}
      </div>
    </div>
  )
}
