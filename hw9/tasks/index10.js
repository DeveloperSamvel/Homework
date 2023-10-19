const myGetDay = (date) => {
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = new Date(date).getDay();

  return week[day];
};

console.log(myGetDay("12/07/2016")); // Wednesday
console.log(myGetDay("09/04/2016")); // Sunday
console.log(myGetDay("12/08/2011")); // Thursday
