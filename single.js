const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);
const productList = [
  {
    id: 0,
    img: "./images/product1.png",
    title: "Rings “Mercury”",
    price: "7494 USD"
  },
  {
    id: 1,
    img: "./images/product2.png",
    title: "Rings “Ag”",
    price: "3990 USD"
  },
  {
    id: 2,
    img: "./images/product3.png",
    title: "Rings “Kiki”",
    price: "1221 USD"
  },
  {
    id: 3,
    img: "./images/product4.png",
    title: "Rings “Cross”",
    price: "1500 USD"
  },
  {
    id: 4,
    img: "./images/product5.png",
    title: "Rings “Knight”",
    price: "5630 USD"
  },
  {
    id: 5,
    img: "./images/product6.png",
    title: "Rings “Cat eye”",
    price: "1200 USD"
  }

]
if (id && productList[id]) {
  const prodHead = document.querySelector(".prodHead")
  prodHead.innerHTML =
    "<div class='prod-title'>" + "home / shop jewellery /" + " " + productList[id].title + "</div>"
  document.querySelectorAll(".productTitle")[0].textContent = productList[id].title;
  console.log(document.querySelectorAll(".productTitle"));
  console.log(productList[id].title);
  document.querySelectorAll(".productPrice")[0].textContent = productList[id].price;
  console.log(productList[id].price);
  const imgContainer = document.querySelector(".prodImage");
  imgContainer.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    const imgEl = document.createElement("img");
    imgEl.src = productList[id].img;
    console.log(productList[id].img);
    imgContainer.appendChild(imgEl);
  }
  const mainImageDiv = document.querySelector(".img");
  mainImageDiv.innerHTML = "";
  const mainImg = document.createElement("img");
  mainImg.src = productList[id].img;
  mainImageDiv.appendChild(mainImg);
}
else {
  document.querySelectorAll(".productTitle").innerText = "No product found";
  document.querySelectorAll(".productPrice").innerText = "";
}

let minQty = 0;
let maxQty = 30;

let quantity = document.querySelector(".singlePNum");
console.log(quantity);
function getSavedQty(id) {
  let saved = localStorage.getItem("productQty_" + id);
  return saved !== null ? parseInt(saved) : 0;
}

let savedQty = getSavedQty(id);
console.log(savedQty);

quantity.innerHTML = savedQty;

function updateQuantity(newQty) {
  quantity.innerHTML = newQty;
  localStorage.setItem("productQty_" + id, newQty);
}

function increase() {
  let quantity = document.querySelector(".singlePNum")
  let qty = parseInt(quantity.innerHTML);
  if (qty < maxQty) {
    updateQuantity(qty + 1);
  }
}

function decrease() {
  let quantity = document.querySelector(".singlePNum")
  let qty = parseInt(quantity.innerHTML);
  if (qty > minQty) {
    updateQuantity(qty - 1);
  }
}


const prodTit = document.querySelector(".prodTit")
console.log(prodTit);
prodTit.innerHTML = productList[id].title
prodTit.style.color = '#000'


function prodPage() {

  const prodP = document.querySelector(".prodP")
  prodP.style.color = "#000"
  prodP.style.textAlign = "center"

  const shippP = document.querySelector(".shippP")
  shippP.style.color = "#A5A5A5"

  const inf = document.querySelector(".inf")
  inf.style.display = 'inline-flex'

  const shippingP = document.querySelector(".shippingP")
  shippingP.style.display = 'none'
}
function shippingPage() {


  const shippP = document.querySelector(".shippP")
  shippP.style.color = "#000"
const shipp = document.querySelector(".shipp")
  const prode = document.querySelector(".prode")
  prode.style.marginLeft ='120px'
  prode.style.padding = '0px'
  shipp.style.marginLeft = '-130px'
  const prodP = document.querySelector(".prodP")
  prodP.style.color = "#A5A5A5"
  prodP.style.position = 'relative'
  
  const inf = document.querySelector(".inf")
  inf.style.display = 'none'
  const extraDesHead = document.querySelector(".extraDesHead ")
  extraDesHead.style.gap = '50px' 

  const shippingP = document.querySelector(".shippingP")
  shippingP.style.display = 'inline'
  shippingP.innerHTML = ''
  shippingP.innerHTML = "All international orders will be proceeded within 1-3 business days. The second stop for your parcel will be the delivery service. You will receive the tracking information regarding your order via email (check also your spam) as soon as the delivery services provide them. Please, take into consideration that during the tough periods we may provide tracking information within a week."
  
  shipp.style.width = '450px'
  shipp.style.height = '100px'
  shipp.style.margin = '0px'
  shipp.style.padding = '0px'
  shippingP.style.marginTop = '20px'


}

const compoTit = document.querySelector(".compoTit")
const compoP = document.querySelector(".compoP")
const infoTit = document.querySelector(".infoTit")
const infoP = document.querySelector(".infoP")
const sizeTit = document.querySelector(".sizeTit")
const sizeP = document.querySelector(".sizeP")
const careTit = document.querySelector(".careTit")
const careP = document.querySelector(".careP")

