import { inventory } from "./datacabecalho.js";
function filterInStockProducts() {
  const inStockProducts = inventory.filter((product) => product.stock > 0);
  console.log("Produtos em Estoque");
  if (inStockProducts.length > 0) {
    inStockProducts.forEach((product) => {
      console.log(
        `ID: ${product.id} | Nome: ${product.name} | Estoque: ${product.stock}`
      );
    });
  } else {
    console.log("Nenhum produto em estoque no momento.");
  }
  return inStockProducts;
}

filterInStockProducts();