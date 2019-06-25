const {
    loadProductById,
    assembleReceiptItems,
    print
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

it('should assemble receiptItem when give product array', () => {
    const mockProducts = [
        {"id": "0001", "name" : "Coca Cola", "price": 3},
        {"id": "0001", "name" : "Coca Cola", "price": 3},
        {"id": "0001", "name" : "Coca Cola", "price": 3},
        {"id": "0002", "name" : "Diet Coke", "price": 4},
        {"id": "0002", "name" : "Diet Coke", "price": 4},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    ];

    const receiptItems = assembleReceiptItems(mockProducts);

    expect(receiptItems).toEqual([
        { product: {"id": "0001", "name" : "Coca Cola", "price": 3}, count: 3, totalPrice: 9},
        { product: {"id": "0002", "name" : "Diet Coke", "price": 4}, count: 2, totalPrice: 8},
        { product: {"id": "0003", "name" : "Pepsi-Cola", "price": 5}, count: 1, totalPrice: 5},
    ]);
})

it('should print correct text when give receiptItems', () => {
    const mockRecpeiptItems = [
        { product: {"id": "0001", "name" : "Coca Cola", "price": 3}, count: 3, totalPrice: 9},
        { product: {"id": "0002", "name" : "Diet Coke", "price": 4}, count: 2, totalPrice: 8},
        { product: {"id": "0003", "name" : "Pepsi-Cola", "price": 5}, count: 1, totalPrice: 5},
    ];

    const result = print(mockRecpeiptItems);

    expect(result).toBe(`
        Receipts:
        ----------------------------------------------
        Coca Cola            3      9
        Diet Coke            2      8
        Pepsi-Cola           3      5
        ----------------------------------------------
        Price: 22 
    `);

});