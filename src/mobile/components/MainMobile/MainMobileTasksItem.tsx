import React, { useEffect } from 'react'
import axios from 'axios'
import { postType } from '../../../@types'
import { useInView } from 'react-intersection-observer'
import Skeleton from '../../../desktop/components/Skeleton'
import reformatDate from '../../../utils/reformatDate'
import classes from '../../modules/MainMobile.module.scss'
import MainPostText from '../../../desktop/components/MainPostText'
import MainPostPhoto from './MainMobilePostPhoto'

type MainPostItemPropsType = {
  fb_id: string
  buttonsKey: string
}
export default function MainMobileTasksItem({
  fb_id,
  buttonsKey,
}: MainPostItemPropsType) {
  const [post, setPost] = React.useState<postType | null>(null)
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })
  async function getting() {
    const data = (
      await axios.get(
        ' https://stockapi.netlify.app/api/' +
          buttonsKey +
          '.get?fb_id=' +
          fb_id
      )
    ).data
    setPost(data.response.data)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
    if (inView) {
      getting()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, fb_id])
  const date = reformatDate(post?.date)
  return (
    <div ref={ref}>
      {inView && post ? (
        <div className={classes['mainMobile__post-item']}>
          <div className={classes['mainMobile__post-date']}>
            <div>{date?.date}</div>
            <div>{date?.time}</div>
          </div>
          <div className={classes['mainMobile__post-info']}>
            <MainPostText text={post?.text} />
            {post?.attachments ? (
              <MainPostPhoto attachments={post?.attachments} />
            ) : (
              ''
            )}
          </div>
        </div>
      ) : (
        <Skeleton width={window.innerWidth - 20} height={200} radius={9} />
      )}
    </div>
  )
}
