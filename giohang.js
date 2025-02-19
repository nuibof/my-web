function displayCart() {

    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    var cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';
  
    cart.forEach(function(product) {
      var productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.id = product.id;
  
      var productImage = document.createElement('img');
      productImage.src = 'images/iphone15.jpg';
      productImage.alt = product.name;
  
      var productName = document.createElement('h3');
      productName.id = product.id;
      productName.textContent = product.name;
  
      var productPrice = document.createElement('p');
      productPrice.textContent = 'Giá: ' + product.price + '0.000 VND';
  
      var removeButton = document.createElement('button');
      removeButton.classList.add('remove-btn');
      removeButton.textContent = 'Xóa Sản Phẩm';
      removeButton.addEventListener('click', function() {
        removeFromCart(product.id);
      });
  
      productElement.appendChild(productImage);
      productElement.appendChild(productName);
      productElement.appendChild(productPrice);
      productElement.appendChild(removeButton);
      cartContainer.appendChild(productElement);
    });
  }
  
  function removeFromCart(productId) {

    var cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    var productIndex = cart.findIndex(function(product) {
      return product.id === productId;
    });
  
    if (productIndex !== -1) {
      cart.splice(productIndex, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      displayCart();
    }
  }
  
  document.addEventListener('DOMContentLoaded', displayCart);
  