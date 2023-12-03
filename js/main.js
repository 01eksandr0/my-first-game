const boxs = document.querySelector(".my-section");
const boxTwo = document.querySelector(".my-section-two");
const levelOne = document.querySelector(".level-one");
const menuLevelTwo = document.querySelector(".menu-level-two");
const levelTwo = document.querySelector(".level-two");
const godbay = document.querySelector(".goodbay");
let totalFunction = 0;
let totalSum = 0;
let first, second;
boxs.addEventListener("click", (e) => {
  if (e.target.classList.contains("cart")) {
    if (totalFunction === 0) {
      e.target.classList.add("flip");
      const fnAddActive = () =>
        (e.target.lastElementChild.style.display = "block");
      setTimeout(fnAddActive, 100);
      first = e.target;
      totalFunction += 1;
    } else if (totalFunction === 1) {
      e.target.classList.add("flip");
      const fnAddActive = () =>
        (e.target.lastElementChild.style.display = "block");
      setTimeout(fnAddActive, 100);
      second = e.target;
      totalFunction += 1;
    }
    if (
      totalFunction === 2 &&
      first.lastElementChild.lastElementChild.src ===
        second.lastElementChild.lastElementChild.src
    ) {
      totalFunction = 0;
      first = "";
      second = "";
      totalSum += 1;
    } else if (totalFunction === 2 && first !== second) {
      const fnRemove = () => {
        first.classList.remove("flip");
        first.lastElementChild.style.display = "none";
        second.classList.remove("flip");
        second.lastElementChild.style.display = "none";
        totalFunction = 0;
        first = "";
        second = "";
      };
      setTimeout(fnRemove, 800);
    }
  }
  if (totalSum === 6) {
    totalSum = 0;
    const fnNextLevel = () => {
      levelOne.classList.toggle("is-sicret");
    };
    setTimeout(fnNextLevel, 500);
    const fnNextLevelMenu = () => {
      menuLevelTwo.classList.toggle("is-sicret");
    };
    setTimeout(fnNextLevelMenu, 1000);
  }
  console.log(totalSum);
});
// =========
boxTwo.addEventListener("click", (e) => {
  if (e.target.classList.contains("cart")) {
    if (totalFunction === 0) {
      e.target.classList.add("flip");
      const fnAddActive = () =>
        (e.target.lastElementChild.style.display = "block");
      setTimeout(fnAddActive, 100);
      first = e.target;
      totalFunction += 1;
    } else if (totalFunction === 1) {
      e.target.classList.add("flip");
      const fnAddActive = () =>
        (e.target.lastElementChild.style.display = "block");
      setTimeout(fnAddActive, 100);
      second = e.target;
      totalFunction += 1;
    }
    if (
      totalFunction === 2 &&
      first.lastElementChild.lastElementChild.src ===
        second.lastElementChild.lastElementChild.src
    ) {
      totalFunction = 0;
      first = "";
      second = "";
      totalSum += 1;
    } else if (totalFunction === 2 && first !== second) {
      const fnRemove = () => {
        first.classList.remove("flip");
        first.lastElementChild.style.display = "none";
        second.classList.remove("flip");
        second.lastElementChild.style.display = "none";
        totalFunction = 0;
        first = "";
        second = "";
      };
      setTimeout(fnRemove, 800);
    }
  }
  if (totalSum === 6) {
    totalSum = 0;
    const fnNextLevel = () => {
      levelTwo.classList.toggle("is-sicret");
    };
    setTimeout(fnNextLevel, 500);
    const fnNextLevelMenu = () => {
      godbay.classList.toggle("is-sicret");
    };
    setTimeout(fnNextLevelMenu, 1000);
  }
});
