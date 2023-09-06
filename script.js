"strict mode";

const submit = document.querySelector(".rating-submit");
let numbers = document.querySelectorAll(".numbers");
let rated = document.querySelector("span");

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    console.log(`you selected ${i}`);
    numbers[i].style.backgroundColor = "hsl(217, 12%, 63%)";
    numbers[i].style.color = "hsl(0, 0%, 100%)";

    if (`${i}` === "0") {
      document.querySelector(".header").textContent = "You selected 1 out of 5";
    } else if (`${i}` === "1") {
      document.querySelector(".header").textContent = "You selected 2 out of 5";
    } else if (`${i}` === "2") {
      document.querySelector(".header").textContent = "You selected 3 out of 5";
    } else if (`${i}` === "3") {
      document.querySelector(".header").textContent = "You selected 4 out of 5";
    } else if (`${i}` === "4") {
      document.querySelector(".header").textContent = "You selected 5 out of 5";
    }
  });
}

submit.addEventListener("click", function () {
  console.log("submit");
  document.querySelector(".rating").style.display = "none";
  document.getElementById("hidden").style.display = "flex";
  document.querySelector(".rating").classList.add("hidden");

  // document.querySelector(".header").textContent = `You selected ${i} out of 5`;
});
