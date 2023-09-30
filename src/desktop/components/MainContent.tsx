import { buttonsId } from '../MainDesktop';
import monkey1 from '../images/monkey1.png';
import monkey2 from '../images/monkey2.png';
import monkey3 from '../images/monkey3.png';
import monkey4 from '../images/monkey4.png';
type MainContentPropsType = {
  buttonsKey: buttonsId;
  posts: string[];
};

export default function MainContent({ buttonsKey, posts }: MainContentPropsType) {
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
        <div className="main__content-wrapper">{posts[0]}</div>
      </div>
    );
  }
  return (
    <div className="main__content">
      <div className="main__content-wrapper">{posts.join('-----')}</div>
    </div>
  );
}
