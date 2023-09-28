import APIDesktop from '../desktop/APIDesktop';
import APIMobile from '../mobile/APIMobile';
import isMobile from '../utils/isMobile';

export default function Start() {
  if (import.meta.env.VITE_FLAG_DEV === '1') {
    return <APIDesktop />;
  } else if (import.meta.env.VITE_FLAG_DEV === '2') {
    return <APIMobile />;
  } else {
    if (isMobile(navigator.userAgent)) {
      return <APIMobile />;
    } else {
      return <APIDesktop />;
    }
  }
}
