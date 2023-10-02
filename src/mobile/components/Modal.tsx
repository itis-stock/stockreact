import classes from '../modules/Modal.module.scss';
import rooster from '../images/rooster.svg';
import arrowleft from '../images/arrowleft.svg';
import { motion } from 'framer-motion';
import React from 'react';
type ModalPropsType = {
  element: JSX.Element;
  func: (str: null) => void;
  title: string;
};

export default function Modal({ element, func, title }: ModalPropsType) {
  const [isOpen, setIsOpen] = React.useState(true);

  const variants = {
    open: {
      left: 0,
    },
    closed: {
      left: window.innerWidth,
    },
  };
  return (
    <motion.div
      className={classes['modal']}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      initial={{ left: window.innerWidth }}
      transition={{ duration: 0.3 }}
    >
      <div className={classes['modal__title']}>{title}</div>
      <div className={classes['modal__main']}>{element}</div>
      <div className={classes['modal__footer']}>
        <div
          onClick={() => {
            setIsOpen(false);
            setTimeout(() => {
              func(null);
            }, 300);
          }}
        >
          <img src={arrowleft} />
          <span>Назад</span>
        </div>
        <img src={rooster} />
      </div>
    </motion.div>
  );
}
