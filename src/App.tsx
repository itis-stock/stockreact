import React from 'react';
import isMobile from './utils/isMobile';
import StartMobile from './pages/mobile/StartMobile';
import StartDesktop from './pages/desktop/StartDesktop';

function App({ FLAG_DEV }: { FLAG_DEV: boolean }) {
  if (FLAG_DEV) {
    if (window.innerWidth <= 1050) {
      return <StartMobile />;
    } else {
      return <StartDesktop />;
    }
  } else {
    if (isMobile(navigator.userAgent)) {
      return <StartMobile />;
    } else {
      return <StartDesktop />;
    }
  }
}

export default App;
