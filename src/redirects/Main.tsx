import MainDesktop from '../desktop/MainDesktop';
import MainMobile from '../mobile/MainMobile';
import isMobile from '../utils/isMobile';

export default function Start() {
  if (import.meta.env.VITE_FLAG_DEV === '1') {
    return <MainDesktop />;
  } else if (import.meta.env.VITE_FLAG_DEV === '2') {
    document.body.className = 'mobile';
    return <MainMobile />;
  } else {
    if (isMobile(navigator.userAgent)) {
      document.body.className = 'mobile';
      return <MainMobile />;
    } else {
      return <MainDesktop />;
    }
  }
}
