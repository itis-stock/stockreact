import React from 'react';
import './Select.scss';
import { motion } from 'framer-motion';
type selectPropsType = {
  list: string[];
  def?: number;
};
/**
 * @param list `string[]` массив элементов, которые будут доступны в селекте
 * @param def `number` индекс элемента, выбранного по умолчанию, если не указать, то def = 0
 */
export default function Select({ list, def = 0 }: selectPropsType) {
  const [selected, setSelected] = React.useState(def);
  const [open, setOpen] = React.useState(false);
  return (
    <div className="select">
      <div className="select__visible" onClick={() => setOpen(!open)}>
        <div className="select__text">{list[selected]}</div>
        <div className="select__mini">
          <svg
            width="8"
            height="11"
            viewBox="0 0 8 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 4L4 0.5L7.5 4"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 7L4 10.5L0.5 7"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {open ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }}
          className="select__menu"
          style={{
            top: '-' + selected * 26 + 'px',
          }}
        >
          {list.map((el, i) => {
            return (
              <div
                className={i === selected ? 'select__item active' : 'select__item'}
                key={i}
                onClick={() => {
                  setSelected(i);
                  setOpen(false);
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
