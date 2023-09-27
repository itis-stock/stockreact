import CreateUserDesktop from '../desktop/CreateUserDesktop';
import CreateUserMobile from '../mobile/CreateUserMobile';
import isMobile from '../utils/isMobile';

export default function Start() {
  if (import.meta.env.VITE_FLAG_DEV === '1') {
    return <CreateUserDesktop />;
  } else if (import.meta.env.VITE_FLAG_DEV === '2') {
    return <CreateUserMobile />;
  } else {
    if (isMobile(navigator.userAgent)) {
      return <CreateUserMobile />;
    } else {
      return <CreateUserDesktop />;
    }
  }
}
