let today = new Date();

function getDate(d) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
}

const date = document.querySelector(".date");
date.innerHTML = getDate(today);

//Get Time
function showTime() {
  let date = new Date();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "Am";

  if (h == 0) {
    h == 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  //append 0 to a single digit
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let time = `${h}:${m}:${s} ${session}`;
  document.querySelector(".time").innerHTML = time;
}

setInterval(showTime, 1000);
