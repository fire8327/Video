const header = document.getElementById("head");
window.onscroll = function () {
if (document.body.scrollTop > 48 || document.documentElement.scrollTop > 48) {
  header.classList.remove("mt-6");
  header.classList.add("fixed");
  header.classList.add("bg-[#fdfbfe]");
} else {
  header.classList.add("mt-6");
  header.classList.remove("fixed");
  header.classList.remove("bg-[#fdfbfe]");
}
}