import CheckDesktop from '../desktop/CheckDesktop';
import CheckMobile from '../mobile/CheckMobile';
import isMobile from '../utils/isMobile';

export default function Start() {
  if (import.meta.env.VITE_FLAG_DEV === '1') {
    return <CheckDesktop />;
  } else if (import.meta.env.VITE_FLAG_DEV === '2') {
    document.body.className = 'mobile';
    return <CheckMobile />;
  } else {
    if (isMobile(navigator.userAgent)) {
      document.body.className = 'mobile';
      return <CheckMobile />;
    } else {
      return <CheckDesktop />;
    }
  }
}
