const boxs = document.querySelector(".my-section");
let totalFunction = 0;
let first, second;
boxs.addEventListener("click", (e) => {
  if (totalFunction < 3) {
    if (e.target.nodeName === "DIV") {
      e.target.classList.remove("normal");
      e.target.classList.add("flip");
      const sss = () => (e.target.lastElementChild.style.display = "block");
      setTimeout(sss, 100);
      if (totalFunction === 0) {
        first = e.target;
      }
      if (totalFunction === 1) {
        second = e.target;
      }
      totalFunction++;
      if (
        totalFunction === 2 &&
        first.lastElementChild.lastElementChild.src ===
          second.lastElementChild.lastElementChild.src
      ) {
        totalFunction = 0;
      } else if (totalFunction === 2) {
        first.classList.remove("flip");
        first.classList.add("normal");
        first.lastElementChild.lastElementChild.style.display = "none";
        second.classList.remove("flip");
        second.classList.add("normal");
        second.lastElementChild.lastElementChild.style.display = "none";
        totalFunction = 0;
      }
    }
  } else {
  }
});
