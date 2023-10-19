function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString(undefined, options);
    return formattedDate;
}
  
const formattedDate = formatDate("1996-11-15");
console.log(formattedDate);
  