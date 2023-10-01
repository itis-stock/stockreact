export default function reformatDate(date: number | undefined) {
  const res = {
    date: '',
    time: '',
  };
  if (!date) {
    return null;
  }

  const buffer = new Date(date * 1000);
  if (buffer.getDay() < 10) {
    res.date += '0' + buffer.getDay();
  } else {
    res.date += buffer.getDay();
  }
  if (buffer.getMonth() + 1 < 10) {
    res.date += '.0' + (buffer.getMonth() + 1);
  } else {
    res.date += '.' + (buffer.getMonth() + 1);
  }
  res.date += '.' + buffer.getFullYear();

  if (buffer.getHours() < 10) {
    res.time += '0' + buffer.getHours();
  } else {
    res.time += buffer.getHours();
  }

  if (buffer.getMinutes() < 10) {
    res.time += ':0' + buffer.getMinutes();
  } else {
    res.time += ':' + buffer.getMinutes();
  }
  return res;
}
