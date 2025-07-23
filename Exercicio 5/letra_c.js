import { inventory } from "./datacabecalho.js";
function filterElectronicsUnder1000() {
  const electronicsUnder1000 = inventory.filter(
    (product) => product.category === "Eletrônicos" && product.price < 1000
  );
  console.log("Eletrônicos com Preço < R$1000");
  if (electronicsUnder1000.length > 0) {
    electronicsUnder1000.forEach((product) => {
      console.log(
        `ID: ${product.id} | Nome: ${
          product.name
        } | Preço: R$${product.price.toFixed(2)}`
      );
    });
  } else {
    console.log("Nenhum eletrônico encontrado com preço menor que R$1000.");
  }
  return electronicsUnder1000;
}

filterElectronicsUnder1000();
