"strict mode";

const submitEl = document.querySelector(".rating-submit");
const numbersEl = document.querySelectorAll(".numbers");

for (let i = 0; i < numbersEl.length; i++) {}

submitEl.addEventListener("click", function () {
  console.log("Rating submitted");
  document.querySelector(".rating").style.display = "none";
  document.getElementById("hidden").style.display = "flex";
  document.querySelector(".rating").classList.add("hidden");
});
