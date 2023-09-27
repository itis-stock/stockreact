import React from 'react';
import './Switch.scss';
import { motion } from 'framer-motion';

type switchPropsType = {
  func: (isHandled: boolean) => void;
  def?: boolean;
};
/**
 * Элемент Switch
 * @param func `(isHandled: boolean) => void` функция, которая будет срабатывает, при изменение значения
 * @param def `boolean` значение по умолчанию, если не указать то значение будет false
 */
export default function Switch({ func, def = false }: switchPropsType) {
  const [isHandled, setIsHandled] = React.useState(def);
  const handleClick = () => {
    func(!isHandled);
    setIsHandled(!isHandled);
  };
  return (
    <div className={isHandled ? 'switch active' : 'switch '} onClick={handleClick}>
      <motion.div
        className={isHandled ? 'switch__circle active' : 'switch__circle'}
        layout
        transition={spring}
      ></motion.div>
    </div>
  );
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};
