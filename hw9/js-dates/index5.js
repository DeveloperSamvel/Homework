function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function countDaysInYearRange(startYear, endYear) {
    let totalDays = 0;
    for (let year = startYear; year <= endYear; year++) {
        if (isLeapYear(year)) {
            totalDays += 366;
        } else {
            totalDays += 365;
        }
    }
    return totalDays;
}

// Example usage
const startYear = 2010;
const endYear = 2023;
const totalDays = countDaysInYearRange(startYear, endYear);

console.log(`${startYear}-ից մինչև ${endYear} թվականը (ներառյալ) օրերի ընդհանուր թիվը ${totalDays} օր է»:`);
