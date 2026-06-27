function toggleFilter(arrow) {
    const options = arrow.parentElement.nextElementSibling
    const vec = arrow
    console.log(options);
    console.log(vec);
    if (options.style.display === "block") {
        vec.style.transform = "rotate(0deg)"
        options.style.display = "none"
    }
    else {
        options.style.display = "block"
        vec.style.transform = "rotate(180deg)"
        const aside = document.querySelector(".aside")
        aside.style.height = "700px"

    }

}

function updateBagCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const bagCount = document.querySelector(".bag-count");

  if (cart.length > 0) {
    const bagCount = document.querySelector(".bag-count");
    bagCount.style.display = "flex";
    bagCount.textContent = cart.length;
  } else {
    bagCount.style.display = "none";
  }
}

window.addEventListener("load", updateBagCount);