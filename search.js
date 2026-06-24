

let searchIcon = document.querySelector(".searchIcon")
let productResults = document.querySelector(".productResult")
let searchContainer = document.querySelector(".search")
let searchInput

searchIcon.addEventListener("click", () => {
    if (!searchInput) {

        searchInput = document.createElement('input');
        console.log(searchInput);

        searchInput.type = 'text';
        searchInput.id = 'search-input';
        searchInput.placeholder = 'Search products...';
        searchInput.style.position = "fixed"
        searchContainer.appendChild(searchInput);

        searchInput.addEventListener('input', (e) => {

            
            const query = e.target.value.toLowerCase();
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
            const filteredProducts = productList.filter(product =>
                product.title.toLowerCase().includes(query)
            );
            renderProducts(filteredProducts);
        });
    } else {
        searchInput.focus();
    }


searchInput.addEventListener('input', (e) => {

  const query = e.target.value.toLowerCase().trim();
  if (query === "") {
    productResults.innerHTML = ''; 
    return;
  }
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
  const filteredProducts = productList.filter(product =>
    product.title.toLowerCase().includes(query)
  );

  if (filteredProducts.length === 0) {
    productResults.innerHTML = '<p>No products found</p>';
  } else {
    renderProducts(filteredProducts);
  }
});

});




function renderProducts(products) {
  productResults.innerHTML = ''; // always clear previous results
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src="${product.img}" alt="${product.title}">
      <h4>${product.title}</h4>
      <p>${product.price}</p>
    `;
    productResults.appendChild(card);
  });
}





document.addEventListener('click', (e) => {
  if (searchInput) {
let searchContainer = document.querySelector(".search")

    if (!searchContainer.contains(e.target) && !searchIcon.contains(e.target)) {
      searchInput.remove();  
      searchInput = null;   
      productResults.innerHTML = '';
    }
  }
});