const countdownElement = document.getElementById("countdown");
const hamburger = document.querySelector('.fa-bars')
const navMenu = document.querySelector('.container')
const navLink = document.querySelectorAll('.nav-link')

// HAMBURGER MENU
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})
navLink.forEach(x => x.addEventListener('click', ()=>{
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}))
// Set the date we're counting down to
const countDownDate = new Date("Jan 28, 2024 00:00:00").getTime();

// Update the countdown every 1 second

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, stop updating
  if (distance < 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "EXPIRED";
  }
};

// Call updateCountdown immediately to avoid initial delay
updateCountdown();

// Update the countdown every 1000 milliseconds (1 second)
const countdownInterval = setInterval(updateCountdown, 1000);