import React from 'react';
import account from '../images/account.png';
import added from '../images/added.png';
import api from '../images/api.png';
import docs from '../images/docs.png';
import exams from '../images/exams.png';
import history from '../images/history.png';
import search from '../images/search.png';
import tests from '../images/tests.png';
import { Link } from 'react-router-dom';

const buttons: {
  img: string;
  title: string;
  id: 'exams' | 'tests' | 'docs' | 'API' | 'history' | null;
  ondev: boolean;
  link: boolean;
}[] = [
  { img: tests, title: 'Сливы кр', id: 'tests', ondev: false, link: false },
  { img: exams, title: 'Сливы экзаменов', id: 'exams', ondev: false, link: false },
  { img: docs, title: 'Документы', id: 'docs', ondev: false, link: false },
  { img: api, title: 'API', id: 'API', ondev: false, link: true },
  { img: history, title: '1.0.0', id: 'history', ondev: false, link: true },
  { img: account, title: 'Аккаунт', id: null, ondev: true, link: false },
  { img: added, title: 'Добавление', id: null, ondev: true, link: false },
  { img: search, title: 'Общий поиск', id: null, ondev: true, link: false },
];
type MainButtonsPropsType = {
  func: (index: 'exams' | 'tests' | 'docs' | 'API' | 'history' | null) => void;
};
export default function MainButtons({ func }: MainButtonsPropsType) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <div className="main__buttons">
      {buttons.map((el, i) => {
        if (el.link) {
          return (
            <Link to={'/' + el.id} className="main__btn" key={i}>
              <img src={el.img} />
              <div>{el.title}</div>
            </Link>
          );
        } else {
          return (
            <div
              className={
                el.ondev
                  ? 'main__btn ondev'
                  : i === selectedIndex
                  ? 'main__btn active'
                  : 'main__btn'
              }
              key={i}
              onClick={() => {
                if (!el.ondev) {
                  setSelectedIndex(i);
                  func(el.id);
                }
              }}
            >
              <img src={el.img} />
              <div>{el.title}</div>
            </div>
          );
        }
      })}
    </div>
  );
}
