const header = document.getElementById("head");
window.onscroll = function () {
if (document.body.scrollTop > 48 || document.documentElement.scrollTop > 48) {
  header.classList.add("fixed");
  header.classList.add("border-b");
  header.classList.add("bg-[#fdfbfe]");
} else {
  header.classList.remove("fixed");
  header.classList.remove("border-b");
  header.classList.remove("bg-[#fdfbfe]");
}
}