import React from 'react';
import Select from '../components/universal/Select/Select';
import Switch from '../components/universal/Switch/Switch';
type bufferType = {
  id: number;
  fullname: string;
  photo: string;
};
export default function CreateUser() {
  const [buffer, setBuffer] = React.useState<bufferType>();
  React.useEffect(() => {
    if (localStorage.getItem('buffer')) {
      setBuffer(JSON.parse(String(localStorage.getItem('buffer'))));
    }
  }, []);
  return (
    <div style={{ backgroundColor: '#000', color: '#fff' }}>
      <div>
        <span>id_vk* - </span>
        <span>{buffer?.id}</span>
      </div>
      <div>
        <span>name_vk* - </span>
        <span>{buffer?.fullname}</span>
      </div>
      <div>
        <span>telegram__nickname* - </span>
        <input type="text" />
      </div>
      <div>
        <span>group* - </span>
        <Select list={['11-201']} />
      </div>
      <div>
        <span>noise - </span>
        <Switch func={(isHandled) => console.log(isHandled)} />
      </div>
      <div>
        <span>photo_url - </span>
        <span>{buffer?.photo}</span>
        <img src={buffer?.photo} alt="" />
      </div>
      <div>
        <span>display_name - </span>
        <input type="text" value={buffer?.fullname} />
      </div>
      <div>
        <span>description - </span>
        <input type="text" />
      </div>
      <button>SUMBIT</button>
    </div>
  );
}
