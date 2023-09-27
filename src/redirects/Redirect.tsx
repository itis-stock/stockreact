import RedirectDesktop from '../desktop/RedirectDesktop';
import RedirectMobile from '../mobile/RedirectMobile';
import isMobile from '../utils/isMobile';

export default function Start() {
  if (import.meta.env.VITE_FLAG_DEV === '1') {
    return <RedirectDesktop />;
  } else if (import.meta.env.VITE_FLAG_DEV === '2') {
    return <RedirectMobile />;
  } else {
    if (isMobile(navigator.userAgent)) {
      return <RedirectMobile />;
    } else {
      return <RedirectDesktop />;
    }
  }
}
