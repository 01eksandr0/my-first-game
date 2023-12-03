const btnEl = document.querySelector(".btn-hello");
const menuHelloEl = document.querySelector(".menu-hello");
const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");
const btnTwoLevel = document.querySelector(".btn-two-level");
const menuLevelTwo = document.querySelector(".menu-level-two");

// =========
btnEl.addEventListener("click", () => {
  menuHelloEl.classList.toggle("is-sicret");
  const fnToggClass = () => levelOne.classList.toggle("is-sicret");
  setTimeout(fnToggClass, 275);
});
btnTwoLevel.addEventListener("click", () => {
  menuLevelTwo.classList.toggle("is-sicret");
  levelTwo.classList.remove("is-sicret");
});
