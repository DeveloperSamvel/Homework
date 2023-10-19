const getWeekOfMonth = (date) => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const currentDay = date.getDate();

  return Math.ceil((firstDay + currentDay) / 7);
};

const result = getWeekOfMonth(new Date(2023, 8, 9));
console.log(result); // 2
