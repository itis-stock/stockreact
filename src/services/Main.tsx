import MainDesktop from '../pages/desktop/Main/MainDesktop';
import isMobile from '../utils/isMobile';
import MainMobile from '../pages/mobile/Main/MainMobile';

export default function Main() {
  if (import.meta.env.VITE_FLAG_DEV === '1') {
    return <MainDesktop />;
  } else if (import.meta.env.VITE_FLAG_DEV === '2') {
    return <MainMobile />;
  } else {
    if (isMobile(navigator.userAgent)) {
      return <MainDesktop />;
    } else {
      return <MainMobile />;
    }
  }
}
