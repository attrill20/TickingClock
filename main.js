
// define clock hand element
const hand = document.querySelector(".hand");

// reset the interval count and degrees
let countDegrees = 0;

// set up a function to count the degrees (redefine it as +6 each time)
// move the hand that new degrees number each time
function degreeCount () {
    countDegrees = countDegrees + 6;
    console.log(countDegrees);
    hand.style.transform = `rotate(${countDegrees}deg`;
}

// create the setInterval which updates the degreeCount every 1000ms (1s)
setInterval(degreeCount, 1000);

// hand.style.transform = `rotate(90deg)`; //🔍 HINT: THis is an example of how to rotate the hand!