const prodArrow = document.querySelector(".prodArrow")
const compoArrow = document.querySelector(".compoArrow")
const infoArrow = document.querySelector(".infoArrow")
const sizeArrow = document.querySelector(".sizeArrow")
const careArrow = document.querySelector(".careArrow")


function prodTitClick() {
  const prodTit = document.querySelector(".prodTit")
  const prodPar = document.querySelector(".prodPar")
  prodTit.style.color = '#000'
  prodPar.style.color = '#000'
  prodArrow.style.color = '#000'
  compoTit.style.color = '#A5A5A5'
  compoP.style.color = '#A5A5A5'
  compoArrow.style.color = '#A5A5A5'
  infoTit.style.color = '#A5A5A5'
  infoP.style.color = '#A5A5A5'
  infoArrow.style.color = '#A5A5A5'
  sizeTit.style.color = '#A5A5A5'
  sizeP.style.color = '#A5A5A5'
  sizeArrow.style.color = '#A5A5A5'
  careTit.style.color = '#A5A5A5'
  careP.style.color = '#A5A5A5'
  careArrow.style.color = '#A5A5A5'
}


function composClick() {
  const prodTit = document.querySelector(".prodTit")
  const prodPar = document.querySelector(".prodPar")
  prodArrow.style.color = '#A5A5A5'
  compoTit.style.color = '#000'
  compoP.style.color = '#000'
  compoArrow.style.color = "#000"
  console.log(compoArrow);


  prodTit.style.color = '#A5A5A5'
  prodPar.style.color = '#A5A5A5'

  infoTit.style.color = '#A5A5A5'
  infoP.style.color = '#A5A5A5'
  infoArrow.style.color = '#A5A5A5'
  sizeTit.style.color = '#A5A5A5'
  sizeP.style.color = '#A5A5A5'
  sizeArrow.style.color = '#A5A5A5'

  careTit.style.color = '#A5A5A5'
  careP.style.color = '#A5A5A5'
  careArrow.style.color = '#A5A5A5'
}

function informClick() {
  const prodTit = document.querySelector(".prodTit")
  const prodPar = document.querySelector(".prodPar")
  prodTit.style.color = '#A5A5A5'
  prodPar.style.color = '#A5A5A5'

  sizeTit.style.color = '#A5A5A5'
  sizeP.style.color = '#A5A5A5'
  sizeArrow.style.color = '#A5A5A5'
  careTit.style.color = '#A5A5A5'
  careP.style.color = '#A5A5A5'
  careArrow.style.color = '#A5A5A5'

  compoTit.style.color = '#A5A5A5'
  compoP.style.color = '#A5A5A5'
  compoArrow.style.color = '#A5A5A5'
  infoTit.style.color = '#000'
  infoP.style.color = '#000'
  infoArrow.style.color = '#000'
}

function sizeClick() {
  const prodTit = document.querySelector(".prodTit")
  const prodPar = document.querySelector(".prodPar")
  prodTit.style.color = '#A5A5A5'
  prodPar.style.color = '#A5A5A5'
  prodArrow.style.color = '#A5A5A5'
  sizeTit.style.color = '#000'
  sizeP.style.color = '#000'
  sizeArrow.style.color = '#000'
  careTit.style.color = '#A5A5A5'
  careP.style.color = '#A5A5A5'
  careArrow.style.color = '#A5A5A5'
  compoTit.style.color = '#A5A5A5'
  compoP.style.color = '#A5A5A5'
  compoArrow.style.color = '#A5A5A5'
  infoTit.style.color = '#A5A5A5'
  infoP.style.color = '#A5A5A5'
  infoArrow.style.color = '#A5A5A5'
}


function careClick() {
  const prodTit = document.querySelector(".prodTit")
  const prodPar = document.querySelector(".prodPar")
  prodTit.style.color = '#A5A5A5'
  prodPar.style.color = '#A5A5A5'
  prodPar.style.color = '#A5A5A5'
  sizeTit.style.color = '#A5A5A5'
  sizeP.style.color = '#A5A5A5'
  sizeArrow.style.color = '#A5A5A5'
  careTit.style.color = '#000'
  careP.style.color = '#000'
  careArrow.style.color = '#000'
  compoTit.style.color = '#A5A5A5'
  compoP.style.color = '#A5A5A5'
  compoArrow.style.color = '#A5A5A5'
  infoTit.style.color = '#A5A5A5'
  infoP.style.color = '#A5A5A5'
  infoArrow.style.color = '#A5A5A5'
}


document.querySelector(".addCard").addEventListener("click", function () {

  const quantity = parseInt(document.querySelector(".singlePNum").textContent);

  if (quantity === 0) {
    alert("Quantity must be greater than 0 to add to the basket.");
    return;
  }
  const product = {
    name: productList[id].title,
    price: productList[id].price, 
    quantity: document.querySelector(".singlePNum").textContent,
    image: productList[id].img
  };
  
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  const bag = document.querySelector(".bag")
  bag.textContent = cart.length
})

const like = document.querySelector(".like")

    like.addEventListener('click', () => {
      console.log(like);
      
        const liked = like.dataset.liked === 'true';
        like.dataset.liked = !liked;
        console.log(liked);
        
        like.src = liked 
            ? './images/Vector 12.png'    
            : './images/heart.png';
    });


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