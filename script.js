const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 600 },
    { id: 3, name: "Tablet", price: 800 }
];

const getProductById = id => products.find(p => p.id === id);
console.log("Tim id=2:", { ...getProductById(2) });

const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
console.log("Tong gia:", totalPrice);

const newProduct = { id: 4, name: "Monitor", price: 900 };
products.push(newProduct);
console.log("Sau khi them:", [...products]);

const expensiveProducts = products.filter(p => p.price > 700);
console.log("San pham gia > 700:", [...expensiveProducts]);
