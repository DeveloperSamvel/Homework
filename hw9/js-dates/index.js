function getYear(date) {
    return new Date().getFullYear() - new Date(date).getFullYear();
}

console.log(getYear("1996-11-15"));