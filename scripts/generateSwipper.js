export function swiperProductJs(){
const products = [{
    image:'https://img.magnific.com/premium-photo/building-construction-engineering-with-double-exposure-graphic-design-construction-workers-with-civil-equipment-technology-2d-illustration-white-background-ai-generated_497837-27688.jpg?semt=ais_hybrid&w=740&q=80',
    description: 'Building strong, safe, and reliable infrastructure with precision, quality, and innovation.'
},
{
    image:'https://thumbs.dreamstime.com/b/planting-trees-silver-coin-hands-two-completely-separated-white-background-153528987.jpg',
    description: 'Providing sustainable environmental services that protect communities, conserve resources, and support a greener future.'
},
{
    image:'https://img.freepik.com/premium-photo/car-service-white-background-isolated-3d-illustration_356060-3354.jpg"',
    description: 'Delivering expert vehicle solutions, maintenance, and repairs to keep you moving safely and efficiently.'
},

]
let accumulatorPattern = '';

products.forEach((product) =>{
    accumulatorPattern +=
    `
     <div class="swiper-slide">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-7 px-4 md:px-12 div-top-html-contain">

    <!-- TEXT CONTENT -->
    <div class="flex flex-col items-center lg:items-start justify-center text-center lg:text-left">

      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] mb-4 description">
        Engineering <br>& Industrial Solutions
      </h1>

      <p class="max-w-xl mb-6 text-gray-700 topic">
        ${product.description}
      </p>

      <!-- FEATURES -->
      <div class="flex flex-wrap justify-center lg:justify-start gap-4 div-flex-contain-html">
        <p class="flex items-center gap-2 des">
          <i class="fas fa-check text-green-600"></i> top products
        </p>

        <p class="flex items-center gap-2 par">
          <i class="fas fa-check text-green-600"></i> quality services
        </p>

        <p class="flex items-center gap-2 box">
          <i class="fas fa-check text-green-600"></i> free delivery
        </p>
      </div>

      <!-- BUTTON -->


    </div>

    <!-- IMAGE -->
    <div class="flex justify-center lg:justify-end div-img-html-contain">
      <img
        src="${product.image}"
        alt=""
        class="w-[220px] sm:w-[280px] md:w-[350px] lg:w-[420px] rounded-full img-product-image"
      />
    </div>

  </div>
</div>

    `
})

const heroContainer = document.querySelector('.swiper-wrapper');

if(heroContainer){
    heroContainer.innerHTML = accumulatorPattern;
}


}


