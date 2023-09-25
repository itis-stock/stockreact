import classes from '../Modal.module.scss';
import ModalGroup from './ModalGroup.tsx';

export default function ModalContent() {
  return (
    <div className={classes['modalContent']}>
      <div className={classes['modalContent__title']}>Настройки аккаунта</div>
      {/* <ModalAccount /> */}
      <ModalGroup />
    </div>
  );
}
