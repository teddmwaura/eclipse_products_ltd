function handleSearchProduct(){
    const products = JSON.parse(localStorage.getItem('products'))

    const inputElement = document.querySelector('.input-element-html')

    const getValue = inputElement.value.toLowerCase().trim()

    const matchingProduct = products.filter(p => p.productName.toLowerCase().includes(getValue))

    appendProductJs(matchingProduct)

    window.location.href = 'searchedProducts.html';

    inputElement.value = '';
}

function appendProductJs(productArray){
    const container = document.querySelector('.products-container-html')

    if(!container){
        return
    }

    if(productArray.length === 0){
        container.innerHTML = `
      <div class="h-[50vh] text-center w-[100%] p-8">
        <h1>No product/products found on the website</h1>
      </div>
    `;
    return;
    }

    let accumulatorPattern = '';

    productArray.forEach((product) =>{
        accumulatorPattern += `
        <div class="p-4 product-card-html">
        <div class="bg-[#efefef]">
          <img src="${product.productImage}" alt="${product.productName}" class="h-[200px] mb-4 mix-blend-multiply bg-blue-500 img-html-js">
        </div>
        <div>
          <p class="mb-2 text-lg">${product.productName}</p>
          <div>
            <input type="text" placeholder="enter size 36 - 42" class="border-b outline-none mb-6 px-2 input-size-html" required>
            <input type="text" placeholder="enter color" class="border-b outline-none mb-2 px-2 input-color-html" required><br>
            <button class="text-gray-500 mb-2 see-more-button-html" data-product-id="${product.productId}">see more....</button>
          </div>
          <p class="mb-2 text-yellow-500 text-lg">ksh ${product.productPrice}</p>
          <button class="p-2 bg-[#a52a2a] text-white add-to-cart-button" data-product-id="${product.productId}">
            add to cart
          </button>
        </div>
      </div>
        `
        container.innerHTML = accumulatorPattern;
    })
}