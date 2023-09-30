import React from 'react';
import './scss/Main.scss';
import { setMeta } from '../redux/metaSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { metaType, teachersType, userType } from '../@types';
import MainNavigation from './components/MainNavigation';
import MainButtons from './components/MainButtons';
import MainContent from './components/MainContent';

export type buttonsId = 'exams' | 'tests' | 'docs' | null;

export default function MainDesktop() {
  const [teachers, setTeachers] = React.useState<teachersType | null>(null);
  const [user, setUser] = React.useState<userType>();
  const [buttonsKey, setButtonsKey] = React.useState<buttonsId>(null);
  const [posts, setPosts] = React.useState<string[]>([]);
  const navigate = useNavigate();
  const meta = useSelector((state: metaType) => state);
  const dispatch = useDispatch();
  // console.group('POSTS');
  // console.log(posts);
  // console.groupEnd();
  async function gettingMeta() {
    const data = (await axios.get('https://stockapi.netlify.app/api/meta.getActual')).data;
    if (data.response.data) {
      dispatch(setMeta(data.response.data));
    }
  }
  console.log(posts);
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
        <MainNavigation
          func={(c) => {
            setButtonsKey(c);
            setPosts([]);
          }}
          selectedButton={buttonsKey}
        />
        <MainButtons
          func={(c) => setPosts(c)}
          meta={meta}
          teachers={teachers}
          buttonsKey={buttonsKey}
        />
      </div>
      <MainContent posts={posts} buttonsKey={buttonsKey} />
    </div>
  );
}
