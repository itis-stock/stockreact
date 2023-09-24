import Modal from "./components/modal/Modal.tsx";

function App() {
  const userDeviceArray = [
    { device: "Android", platform: /Android/ },
    { device: "iPhone", platform: /iPhone/ },
    { device: "iPad", platform: /iPad/ },
    { device: "Symbian", platform: /Symbian/ },
    { device: "Windows Phone", platform: /Windows Phone/ },
    { device: "Tablet OS", platform: /Tablet OS/ },
    { device: "Linux", platform: /Linux/ },
    { device: "Windows", platform: /Windows NT/ },
    { device: "Macintosh", platform: /Macintosh/ },
  ];

  const platform = navigator.userAgent;

  function getPlatform() {
    for (const i in userDeviceArray) {
      if (userDeviceArray[i].platform.test(platform)) {
        return userDeviceArray[i].device;
      }
    }
    return "Неизвестная платформа!" + platform;
  }

  console.log("Ваша платформа: " + getPlatform());
  console.log(platform);
  return (
    <div>
      <Modal />
    </div>
  );
}

export default App;
