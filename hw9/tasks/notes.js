const monthsInterval = (date1, date2) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let min = date1;
  let max = date2;
  if(min > max) {
    [min, max] = [max, min];
  }

  if(max.getFullYear() > min.getFullYear() + 1) {
    return months;
  }
  else if(max.getFullYear() === min.getFullYear() + 1) {
    if(max.getMonth()>= min.getMonth()) {
      return months;
    }

    let arr = [];
    for(let i = 0; i <= max.getMonth() + 12 - min.getMonth(); i++){
      let monthNumber = min.getMonth() + i;
      if(monthNumber < 12) {
        arr.push(months[monthNumber]);
      }
      else {
        arr.push(months[monthNumber - 12]);
      }
    }

    return arr;
  }
  else {
    let arr = [];
    for(let i = 0; i <= max.getMonth() - min.getMonth(); i++){
      arr.push(months[min.getMonth() + i]);
    }

    return arr;
  }
};

// let january = new Date(2017, 0, 1);
// let march = new Date(2017, 2, 1);

// console.log(monthsInterval(january, march));

// let december = new Date(2017, 11, 1);
// let january = new Date(2018, 0, 1);

// console.log(monthsInterval(december, january))

let december = new Date(2017, 0, 1);
let january = new Date(2018, 0, 1);

console.log(monthsInterval(december, january))