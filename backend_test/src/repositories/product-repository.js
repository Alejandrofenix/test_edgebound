const data = {
    "product": [
        { "name": "Samsung Galaxy S21", "category": "electronics" },
        { "name": "Sony PlayStation 5", "category": "electronics" },
        { "name": "Apple MacBook Pro", "category": "electronics" },
        { "name": "Bose QuietComfort 35 II", "category": "electronics" },
        { "name": "Canon EOS Rebel T7i", "category": "electronics" },
        { "name": "Banana", "category": "fruits" },
        { "name": "Apple", "category": "fruits" },
        { "name": "Strawberry", "category": "fruits" },
        { "name": "Grapes", "category": "fruits" },
        { "name": "Watermelon", "category": "fruits" },
        { "name": "HP Laptop", "category": "electronics" },
        { "name": "Dell Ultrasharp Monitor", "category": "electronics" },
        { "name": "Samsung 4K TV", "category": "electronics" },
        { "name": "LG Soundbar", "category": "electronics" },
        { "name": "Google Pixel 5", "category": "electronics" },
        { "name": "Milk", "category": "dairy" },
        { "name": "Cheese", "category": "dairy" },
        { "name": "Yogurt", "category": "dairy" },
        { "name": "Butter", "category": "dairy" },
        { "name": "Ice Cream", "category": "dairy" }
    ]
};

class ProductsRepository {
    constructor() {
    }

    async searchProducts(query) {
        const productsFound = data.product.filter(product => product.name === query);
        if (productsFound.length === 0) {
            return {
                'products_founded': [],
                'products_suggested': []
            };
        }

        const suggestedProducts = data.product.filter(product => product.category === productsFound[0].category && product.name !== productsFound[0].name);
        return {
            'products_founded': productsFound,
            'products_suggested': suggestedProducts.slice(0, 2)
        };
    }

    async getProducts() {
        const products = data;
        return products;
    }
}

module.exports = ProductsRepository;
