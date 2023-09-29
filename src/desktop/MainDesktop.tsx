import React from 'react';
import MainButtons from './components/MainButtons';
import './scss/Main.scss';
import { setMeta } from '../redux/metaSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainGuide from './components/MainGuide';
import { metaType, userType } from '../@types';
export default function MainDesktop() {
  const [teachers, setTeachers] = React.useState();
  const [user, setUser] = React.useState<userType>();
  const [selectedId, setSelectedId] = React.useState<
    'exams' | 'tests' | 'docs' | 'API' | 'history' | null
  >('tests');
  const navigate = useNavigate();
  const meta = useSelector((state: metaType) => state);
  const dispatch = useDispatch();
  async function gettingMeta() {
    const data = (await axios.get('https://stockapi.netlify.app/api/meta.getActual')).data;
    if (data.response.data) {
      dispatch(setMeta(data.response.data));
    }
  }
  async function gettingTeachers(fb_id: string) {
    const data = (await axios.get('https://stockapi.netlify.app/api/teachers.get?fb_id=' + fb_id))
      .data;
    if (data.response.data) {
      setTeachers(data.response.data);
    }
  }
  React.useEffect(() => {
    if (!meta) {
      gettingMeta();
    }
    if (!localStorage.getItem('user')) {
      navigate('/error');
    } else if (!user) {
      setUser(JSON.parse(String(localStorage.getItem('user'))));
    }
    if (meta) {
      const fb_id = meta.groups.find((el) => el.group === user?.group)?.teacher;
      if (fb_id) {
        gettingTeachers(fb_id);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meta]);
  return (
    <div className="main">
      <div className="main__sidebar">
        <div className="main__navigation">
          <MainButtons func={(id) => setSelectedId(id)} />
          <button className="main__bottom">Свернуть</button>
        </div>
        <div className="main__guide-wrapper">
          <MainGuide
            id={selectedId}
            teachers={teachers || null}
            meta={meta}
            func={(list) => console.log(list)}
          />
        </div>
      </div>
      <div className="main__content-wrapper">
        <div className="main__content"></div>
      </div>
    </div>
  );
}
