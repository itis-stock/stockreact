import { useEffect, useState } from 'react';
import classes from '../../modules/MobileAPI.module.scss';
import arrowRight from '../../images/arrowright.svg';
import axios from 'axios';
import Skeleton from '../../../desktop/components/Skeleton.tsx';
import List from '../List.tsx';
import Modal from '../Modal.tsx';
import MobileAPISelect from './MobileAPISelect.tsx';

type apiType = {
  title: string;
  content: apiContentType[];
};
export type apiContentType = {
  type: 'text' | 'subtitle' | 'subsubtitle';
  item: apiContentItemType[];
};
export type apiContentItemType = {
  text: string;
  highlight: boolean;
};

export default function MobileAPI() {
  const [api, setAPI] = useState<apiType[]>([]);
  const [openModal, setOpenModal] = useState<apiType | null>(null);
  useEffect(() => {
    const getAPI = async () => {
      const response = await axios.get('https://stockapi.netlify.app/api/api.get');
      setAPI(response.data.response.data);
    };
    getAPI();
  }, []);
  return (
    <>
      {api.length > 0 ? (
        <List
          elements={api.map((el) => {
            return (
              <div className={classes['api']} onClick={() => setOpenModal(el)}>
                <div>{el.title}</div>
                <img src={arrowRight} />
              </div>
            );
          })}
        />
      ) : (
        <>
          <Skeleton width={window.innerWidth - 20} height={40} radius={9} />
          <Skeleton width={window.innerWidth - 20} height={40} radius={9} />
          <Skeleton width={window.innerWidth - 20} height={40} radius={9} />
          <Skeleton width={window.innerWidth - 20} height={40} radius={9} />
          <Skeleton width={window.innerWidth - 20} height={40} radius={9} />
        </>
      )}

      {openModal ? (
        <Modal
          title={openModal.title}
          element={<MobileAPISelect content={openModal.content} />}
          func={(e) => setOpenModal(e)}
        />
      ) : (
        ''
      )}
    </>
  );
}
