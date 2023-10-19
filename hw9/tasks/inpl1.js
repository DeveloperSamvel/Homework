const formatDate = (date) => {
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
  let day = new Date(date).getDate();
  let month = new Date(date).getMonth();
  let year = new Date(date).getFullYear();

  let formattedDate = `${day} ${months[month]} ${year}`;
  return formattedDate;
};

console.log("Actual output: ", formatDate(new Date("2020-05-14"))); // 14 May 2020
