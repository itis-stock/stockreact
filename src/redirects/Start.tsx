import StartDesktop from '../desktop/StartDesktop';
import StartMobile from '../mobile/StartMobile';
import isMobile from '../utils/isMobile';

export default function Start() {
  if (import.meta.env.VITE_FLAG_DEV === '1') {
    return <StartDesktop />;
  } else if (import.meta.env.VITE_FLAG_DEV === '2') {
    document.body.className = 'mobile';
    return <StartMobile />;
  } else {
    if (isMobile(navigator.userAgent)) {
      document.body.className = 'mobile';
      return <StartMobile />;
    } else {
      return <StartDesktop />;
    }
  }
}
