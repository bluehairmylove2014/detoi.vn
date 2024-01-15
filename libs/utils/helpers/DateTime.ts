function isDateGreaterThan(dateCheck: string, dateTarget: string): boolean {
  if (!dateCheck || !dateTarget) return false;
  const check = new Date(dateCheck);
  const target = new Date(dateTarget);

  return check > target;
}
function calcNight(startDate: string, endDate: string): number {
  if (!startDate || !endDate) return 0;

  const startDateRaw = new Date(startDate);
  const endDateRaw = new Date(endDate);

  // Tính hiệu của hai ngày
  const timeDifference = endDateRaw.getTime() - startDateRaw.getTime();

  // Chuyển đổi thành số đêm (mili giây trong một ngày)
  const oneDayInMilliseconds = 1000 * 60 * 60 * 24;
  const night = Math.round(timeDifference / oneDayInMilliseconds);
  return night || 1;
}
function getCurrentDateTime(): string {
  const now = new Date();

  // Lấy thông tin ngày, tháng, năm, giờ và phút
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Thêm '0' ở trước nếu cần
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Tạo chuỗi ngày giờ theo định dạng "YYYY-MM-DDTHH:mm:ss"
  const currentDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

  return currentDateTime;
}
function nMonthsFromToday(n: number): Date {
  const result = new Date();
  result.setMonth(result.getMonth() + n);
  return result;
}
function nDaysFromToday(n: number): Date {
  const result = new Date();
  result.setDate(result.getDate() + n);
  return result;
}
function shortenDateTime(dateTime: string): string {
  const dateObj: Date = new Date(dateTime);

  const isDateTime: boolean = dateTime.includes('T');

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: isDateTime ? 'numeric' : undefined,
    minute: isDateTime ? 'numeric' : undefined,
  };

  return dateObj.toLocaleDateString(undefined, options);
}
function revertShortenedDateTime(dateTime: string): string {
  const dateObj: Date = new Date(dateTime);
  const year: number = dateObj.getFullYear();
  const month: string = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day: string = String(dateObj.getDate()).padStart(2, '0');
  const hour: string = String(dateObj.getHours()).padStart(2, '0');
  const minute: string = String(dateObj.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day}T${hour}:${minute}`;
}
function formatDate(dateObj: Date) {
  const dateRaw = new Date(dateObj);

  let days: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let dayOfWeek: string = days[dateRaw.getDay()];
  let date: number = dateRaw.getDate();
  let month: number = dateRaw.getMonth() + 1;
  let year: number = dateRaw.getFullYear();

  let hours: number = dateRaw.getHours();
  let minutes: number = dateRaw.getMinutes();

  const formattedHours: string = hours.toString().padStart(2, '0');
  const formattedMinutes: string = minutes.toString().padStart(2, '0');

  return {
    dateMonthYear: `${date} - ${month} - ${year}`,
    days: dayOfWeek,
    time24: `${formattedHours}:${formattedMinutes}`,
  };
}

export {
  isDateGreaterThan,
  calcNight,
  getCurrentDateTime,
  shortenDateTime,
  revertShortenedDateTime,
  formatDate,
  nMonthsFromToday,
  nDaysFromToday,
};
