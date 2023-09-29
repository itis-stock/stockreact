import React from 'react';
import './Select.scss';
import { motion } from 'framer-motion';
import doubleArrows from './doubleArrows.svg';
type SelectPropsType = {
  list: string[];
  func: (element: string) => void;
  defaultIndex?: number;
};

export default function Select({ list, func, defaultIndex = 0 }: SelectPropsType) {
  const [selectedIndex, setSelectedIndex] = React.useState(defaultIndex);
  const [isOpen, setIsOpen] = React.useState(false);
  const [widthMaxElement, setWidthMaxElement] = React.useState(0);
  React.useEffect(() => {
    const listSorted = list.sort((a, b) => b.length - a.length);
    const element = document.createElement('span');
    element.className = 'select__text';
    element.textContent = listSorted[0];
    document.body.appendChild(element);
    setWidthMaxElement(element.offsetWidth);
    document.body.removeChild(element);
  }, [list]);
  return (
    <div className="select">
      <div className="select__visible" onClick={() => setIsOpen(true)}>
        <div className="select__text">{list[selectedIndex]}</div>
        <div className="select__svg">
          <img src={doubleArrows} alt="двойные стрелки" />
        </div>
      </div>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }}
          className="select__invisible"
          style={{
            width: list.length > 5 ? widthMaxElement + 60 : widthMaxElement + 40,
            top: 0,
          }}
        >
          {list.map((el, i) => {
            return (
              <div
                key={i}
                className={i === selectedIndex ? 'select__item select__active' : 'select__item'}
                onClick={() => {
                  setSelectedIndex(i);
                  func(el);
                  setIsOpen(false);
                }}
              >
                {el}
              </div>
            );
          })}
        </motion.div>
      ) : (
        ''
      )}
    </div>
  );
}
