import { inventory } from "./datacabecalho.js";

const findByName = (name) => {
    const foundProducts = inventory.filter(product => product.name.includes(name));
    foundProducts.forEach(item => {
        console.log(`Item(ns) encontrado(s): ${item.name}, preço: R$${item.price}, quantia em estoque: ${item.stock}`);
    });
};

findByName('Ca');