import { inventory } from "./datacabecalho.js";

const outOfStock = () => {
    const outOfStockProducts = inventory.filter(product => product.stock === 0);
    console.log("Produto(s) fora de estoque: ");
    outOfStockProducts.forEach(product => {
        console.log(product.name);
    })
};

outOfStock();