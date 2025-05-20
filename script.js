document.addEventListener("DOMContentLoaded", function () {
  const productsGrid = document.createElement("div");
  productsGrid.className = "products-grid";
  document.querySelector(".main-container").appendChild(productsGrid);

  productsData.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    let tagHTML = "";
    if (product.tag) {
      tagHTML = `<div class="product-tag tag-${product.tag}">${product.tag.toUpperCase()}</div>`;
    }

    const stars = Math.round(product.rating);
    const starsHTML = '<div class="stars">' +
      Array.from({ length: 5 }, (_, i) =>
        `<i class="${i < stars ? 'fas' : 'far'} fa-star"></i>`
      ).join("") +
      ` <span class="rating-count">(${product.ratingCount})</span></div>`;

    productCard.innerHTML = `
      ${tagHTML}
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-brand">By ${product.brand}</div>
        <div class="product-rating">${starsHTML}</div>
        <div class="product-price">
          <span class="current-price">$${product.price.toFixed(2)}</span>
          ${product.oldPrice ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` : ""}
        </div>
        <div class="product-actions">
          <button class="btn-primary">Add to Cart</button>
        </div>
      </div>
    `;

    productsGrid.appendChild(productCard);
  });
});