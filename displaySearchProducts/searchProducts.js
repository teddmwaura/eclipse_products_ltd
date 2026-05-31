import { updateUserName } from "../scripts/updateUserName.js";
import { descriptionProductsHTML } from "../scripts/decribeProductsHtml.js";
import { addToCart } from "../cart/cart.js";

/* =========================
   FETCH PRODUCTS
========================= */
fetch('./productsSneeklab.json')
  .then(res => res.json())
  .then(data => {
    window.jsonProducts = data;
    displaySearchedProduct(); // display products after fetch
  })
  .catch(err => console.error(err));

/* =========================
   DISPLAY SEARCHED PRODUCTS
========================= */
function displaySearchedProduct() {
  const query = (localStorage.getItem('searchedQuery') || '').toLowerCase().trim();

  const allProducts = window.jsonProducts || [];
  
  // If query is empty, show all products
  if (!query) return renderProducts(allProducts);

  // Split query into words
  const keywords = query.split(' ').filter(k => k.trim() !== '');

  const filteredProducts = allProducts.filter(product => {
    // Build searchable text
    let searchableText = product.productName.toLowerCase();
    if (product.productColor) searchableText += ' ' + product.productColor.toLowerCase();
    if (product.productCategory) searchableText += ' ' + product.productCategory.toLowerCase();

    // Check that every keyword exists in searchableText
    return keywords.every(word => searchableText.includes(word));
  });

  renderProducts(filteredProducts);
}

/* =========================
   RENDER PRODUCTS
========================= */
function renderProducts(products) {
  const container = document.querySelector('.products-container-html');
  container.innerHTML = '';

  if (products.length === 0) {
    container.innerHTML = '<p class="text-center text-2xl">No products found</p>';
    return;
  }

  let html = '';
  products.forEach(product => {
    html += `
      <div class="p-4 product-card w-full">
        <div class="bg-[#fff] flex justify-center items-center">
          <img src="${product.productImage}" alt="${product.productName}"
            class="h-[160px] sm:h-[180px] md:h-[200px] mb-4 mix-blend-multiply img-html-js">
        </div>
        <div class="mt-2">
          <p class="mb-2 html-product-name">${product.productName}</p>
          <div class="flex flex-col gap-3 mb-4">
            <input type="text" placeholder="Size (36 - 42)" class="border-b outline-none input-size-html" required>
            <input type="text" placeholder="Color" class="border-b outline-none input-color-html" required>
            <button class="text-gray-500 text-left see-more-button-html"
              data-product-id="${product.productId}">
              see more....
            </button>
          </div>
          <p class="mb-3 text-yellow-500 html-product-price">
            Ksh ${product.productPrice}
          </p>
          <button class="px-4 py-2 bg-[#a52a2a] text-white rounded add-to-cart-button"
            data-product-id="${product.productId}">
            add to cart
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

/* =========================
   ADD TO CART EVENT
========================= */
document.querySelector('.products-container-html').addEventListener('click', (e) => {
  const addBtn = e.target.closest('.add-to-cart-button');
  if (!addBtn) return;
  const productId = addBtn.dataset.productId;
  addToCart(productId);
});

/* =========================
   INIT OTHER FEATURES
========================= */
updateUserName();
descriptionProductsHTML();
