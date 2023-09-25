import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Check() {
  const location = useLocation();
  const navigate = useNavigate();
  const locationList = location.hash.replace('#', '').split('&');
  console.log(locationList);

  const access_token = locationList[0].replace('access_token=', '');
  const user_id = locationList[2].replace('user_id=', '');

  React.useEffect(() => {
    const getData = async () => {
      console.log(
        'https://api.vk.com/method/groups.get?access_token=' +
          access_token +
          '&user_id=' +
          user_id +
          '&v=5.131',
      );
      const data = await axios.get(
        'https://api.vk.com/method/groups.get?access_token=' +
          access_token +
          '&user_id=' +
          user_id +
          '&v=5.131',
      );
      console.log(data.data.response.items);
      data.data.response.items.map((el: number) => {
        if (el === 169708790) {
          navigate('/main');
        }
      });
      navigate('/error');
    };

    getData();
  }, []);
  return <div>Check</div>;
}
