const store = require('./store');

function loadProductById(id) {
    return store.find(item => item.id === id);
}

function assembleReceiptItems(products) {
    const receitpItems = [];
    products.forEach(product => {
       const receiptItem = receitpItems.find(item => item.product.id === product.id);
       if (receiptItem) {
            receiptItem.count += 1; 
            receiptItem.totalPrice += product.price; 
       } else {
         receitpItems.push({ product, count: 1, totalPrice: product.price });
       }
    });
    return receitpItems;
}

module.exports = {
    loadProductById,
    assembleReceiptItems,
}