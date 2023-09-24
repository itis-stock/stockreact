export default function isMobile(platform: string) {
  const userDeviceArray = [
    { device: true, platform: /Android/ }, // mobile
    { device: true, platform: /iPhone/ }, // mobile
    { device: true, platform: /iPad/ }, // mobile
    { device: true, platform: /Tablet OS/ }, // mobile
    { device: false, platform: /Linux/ }, // desktop
    { device: false, platform: /Windows NT/ }, // desktop
    { device: false, platform: /Macintosh/ }, // desktop
  ];

  for (const i in userDeviceArray) {
    if (userDeviceArray[i].platform.test(platform)) {
      return userDeviceArray[i].device;
    }
  }
  return false;
}
