const dayOfYear = (date) => {
  let year = new Date(date).getFullYear();
  let firstDay = new Date(year, 0, 1);
  let diff = new Date(date) - firstDay;
  let days = diff / 24 / 3600 / 1000 + 1;
  console.log("days", days);
  return days;
};

dayOfYear("12/13/2020"); // 348
dayOfYear("12/17/2020"); // 352
dayOfYear("11/16/2020"); // 321
dayOfYear("1/9/2019"); // 9
dayOfYear("3/1/2004"); // 61
dayOfYear("12/31/2000"); // 366
