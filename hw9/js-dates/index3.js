function updateTimer() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `<p>Մնաց: ${days} օր ${hours} ժամ ${minutes} րոպե ${seconds} վարկյան</p>`;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').innerHTML = '<p>Ժամանակը սպառվեց։</p>';
    }
}

const targetDate = new Date('2023-12-31T23:59:59').getTime();
const timerInterval = setInterval(updateTimer, 1000);