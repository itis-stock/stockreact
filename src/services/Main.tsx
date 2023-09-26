import MainDesktop from '../pages/desktop/Main/MainDesktop';
import isMobile from '../utils/isMobile';
import MainMobile from '../pages/mobile/Main/MainMobile';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Main() {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function local(buffer: any) {
    console.log(buffer.id);
    const data = (
      await axios.get('https://stockapi.netlify.app/api/users.check?fb_id=' + buffer.id)
    ).data;
    console.log(data);
    if (data.response.data) {
      localStorage.setItem('user', JSON.stringify(data.response.data));
    } else {
      navigate('/createuser');
    }
  }
  React.useEffect(() => {
    if (localStorage.getItem('buffer')) {
      local(JSON.parse(String(localStorage.getItem('buffer'))));
    } else if (localStorage.getItem('user')) {
      local(JSON.parse(String(localStorage.getItem('user'))));
    } else {
      navigate('/error');
    }
  }, []);
  if (import.meta.env.VITE_FLAG_DEV === '1') {
    return <MainDesktop />;
  } else if (import.meta.env.VITE_FLAG_DEV === '2') {
    return <MainMobile />;
  } else {
    if (isMobile(navigator.userAgent)) {
      return <MainMobile />;
    } else {
      return <MainDesktop />;
    }
  }
}
