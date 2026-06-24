const hearts = document.querySelectorAll('.heart');

hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        const liked = heart.dataset.liked === 'true';
        heart.dataset.liked = !liked;
        heart.src = liked 
            ? './images/Vector 6.png'    
            : './images/heart.png'; 
    });
});




const stars = document.querySelector(".stars");
const emptySrc = "./images/Star 1.png";
const filledSrc = "./images/star.png";

function renderStars(rating) {
    console.log(stars);
    stars.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        const img = document.createElement("img");
        img.classList.add("star");
        if (i <= rating) {
            img.src = filledSrc;
            img.classList.add("filled");
        } else {
            img.src = emptySrc;
        }
        img.dataset.index = i;
        stars.appendChild(img);
    }
}
renderStars(-1);


stars.addEventListener("click", (e) => {
    if (!e.target.classList.contains("star")) return;
    const index = parseInt(e.target.dataset.index);
    renderStars(index);
})
