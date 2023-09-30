export default function getSemestr() {
  const date = new Date();
  if (date.getMonth() > 2 && date.getMonth() < 8) {
    return 2;
  } else {
    return 1;
  }
}
