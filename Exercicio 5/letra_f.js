import { inventory } from "./datacabecalho.js";

const specifiedProductId = () => {
    const cafeteiraId = inventory.findIndex(product => product.name === 'Cafeteira');
    console.log(`O índice da Cafeteira é: ${cafeteiraId}.`);
};

specifiedProductId();