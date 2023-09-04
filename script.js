"strict mode";

const submitEl = document.querySelector(".rating-submit");
const numbersEl = document.querySelectorAll(".numbers");
const figureEl = document.getElementById("figure");
let rating;

submitEl.addEventListener("click", function () {
  console.log("Rating submitted");
  document.querySelector(".rating").style.display = "none";
  document.getElementById("hidden").style.display = "flex";
  document.querySelector(".rating").classList.add("hidden");
});

numbersEl.addEventListener("click", function () {
  if (rating === figureEl) console.log(`This is ${i}`);
});
