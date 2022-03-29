 //variables
 const hourEl = document.querySelector('.hour');
 const minuteEl = document.querySelector('.minute');
 const secondEl = document.querySelector('.second');
 const timeEl = document.querySelector('.time');
 const dateEl = document.querySelector('.date');
 const toggle = document.querySelector('.toggle');
 const circleEl = document.querySelector('.circle');

 //days
 const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday',
  'Wednesday', 'Thursday', 'Friday'
 ];
 //months
 const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

 //Dark Method
 toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');

  if (html.classList.contains('dark')) {
   html.classList.remove('dark');
   hourEl.style.background = 'black'
   minuteEl.style.background = 'black'
   e.target.innerHTML = 'Dark mode';
   timeEl.style.color = 'black';
   circleEl.style.background = 'black'
   circleEl.style.color = 'white'

  } else {
   html.classList.add('dark')
   e.target.innerHTML = 'Light mode'
   hourEl.style.background = 'white'
   minuteEl.style.background = 'white'
   timeEl.style.color = 'white'
   circleEl.style.background = 'white'
   circleEl.style.color = 'black'
  }
 });

 //Time Function
 function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`

  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

  timeEl.innerHTML = `${hoursForClock} : ${minutes<10? `0${minutes}` : minutes} ${ampm}`

  dateEl.innerHTML = `${days[day+1]}, ${months[month]} <span class="circle">${date}</span>`

 }

 // StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
 const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
 }

 setTime()

 setInterval(setTime, 1000)