import { useNavigate } from 'react-router-dom';
import StartDesktop from '../desktop/StartDesktop';
import StartMobile from '../mobile/StartMobile';
import isMobile from '../utils/isMobile';
import React from 'react';
import { userType } from '../@types';
import axios from 'axios';

export default function Start() {
  const navigate = useNavigate();

  async function checkingUser(fb_id: number) {
    const data = (await axios.get('https://stockapi.netlify.app/api/users.check?fb_id=' + fb_id))
      .data;
    if (data.response.data) {
      localStorage.setItem('user', JSON.stringify(data.response.data));
      navigate('/main');
    }
  }

  React.useEffect(() => {
    if (localStorage.getItem('user')) {
      const user: userType = JSON.parse(String(localStorage.getItem('user')));
      checkingUser(user.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (import.meta.env.VITE_FLAG_DEV === '1') {
    return <StartDesktop />;
  } else if (import.meta.env.VITE_FLAG_DEV === '2') {
    document.body.className = 'mobile';
    return <StartMobile />;
  } else {
    if (isMobile(navigator.userAgent)) {
      document.body.className = 'mobile';
      return <StartMobile />;
    } else {
      return <StartDesktop />;
    }
  }
}
