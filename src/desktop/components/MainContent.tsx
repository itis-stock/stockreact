import React from 'react';
import { buttonsId } from '../MainDesktop';
import monkey1 from '../images/monkey1.png';
import monkey2 from '../images/monkey2.png';
import monkey3 from '../images/monkey3.png';
import monkey4 from '../images/monkey4.png';
import { documentType } from '../../@types';
import axios from 'axios';
import MainPost from './MainPost';
type MainContentPropsType = {
  buttonsKey: buttonsId;
  posts: string[];
  roll: boolean;
};

export default function MainContent({ buttonsKey, posts, roll }: MainContentPropsType) {
  const [dataDocs, setDataDocs] = React.useState<documentType | null>(null);

  async function gettingDocs(fb_id: string) {
    const data = await axios.get('https://stockapi.netlify.app/api/docs.get?fb_id=' + fb_id);
    setDataDocs(data.data.response.data);
  }

  React.useEffect(() => {
    if (buttonsKey && buttonsKey === 'docs') {
      setDataDocs(null);
      if (posts) {
        gettingDocs(posts[0]);
      }
    }
  }, [buttonsKey, posts]);

  if (!buttonsKey) {
    return (
      <div className="main__content">
        <div className="main__content-wrapper center">
          <img src={monkey1} />
          <img src={monkey2} />
          <img src={monkey3} />
          <img src={monkey4} />
        </div>
      </div>
    );
  }
  if (posts.length === 0) {
    return (
      <div className="main__content">
        <div className="main__content-wrapper center">
          <img src={monkey4} />
          <img src={monkey3} />
          <img src={monkey2} />
          <img src={monkey1} />
        </div>
      </div>
    );
  }
  if (buttonsKey === 'docs') {
    return (
      <div className="main__content">
        <div className="main__content-wrapper">
          <iframe src={dataDocs?.url} className="main__iframe"></iframe>
          <a target="_blank" href={dataDocs?.url} className="main__docs-link">
            Открыть в новой вкладке
          </a>
        </div>
      </div>
    );
  }
  console.log(posts);
  return <MainPost posts={posts} buttonsKey={buttonsKey} roll={roll} />;
}
