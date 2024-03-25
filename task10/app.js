function addProduct() {
    var productName = document.getElementById('productName').value;
    var productPrice = document.getElementById('productPrice').value;
    var productDescription = document.getElementById('productDescription').value;
    var productQuantity = document.getElementById('productQuantity').value;
    var productImage = document.getElementById('productImage').value;

    var productContainer = document.getElementById('productContainer');
    var productCard = document.createElement('div');
    productCard.classList.add('productCard');
    productCard.innerHTML = `
        <h3>${productName}</h3>
        <p>Цена: ${productPrice}</p>
        <p>Описание: ${productDescription}</p>
        <p>Количество: ${productQuantity}</p>
        <img src="${productImage}" alt="${productName}">
    `;
    productContainer.appendChild(productCard);
}