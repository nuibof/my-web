function loadProducts() {
    const container = document.getElementById('product-detail');
    let html = '';
    products.forEach(product => {
        if(product.id == window.location.search.substring(1,5)){
            html += `
                <div class="product-image">
                    <img src="/image/${product.image}" alt="Hình ảnh về ${product.name}">
                </div>
                <div class="product-info">
                <h2>${product.name}</h2>
                    <p class="price">Giá: ${product.price}</p>
                    <p class="description">Mô tả sản phẩm: ${product.des}</p>
                    <a href="muahang.html" class="btn-buy">Mua ngay</a>
                    <a href="index.html" class="btn-back">Quay lại</a>
                </div>
            `;
        }
    });
    container.innerHTML = html;
}
document.addEventListener('DOMContentLoaded', () => {loadProducts();});