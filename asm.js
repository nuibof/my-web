document.addEventListener("DOMContentLoaded", function() {
    const bannerSlider = document.querySelector('.hero-banner');
    const slides = bannerSlider.querySelectorAll('img');
    let currentSlide = 0;
    
    function nextSlide() {

        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add('prev');
        
        currentSlide = (currentSlide + 1) % slides.length;
        
        slides[currentSlide].classList.add('active');
        slides[currentSlide].classList.remove('prev');
    }
    
    setInterval(nextSlide, 1000);
});

  function loadProducts() {
    const container = document.getElementById('product-container');
    let html = '';
    products.forEach(product => {
      html += `
        <div class="product" id="${product.id}">
          <img src="images/${product.image}" alt="${product.name}">
          <h3 id="${product.id}">${product.name}</h3>
          <p>Giá: ${product.price}</p>
          <a href="sanpham.html?${product.id}" class="btn-buy">Mua hàng</a>
          <img class="giohang" id="${product.id}" onclick="addToCart('${product.id}')" src="images/cart.png" alt="Thêm vào giỏ hàng">
        </div>
      `;
    });
  container.innerHTML = html;
  }
  document.addEventListener('DOMContentLoaded', () => {loadProducts();});


function addToCart(productId) {

  console.log('productId:', productId); 
  var productName = document.getElementById(productId).querySelector('h3');
    var product = {
      id: productId,
      name: productName.textContent,
      price: parseFloat(document.getElementById(productId).querySelector('p').textContent.replace('Giá: ', ''))
    };

    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Sản phẩm đã được thêm vào giỏ hàng!');
}








  