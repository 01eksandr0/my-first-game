const btnEl = document.querySelector(".btn-hello");
const menuHelloEl = document.querySelector(".menu-hello");
const levelOne = document.querySelector(".level-one");
// =========
btnEl.addEventListener("click", () => {
  menuHelloEl.classList.toggle("is-sicret");
  const fnToggClass = () => levelOne.classList.toggle("is-sicret");
  setTimeout(fnToggClass, 275);
});
