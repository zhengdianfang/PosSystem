const store = require('./store');

function loadProductById(id) {
    return store.find(item => item.id === id);
}

function assembleReceiptItems(products) {
    const receitpItems = [];
    products.forEach(product => {
       if (product) {
        const receiptItem = receitpItems.find(item => item.product.id === product.id);
        if (receiptItem) {
                receiptItem.count += 1; 
                receiptItem.totalPrice += product.price; 
        } else {
            receitpItems.push({ product, count: 1, totalPrice: product.price });
        }
       }
    });
    return receitpItems;
}


function print(receitpItems) {
    let result = "Receipts:\n----------------------------------------------\n"
    let sumPrice = 0;
    receitpItems.forEach(item => {
       result += `${item.product.name}    ${item.count}    ${item.totalPrice}\n` 
       sumPrice += item.totalPrice;
    });
    result += "----------------------------------------------\n"
    result += `Price: ${sumPrice}`;
    return result;
}

function printReceiptReport(ids) {
    if (ids === null || ids === undefined) {
        return "[Error]: ids paramters is null or undefined"
    }
    const products = ids.map(id => loadProductById(id) );
    const receiptItems = assembleReceiptItems(products);
    return print(receiptItems);
}

module.exports = {
    loadProductById,
    assembleReceiptItems,
    print,
}