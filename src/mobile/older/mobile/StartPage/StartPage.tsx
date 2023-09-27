import classes from './StartPage.module.scss';
import StartPageItem from './StartPageItem.tsx';
import StartPageInfo from './StartPageInfo.tsx';

const StartPage = () => {
  return (
    <div className={classes.page}>
      <h1 className={classes.title}>
        <img src="/images/logo-text.png" alt="logo-text" className={classes.imageLogo} />
        <img src="/images/rooster.png" alt="rooster" className={classes.imageRooster} />
      </h1>
      <div className={classes['page__blocks']}>
        <StartPageItem
          title={'Что?'}
          svg={
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" fill="none">
              <path
                fill="#000"
                d="M3.624 8.984c.64 0 1.016-.378 1.016-.838v-.142c0-.66.413-1.085 1.279-1.628C7.135 5.621 8 4.936 8 3.521 8 1.562 6.144.5 4.013.5 1.868.5.45 1.468.1 2.553c-.062.189-.1.378-.1.578 0 .531.439.814.853.814.439 0 .702-.188.928-.472l.225-.283c.44-.684 1.104-1.085 1.931-1.085 1.141 0 1.881.613 1.881 1.51 0 .802-.526 1.192-1.617 1.912-.903.59-1.58 1.215-1.58 2.371v.154c0 .613.363.932 1.003.932ZM3.599 12.5c.727 0 1.354-.543 1.354-1.227s-.614-1.227-1.354-1.227c-.74 0-1.354.554-1.354 1.227 0 .672.626 1.227 1.354 1.227Z"
              />
            </svg>
          }
          text={'Хз, что тут объяснять. Твердо и четко. Новый сток.'}
          block={false}
        />
        <StartPageItem
          title={'Зачем?'}
          svg={
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" fill="none">
              <path
                fill="#000"
                d="M3.624 8.984c.64 0 1.016-.378 1.016-.838v-.142c0-.66.413-1.085 1.279-1.628C7.135 5.621 8 4.936 8 3.521 8 1.562 6.144.5 4.013.5 1.868.5.45 1.468.1 2.553c-.062.189-.1.378-.1.578 0 .531.439.814.853.814.439 0 .702-.188.928-.472l.225-.283c.44-.684 1.104-1.085 1.931-1.085 1.141 0 1.881.613 1.881 1.51 0 .802-.526 1.192-1.617 1.912-.903.59-1.58 1.215-1.58 2.371v.154c0 .613.363.932 1.003.932ZM3.599 12.5c.727 0 1.354-.543 1.354-1.227s-.614-1.227-1.354-1.227c-.74 0-1.354.554-1.354 1.227 0 .672.626 1.227 1.354 1.227Z"
              />
            </svg>
          }
          text={'Потому что тупо могу и мне похуй в принципе.'}
          block={false}
        />
        <StartPageItem
          title={'Github'}
          svg={
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" fill="none">
              <g clipPath="url(#a)">
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M6 .5c3.314 0 6 2.754 6 6.152 0 2.717-1.717 5.022-4.1 5.837-.304.06-.412-.132-.412-.296 0-.202.007-.865.007-1.688 0-.574-.192-.948-.407-1.139 1.336-.152 2.74-.673 2.74-3.035 0-.672-.233-1.22-.618-1.652.062-.155.268-.78-.059-1.628 0 0-.503-.165-1.648.63A5.637 5.637 0 0 0 6 3.476c-.51.002-1.023.07-1.502.207-1.146-.796-1.65-.63-1.65-.63-.326.846-.12 1.472-.059 1.627-.383.431-.618.98-.618 1.652 0 2.356 1.401 2.885 2.734 3.04-.172.154-.327.425-.381.822-.342.158-1.21.43-1.746-.51 0 0-.317-.592-.92-.635 0 0-.585-.008-.04.374 0 0 .392.19.665.9 0 0 .353 1.098 2.022.726.003.514.008.999.008 1.145 0 .163-.11.353-.41.296C1.72 11.676 0 9.37 0 6.652 0 3.254 2.687.5 6 .5Z"
                  clipRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 .5h12v12H0z" />
                </clipPath>
              </defs>
            </svg>
          }
          text={'Почему в институте, где тупо все программисты, нет ни одного open-source проекта?'}
          block={true}
        />
      </div>
      <a
        style={{
          color: '#fff',
        }}
        href="https://oauth.vk.com/authorize?client_id=51757279&redirect_uri=http://localhost:5173/check&display=page&scope=groups&response_type=token&v=5.131"
      >
        Продолжить с VK
      </a>
      <StartPageInfo />
    </div>
  );
};

export default StartPage;
