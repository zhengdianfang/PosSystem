const store = require('./store');

function loadProductById(id) {
    console.log(store);
    return store.find(item => item.id === id);
}

module.exports = {
    loadProductById,
}