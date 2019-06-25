const {
    loadProductById,
} = require('../main');

it('should get Coca Cola when give id is 0001', () => {
    const id = "0001";

    const product = loadProductById(id);

    expect(product).toEqual({"id": "0001", "name" : "Coca Cola", "price": 3});
});

it('should get null when give id is 1111', () => {
    const id = "1111";

    const product = loadProductById(id);

    expect(product).toEqual(undefined);
});