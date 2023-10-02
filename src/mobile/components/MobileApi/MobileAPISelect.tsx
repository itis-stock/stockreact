import { apiContentType } from './MobileAPI';
import classes from '../../modules/MobileAPI.module.scss';
type MobileAPISelectPropsType = {
  content: apiContentType[];
};

export default function MobileAPISelect({ content }: MobileAPISelectPropsType) {
  return (
    <>
      <div className={classes['api__content']}>
        {content.map((elem) => {
          if (elem.type === 'subsubtitle') {
            return <span className={classes['api__subsubtitle']}>{String(elem.item)}</span>;
          } else if (elem.type === 'subtitle') {
            return <span className={classes['api__subtitle']}>{String(elem.item)}</span>;
          } else {
            return (
              <div className={classes['api__textBlock']}>
                {elem.item.map((el) => {
                  if (el.highlight) {
                    return <span className={classes['api__highlight']}>{el.text}</span>;
                  } else {
                    return <span className={classes['api__text']}>{el.text}</span>;
                  }
                })}
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
