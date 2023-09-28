import React from 'react';
import RedirectDesktop from '../desktop/RedirectDesktop';
import RedirectMobile from '../mobile/RedirectMobile';
import isMobile from '../utils/isMobile';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Start() {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function checking(obj: any) {
    if (obj && obj.vk_id) {
      const data = (
        await axios.get('https://stockapi.netlify.app/api/users.check?fb_id=' + obj.vk_id)
      ).data;
      if (data.response.data) {
        localStorage.setItem('user', JSON.stringify(data.response.data));
        localStorage.removeItem('buffer');
        navigate('/main');
      } else {
        navigate('/createuser');
      }
    }
  }
  React.useEffect(() => {
    if (localStorage.getItem('user')) {
      checking(JSON.parse(String(localStorage.getItem('user'))));
    } else if (localStorage.getItem('buffer')) {
      checking(JSON.parse(String(localStorage.getItem('buffer'))));
    } else {
      navigate('/error');
    }
  }, []);
  if (import.meta.env.VITE_FLAG_DEV === '1') {
    return <RedirectDesktop />;
  } else if (import.meta.env.VITE_FLAG_DEV === '2') {
    return <RedirectMobile />;
  } else {
    if (isMobile(navigator.userAgent)) {
      return <RedirectMobile />;
    } else {
      return <RedirectDesktop />;
    }
  }
}
