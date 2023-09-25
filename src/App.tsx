import isMobile from './utils/isMobile';
import StartMobile from './pages/mobile/StartMobile';
import StartDesktop from './pages/desktop/StartDesktop';

function App() {
  if (import.meta.env.VITE_FLAG_DEV === '1') {
    return <StartDesktop />;
  } else if (import.meta.env.VITE_FLAG_DEV === '2') {
    return <StartMobile />;
  } else {
    if (isMobile(navigator.userAgent)) {
      return <StartMobile />;
    } else {
      return <StartDesktop />;
    }
  }
}

export default App;
