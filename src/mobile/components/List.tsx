import classes from '../modules/List.module.scss';
type ListPropsType = {
  elements: JSX.Element[];
};
export default function List({ elements }: ListPropsType) {
  return (
    <div className={classes['list']}>
      {elements.map((el, i) => {
        return (
          <>
            {el}
            {i !== elements.length - 1 ? <div className={classes['list__separator']}></div> : ''}
          </>
        );
      })}
    </div>
  );
}
