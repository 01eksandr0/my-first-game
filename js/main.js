const boxs = document.querySelector(".my-section");
let totalFunction = 0;
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
      first.lastElementChild.lastElementChild.src ===
      second.lastElementChild.lastElementChild.src
    ) {
      totalFunction = 0;
      first = "";
      second = "";
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
});
