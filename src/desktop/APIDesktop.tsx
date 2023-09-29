import React from 'react';
import NonFunctional from './components/NonFunctional';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './scss/API.scss';
type apiType = {
  title: string;
  content: apiContentType[];
};
type apiContentType = {
  type: 'text' | 'subtitle' | 'subsubtitle';
  item: apiContentItemType[];
};
type apiContentItemType = {
  text: string;
  highlight: boolean;
};
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
  }, []);
  if (api.length === 0) {
    return <NonFunctional err={false} />;
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
