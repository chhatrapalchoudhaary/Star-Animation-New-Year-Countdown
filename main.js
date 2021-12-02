const body = document.body;
const endTime = new Date('December 31 2021 23:59:59');
const dayElement = endTime.getDate();
const hoursElement = endTime.getHours();
const minutesElement = endTime.getMinutes();
const secondsElement = endTime.getSeconds();
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const updateCountdown = () => {
    const startTime = new Date();
    const remainingDays = dayElement-(startTime.getDate());
    const remainingHours = hoursElement-(startTime.getHours());
    const remainingMinutes = minutesElement-(startTime.getMinutes());
    const remainingSeconds = secondsElement-(startTime.getSeconds());
    daysEl.innerHTML = remainingDays;
    hoursEl.innerHTML = remainingHours<10 ? '0' + remainingHours : remainingHours;
    minutesEl.innerHTML = remainingMinutes<10 ? '0' + remainingMinutes : remainingMinutes;
    secondsEl.innerHTML = remainingSeconds<10 ? '0' + remainingSeconds : remainingSeconds;
}

const createStars = () => {
    const stars = document.createElement('i');
    stars.classList.add('fas');
    stars.classList.add('fa-tint');
    stars.style.right = Math.random() * window.innerWidth + 'px';
    stars.style.animationDuration = Math.random() * 18 + 4 + 's';
    stars.style.opacity = Math.random();
    stars.style.fontSize = Math.random() * 6 + 7 + 'px';
    document.body.appendChild(stars);
    setTimeout(() => {
        stars.remove();
    }, 5000);
}

setInterval(updateCountdown, 1000);
setInterval(createStars, 50);
