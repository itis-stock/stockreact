import axios from 'axios';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { postType } from '../../@types';
import Skeleton from './Skeleton';
import reformatDate from '../../utils/reformatDate';
import MainPostText from './MainPostText';
import MainPostPhoto from './MainPostPhoto';
type MainPostItemPropsType = {
  fb_id: string;
  buttonsKey: string;
  roll: boolean;
};
export default function MainPostItem({ fb_id, buttonsKey, roll }: MainPostItemPropsType) {
  const [post, setPost] = React.useState<postType | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  async function getting() {
    const data = (
      await axios.get(' https://stockapi.netlify.app/api/' + buttonsKey + '.get?fb_id=' + fb_id)
    ).data;
    setPost(data.response.data);
  }
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (inView) {
      getting();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, fb_id]);
  return (
    <div ref={ref} className="main__buffer" style={!inView ? { height: '500px' } : {}}>
      {inView && post ? (
        <div
          className="main__posts-item"
          style={roll ? { width: window.innerWidth - 82 } : { width: window.innerWidth - 682 }}
        >
          <div className="main__posts-top">
            {reformatDate(post.date) ? (
              <div className="main__posts-date">
                <div>{reformatDate(post.date)?.date}</div>
                <div>{reformatDate(post.date)?.time}</div>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="main__posts-content">
            <div className="main__posts-text">
              <MainPostText text={post.text} />
              <MainPostPhoto attachments={post.attachments} />
            </div>
          </div>
        </div>
      ) : (
        <Skeleton width={window.innerWidth - 682} height={500} radius={9} />
      )}
    </div>
  );
}
