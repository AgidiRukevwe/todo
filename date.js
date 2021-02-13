const date = new Date();
const months = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const day = date.getDate();
const month = months[date.getMonth()];
const year = date.getFullYear();

localStorage.setItem("name", "adams");
const john = localStorage.getItem("name");
_get("#date").textContent = `${day} ${month} ${year}`;
