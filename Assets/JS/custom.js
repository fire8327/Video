const header = document.getElementById("head");
const number = document.getElementById("number");
window.onscroll = function () {
if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
  header.classList.add("fixed");
  header.classList.add("border-b-2");
  header.classList.add("bg-[#fdfbfe]");
  number.classList.remove("opacity-0");
  number.classList.add("opacity-100");
} else {
  header.classList.remove("fixed");
  header.classList.remove("border-b-2");
  header.classList.remove("bg-[#fdfbfe]");
  number.classList.remove("opacity-100");
  number.classList.add("opacity-0");
}
}