import HistoryDesktop from '../desktop/HistoryDesktop';
import HistoryMobile from '../mobile/HistoryMobile';
import isMobile from '../utils/isMobile';

export default function Start() {
  if (import.meta.env.VITE_FLAG_DEV === '1') {
    return <HistoryDesktop />;
  } else if (import.meta.env.VITE_FLAG_DEV === '2') {
    return <HistoryMobile />;
  } else {
    if (isMobile(navigator.userAgent)) {
      return <HistoryMobile />;
    } else {
      return <HistoryDesktop />;
    }
  }
}
