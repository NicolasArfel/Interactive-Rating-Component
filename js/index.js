const rateItems = document.querySelectorAll('.list__item');
const submit = document.querySelector(".btn__submit");
const rating = document.querySelector(".span__value");
const card = document.querySelector(".card");
const success = document.querySelector(".success");

let value = 0;

rateItems.forEach((rateItem) => {
    rateItem.addEventListener('click', (event) => {
        rateItems.forEach((rateItem) => rateItem.classList.remove("selected"));
        event.target.classList.add("selected");
    value = event.target.textContent;
    } )
})



submit.addEventListener("click", () => {
    rating.textContent = value;
    card.style.display = "none";
    success.style.display = "flex";
  });