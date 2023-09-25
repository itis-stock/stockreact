import classes from '../Modal.module.scss';
import Select from '../../universal/Select/Select.tsx';

export default function ModalAccountGroup() {
  return (
    <div>
      <div className={classes['modalContent__group']}>
        <span className={classes['account-title']}>Группа</span>
        <span className={classes['select__wrapper']}>
          <Select list={['11-201', '11-202', '11-203', '11-204', '11-205']} />
        </span>
      </div>
    </div>
  );
}
