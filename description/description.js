   import { showMessage } from "../scripts/showMessage.js";
  

   export function describeProductPage() {
  const product = JSON.parse(localStorage.getItem('selectedProduct'));

  if (!product) {
    console.log('No product found');
    return;
  }

  const { productName, productColor } = product;
  const displayDescriptionProduct = document.querySelector('.grid-contain-html');

  // Track selected options
  let selectedColor = productColor[0].name;
  let selectedImage = productColor[0].productImage;
  let selectedPrice = productColor[0].productPrice;
  let selectedSize = null;

  /* CREATE COLOR THUMBNAILS */
  let thumbnailsHTML = '';

  productColor.forEach((color) => {
    thumbnailsHTML += `
      <div class="mr-4 cursor-pointer border-2 border-transparent ">
        <img 
          src="${color.productImage}"
          data-image="${color.productImage}"
          data-color="${color.name}"
          data-price="${color.productPrice}"
          class="thumbnail h-[70px] mix-blend-multiply rounded-2xl"
        >
        <div class="text-center"><p>${color.name}</p></div>
      </div>
    `;
  });

  displayDescriptionProduct.innerHTML = `
    <div>
      <!-- MAIN IMAGE -->
      <div class="flex justify-center">
        <img 
          src="${productColor[0].productImage}"
          class="product-main-image h-[250px] sm:h-[300px] md:h-[400px] mix-blend-multiply rounded-2xl"
        >
      </div>

      <!-- THUMBNAILS -->
      <div class="flex justify-center flex-wrap gap-3 mt-4">
        ${thumbnailsHTML}
      </div>
    </div>

    <!-- TEXT CONTENT -->
    <div class="text-center px-4 sm:px-6 md:px-10 max-w-3xl mx-auto">
      <!-- Brand -->
      <h2 class="mb-2 text-lg sm:text-xl texting text1">@Eclipse Products Ltd</h2>
      <!-- Product Name -->
      <h1 class="text-xl sm:text-2xl md:text-3xl mb-3 texting text2">${product.productName}</h1>

      <!-- Reviews -->
      <div class="flex justify-center items-center gap-1 flex-wrap">
        <i class="fa-solid fa-star text-yellow-500"></i>
        <i class="fa-solid fa-star text-yellow-500"></i>
        <i class="fa-solid fa-star text-yellow-500"></i>
        <i class="fa-solid fa-star text-yellow-500"></i>
        <i class="fa-solid fa-star text-gray-400"></i>
        <h2 class="text-gray-400 ml-2 text-sm sm:text-base typing">42 reviews</h2>
      </div>

      <!-- Price -->
      <p class="mt-4 text-red-500 text-2xl sm:text-3xl md:text-4xl product-price">
        Ksh ${productColor[0].productPrice}
      </p>

      <!-- Description -->
      <p> At Eclipse Products Ltd, we are committed to delivering reliable, professional, and high-quality solutions tailored to meet the needs of homes, businesses, schools, industries, and institutions. With expertise across engineering, construction, fabrication, automotive services, environmental management, renovations, and industrial products, we combine skilled workmanship, modern techniques, and customer-focused service to ensure every project is completed with excellence and precision.
From civil engineering and building works to vehicle maintenance, landscaping, welding, aluminum structures, oil spillage handling, and property consultation services, we provide dependable solutions designed to improve safety, efficiency, durability, and sustainability. Our goal is to build long-term relationships through integrity, innovation, professionalism, and outstanding service delivery
      </p>

      <!-- Sizes -->
      <p class="mt-6 mb-3 font-medium">contact us</p>
      <div class="flex justify-center flex-wrap gap-3">
<!-- CONTACT BUTTONS -->
<div class="flex flex-wrap gap-4 mt-6">

  <!-- WHATSAPP -->
  <a 
    href="https://wa.me/254721203945"
    target="_blank"
    class="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
  >
    <i class="fa-brands fa-whatsapp text-2xl"></i>
    WhatsApp Us
  </a>

  <!-- PHONE CALL -->
  <a 
    href="tel:0721203945"
    class="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
  >
    <i class="fa-solid fa-phone text-xl"></i>
    Call Us
  </a>

</div>
      </div>

     
    </div>
  `;

  /* IMAGE SWITCH */
  const mainImage = document.querySelector('.product-main-image');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const priceElement = document.querySelector('.product-price');

  thumbnails.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      mainImage.src = thumb.dataset.image;
      priceElement.textContent = `Ksh ${thumb.dataset.price}`;
      selectedColor = thumb.dataset.color;
      selectedImage = thumb.dataset.image;
      selectedPrice = thumb.dataset.price;
    });
  });

  /* SIZE SELECT */
  const sizes = document.querySelectorAll('.size-option');
  sizes.forEach((size) => {
    size.addEventListener('click', () => {
      sizes.forEach((s) => s.classList.remove('bg-black'));
      size.classList.add('bg-black');
      selectedSize = size.textContent;
    });
  });


 
}
  describeProductPage();
 