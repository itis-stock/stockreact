import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './scss/API.scss';
import { apiType } from '../@types';
import APISidebarSkeleton from './components/Skeleton';

export default function APIDesktop() {
  const [api, setApi] = React.useState<apiType[]>([]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const navigate = useNavigate();
  async function getting() {
    try {
      const data = (await axios.get('https://stockapi.netlify.app/api/api.get')).data;
      setApi(data.response.data);
    } catch (err) {
      navigate('/error');
    }
  }
  React.useEffect(() => {
    getting();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (api.length === 0) {
    return (
      <div className="api-desktop">
        <div className="api-desktop__sidebar">
          {[...new Array(7)].map(() => (
            <APISidebarSkeleton width={260} height={44} radius={9} />
          ))}
          <Link to="/" className="api-desktop__go">
            Вернуться домой
          </Link>
        </div>
        <div className="api-desktop__wrapper">
          <div className="api-desktop__content">
            <div className="api-desktop__subtitle">
              <APISidebarSkeleton width={200} height={50} radius={9} />
            </div>
            {[...new Array(7)].map((_, i) => (
              <APISidebarSkeleton width={300 + i * 10} height={50} radius={9} />
            ))}
            <APISidebarSkeleton width={150} height={30} radius={9} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="api-desktop">
      <div className="api-desktop__sidebar">
        {api.map((el, i) => {
          return (
            <div
              className={
                selectedIndex === i
                  ? 'api-desktop__sidebar-item active'
                  : 'api-desktop__sidebar-item'
              }
              key={i}
              onClick={() => setSelectedIndex(i)}
            >
              {el.title}
            </div>
          );
        })}
        <Link to="/" className="api-desktop__go">
          Вернуться домой
        </Link>
      </div>
      <div className="api-desktop__wrapper">
        <div className="api-desktop__content">
          {api[selectedIndex].content.map((el) => {
            if (el.type === 'subtitle') {
              return <div className="api-desktop__subtitle">{String(el.item)}</div>;
            } else if (el.type === 'subsubtitle') {
              return <div className="api-desktop__subsubtitle">{String(el.item)}</div>;
            } else {
              return (
                <div className="api-desktop__text">
                  {el.item.map((e) => {
                    if (e.highlight) {
                      return <span className="api-desktop__highlight">{e.text}</span>;
                    } else {
                      return <span>{e.text.replace('\t', '  ')}</span>;
                    }
                  })}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
