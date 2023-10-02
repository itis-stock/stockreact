import axios from 'axios';
import { useEffect, useState } from 'react';
import { documentType } from '../../../@types';
import classes from '../../modules/MainMobile.module.scss';
export default function MainMobiledocsItem({ fb_id }: { fb_id: string }) {
  const [doc, setdoc] = useState<documentType | null>(null);
  useEffect(() => {
    const getdoc = async () => {
      const data = (await axios.get('https://stockapi.netlify.app/api/docs.get?fb_id=' + fb_id))
        .data;
      setdoc(data.response.data);
    };
    getdoc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className={classes['mainMobile__doc']}>
        <div className={classes['mainMobile__doc-block']}>
          <div className={classes['mainMobile__items-blockInfoLeft']}>
            {doc?.subject ? <div>{doc?.subject}</div> : ''}
            {doc?.teacher ? <div>{doc?.teacher}</div> : ''}
            {doc?.title ? (
              <div className={classes['mainMobile__item-title']}>{doc?.title}</div>
            ) : doc?.special ? (
              <div className={classes['mainMobile__item-special']}>by lldan</div>
            ) : (
              ''
            )}
          </div>
          <div className={classes['mainMobile__items-blockInfoRight']}>
            {doc?.course ? <div>{doc?.course} курс</div> : ''}
            {doc?.semestr ? <div>{doc?.semestr} семестр</div> : ''}
            {doc?.year ? <div className={classes['mainMobile__item-year']}>{doc?.year}</div> : ''}
          </div>
        </div>
        <a href={doc?.url} className={classes['mainMobile__doc-button']}>
          Перейти в документ
        </a>
      </div>
    </>
  );
}
