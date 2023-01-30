const head = document.getElementById("head");
if (document.body.scrollTop > 48 || document.documentElement.scrollTop > 48) {
  head.classList.add("fixed");
  head.classList.remove("mt-6");
  head.classList.add("bg-[#fdfbfe]");
} else {
  head.classList.remove("fixed");
  head.classList.add("mt-6");
}