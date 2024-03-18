function calculateTotal() {
    const quantityBricks = parseInt(document.getElementById('quantity-bricks').value);
    const priceBricks = parseInt(document.getElementById('price-bricks').value);
    const quantityCement = parseInt(document.getElementById('quantity-cement').value);
    const priceCement = parseInt(document.getElementById('price-cement').value);
    const quantityBoards = parseInt(document.getElementById('quantity-boards').value);
    const priceBoards = parseInt(document.getElementById('price-boards').value);
  
    const totalCost = (quantityBricks * priceBricks) + (quantityCement * priceCement) + (quantityBoards * priceBoards);
  
    document.getElementById('total-cost').textContent = `Общая стоимость материалов: ${totalCost} рублей`;
  }