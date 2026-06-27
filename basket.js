const cart = JSON.parse(localStorage.getItem("cart")) || [];
const container = document.querySelector(".cart-items");

const cartMinQty = 0;
const cartMaxQty = 30;
const generalNum = document.querySelector(".generalNum")
const subtotalEl = document.querySelector(".totalPrice");
const grandTotalEl = document.querySelector(".grandTotPrice");
const shippingAmount = 450;
function renderCart() {
    container.innerHTML = "";
    if (cart.length === 0) {
        container.innerHTML = "<p>Your basket is empty.</p>";
        return;
    }

    cart.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("item");

        div.innerHTML = `
        <div class="itm">
            <img src="${item.image}" style="width:180px; height:160px">
            <div class="prodinform">
                <span class="itemName">${item.name}</span>
                <div><p class="silver">Silver 925</p></div>
                <a href="#" class="removeBtn">Remove</a>
            </div>
            <img src="./images/basketLine.png" alt="line" class="basketLine">
            <div class="productNumber">
                <p class="decreaseBtn">-</p>
                <p class="itemNum">${item.quantity}</p>
                <p class="increaseBtn">+</p>
            </div>
            <div class="price">
                <h3 class="priceText">${item.price}</h3>
            </div>  
            <div class="general">
                <h3 class="generalNum">${parseFloat(item.price) * parseFloat(item.quantity)} USD</h3>
            </div>
        </div>
        

        <div class="elipseRectangle">
            <div class="roundElipse">
               <img src="./images/Vector 11.png">
            </div>
            <div class="buyRectangle">
                <p class="basketText">TO BUY</p>
            </div>
        </div>    

            <div><img src="./images/basketLine2.png" class="basketLine2"></div>
        `;

        container.appendChild(div);

        const itemNumEl = div.querySelector(".itemNum");
        const increaseBtn = div.querySelector(".increaseBtn");
        const decreaseBtn = div.querySelector(".decreaseBtn");
        const removeBtn = div.querySelector(".removeBtn");

        function updateGeneral() {
            const generalNum = document.querySelector(".generalNum")
            
            generalNum.innerText = (item.price * item.quantity) + " USD";
        }

        increaseBtn.addEventListener("click", () => {
            if (item.quantity < cartMaxQty) {
                item.quantity++;
                itemNumEl.textContent = item.quantity;
                updateGeneral()
                saveCart();
                updateTotals()
                renderCart()

            }
        });

        decreaseBtn.addEventListener("click", () => {
            if (item.quantity > cartMinQty) {
                item.quantity--;
                itemNumEl.textContent = item.quantity;
                updateGeneral()
                saveCart();
                updateTotals()
                renderCart()
            }
        });
 if (item.quantity === 0) {
        removeCartItem(item.id);
    }
        removeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            removeCartItem(item.id);
        });
    });
    updateTotals()

}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function removeCartItem(id) {
    const index = cart.findIndex(i => i.id === id);
    if (index > -1) {
        cart.splice(index, 1);
        saveCart();
        renderCart();
        updateTotals()
    }
}

function updateTotals() {
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += parseFloat(item.price) * parseFloat(item.quantity);
        
        
        
    });
    subtotalEl.textContent = subtotal + " USD";

    const grandTotal = subtotal + shippingAmount;
    console.log(subtotal);
    
    grandTotalEl.textContent = grandTotal + " USD";
}

renderCart();

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