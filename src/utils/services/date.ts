export const postDetailDateParse = (data: string) => {
  const date = new Date(data);
  const now = new Date();

  const currentYear = now.getFullYear();
  const postYear = date.getFullYear();

  const formattedMonth = (date.getMonth() + 1).toString().padStart(2, '0');
  const formattedDay = date.getDate().toString().padStart(2, '0');
  const formattedHour = date.getHours().toString().padStart(2, '0');
  const formattedMinute = date.getMinutes().toString().padStart(2, '0');

  if (currentYear === postYear) {
    return `${formattedMonth}/${formattedDay} ${formattedHour}:${formattedMinute}`;
  }
  const lastTwoDigitsOfYear = postYear.toString().slice(-2); // 연도의 마지막 두 자리
  return `${lastTwoDigitsOfYear}/${formattedMonth}/${formattedDay} ${formattedHour}:${formattedMinute}`;
};

export const postDateParse = (data: string) => {
  const now = new Date();
  const date = new Date(data);
  const diff = now.getTime() - date.getTime();

  const ONE_MINUTE = 60 * 1000;
  const ONE_HOUR = 60 * ONE_MINUTE;
  const ONE_DAY = 24 * ONE_HOUR;

  if (diff < ONE_HOUR) {
    const minutes = Math.floor(diff / ONE_MINUTE);
    return `${minutes}분 전`;
  }

  if (diff < ONE_DAY) {
    const hours = Math.floor(diff / ONE_HOUR);
    return `${hours}시간 전`;
  }

  const currentYear = now.getFullYear();
  const postYear = date.getFullYear();
  const formattedMonth = (date.getMonth() + 1).toString().padStart(2, '0');
  const formattedDay = date.getDate().toString().padStart(2, '0');

  if (currentYear === postYear) {
    return `${formattedMonth}/${formattedDay}`;
  }
  return `${postYear}년`;
};
