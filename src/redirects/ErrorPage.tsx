import ErrorPageDesktop from '../desktop/ErrorPageDesktop';
import ErrorPageMobile from '../mobile/ErrorPageMobile';
import isMobile from '../utils/isMobile';

export default function Start() {
  if (import.meta.env.VITE_FLAG_DEV === '1') {
    return <ErrorPageDesktop />;
  } else if (import.meta.env.VITE_FLAG_DEV === '2') {
    document.body.className = 'mobile';
    return <ErrorPageMobile />;
  } else {
    if (isMobile(navigator.userAgent)) {
      document.body.className = 'mobile';
      return <ErrorPageMobile />;
    } else {
      return <ErrorPageDesktop />;
    }
  }
}
