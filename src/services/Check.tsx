// import axios from 'axios';
import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Check() {
  const location = useLocation();
  const navigate = useNavigate();
  // const locationList = location.hash.replace('#', '').split('&');
  // console.log(locationList);

  // const access_token = locationList[0].replace('access_token=', '');
  // const user_id = locationList[2].replace('user_id=', '');

  React.useEffect(() => {
    const getData = async () => {
      const vkApiUrl =
        'https://api.vk.com/method/groups.get?access_token=' +
        'vk1.a.8W4p7eBfb9G85WBChMKNlF2wAWekfvb0y_vNeg5SUC5Z2G9-_3x2ZlzzvjPlOhggTPT4QkpmMEAHahXCZ0oL_rLPti4clVUm3nQdk5c1dN5_g4m0RWtpAktBqWZLjn-cAm0VP9c1tHWFMzOJXzUOtvuawXl52S6N10r46Jk4XcLkKN5uJML7w9sjCSu8rBH2U7rJk81GS2NLyTceSZ0oRA' +
        '&user_id=' +
        '256014823' +
        '&v=5.131';
      const data = await axios.get(vkApiUrl);
      console.log(data);
      // console.log(data.data.response.items);
      // data.data.response.items.map((el: number) => {
      //   if (el === 169708790) {
      //     navigate('/main');
      //   }
      // });
      // navigate('/error');
    };

    getData();
  }, []);
  return <div>Check</div>;
}
