import Select from './components/universal/Select/Select';
import Switch from './components/universal/Switch/Switch';

function App() {
  const userDeviceArray = [
    { device: 'Android', platform: /Android/ },
    { device: 'iPhone', platform: /iPhone/ },
    { device: 'iPad', platform: /iPad/ },
    { device: 'Symbian', platform: /Symbian/ },
    { device: 'Windows Phone', platform: /Windows Phone/ },
    { device: 'Tablet OS', platform: /Tablet OS/ },
    { device: 'Linux', platform: /Linux/ },
    { device: 'Windows', platform: /Windows NT/ },
    { device: 'Macintosh', platform: /Macintosh/ },
  ];

  const platform = navigator.userAgent;

  function getPlatform() {
    for (const i in userDeviceArray) {
      if (userDeviceArray[i].platform.test(platform)) {
        return userDeviceArray[i].device;
      }
    }
    return 'Неизвестная платформа!' + platform;
  }

  console.log('Ваша платформа: ' + getPlatform());
  return (
    <div
      style={{
        backgroundColor: '#222222',
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '40px',
      }}
    >
      <Switch func={(isHandled) => console.log(isHandled)} />
      <div
        style={{
          color: '#fff',
        }}
      >
        <Select list={['lldan', 'rostik', 'aidan']} def={1} />
      </div>
    </div>
  );
}

export default App;
