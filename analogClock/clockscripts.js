const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

// create a function that will run every second
function setDate() {
  // console.log("Hello World");
  const now = new Date();
  const seconds = now.getSeconds();
  // console.log(seconds); // to log each second in console.
  // convert each second into a degree for the second hand to move;
  // **  1 sec should be 1 degree while 60 seconds should be 360 degrees **
  const secondsDegrees = (seconds / 60) * 360 + 90; // 90 offsets the default 90 degrees placed in the css under .hand
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // at 1 second, rotate(1deg)

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  // console.log(minutes);

  const hour = now.getHours();
  // const hourDegrees = (hour / 12) * 360 + 90;
  const hourDegrees = 0.5 * (hour * 60 + minutes) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
