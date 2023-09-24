import React from 'react';
import isMobile from './utils/isMobile';
import StartMobile from './pages/mobile/StartMobile';
import StartDesktop from './pages/desktop/StartDesktop';

function App() {
  React.useEffect(() => {
    // DEV
    console.log(isMobile(navigator.userAgent));
  }, []);
  if (isMobile(navigator.userAgent)) {
    return <StartMobile />;
  } else {
    return <StartDesktop />;
  }
}

export default App;
