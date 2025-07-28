import { inventory } from "./datacabecalho.js";

function displayAllProducts() {
    console.log("Todos os produtos:");
    inventory.forEach(product => {
        console.log(`ID: ${product.id} | Nome: ${product.name} | Preço: R$${product.price.toFixed(2)} | Estoque: ${product.stock} | Categoria: ${product.category}`);
    });
}

displayAllProducts(); 


