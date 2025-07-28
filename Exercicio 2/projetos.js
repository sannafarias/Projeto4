// Exercício 2: forEach e map

const products = [
  { id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
  { id: 2, name: "Camiseta", price: 25, category: "Vestuário" },
  { id: 3, name: "Cafeteira", price: 100, category: "Cozinha" },
  { id: 4, name: "Fones de Ouvido", price: 80, category: "Eletrônicos" },
  { id: 5, name: "Calça Jeans", price: 45, category: "Vestuário" }
];

// 1. Usando forEach para imprimir todos os produtos
console.log("Lista de Produtos:");
products.forEach((product, index) => {
  console.log(`${index + 1}. ${product.name} - R$${product.price}`);
});

// 2. Usando map para criar um novo array apenas com nomes dos produtos
const productNames = products.map((product) => product.name);
console.log("\nNomes dos Produtos:", productNames);

// 3. Usando map para criar um array de produtos com desconto de 10%
const discountedProducts = products.map((product) => {
  return {
    ...product,
    price: product.price * 0.9, // 10% de desconto
  };
});

console.log("\nProdutos com 10% de desconto:");
discountedProducts.forEach((product) => {
  console.log(
    `${product.name} - Original: R$${(product.price / 0.9).toFixed(2)} | Com desconto: R$${product.price.toFixed(2)}`
  );
});

// >>> RESOLVENDO O ITEM (a): Criar array com strings formatadas como "Nome - Categoria"
const formattedProducts = products.map(product => `${product.name} - ${product.category}`);
console.log("\nProdutos formatados (Nome + Categoria):");
console.log(formattedProducts);
// >>> RESOLVENDO O ITEM (b): Filtrar produtos com preço acima de R$50
const taxedProducts = products.map(product => {
  return {
    ...product,
    priceWithTax: (product.price * 1.15).toFixed(2)
  };
});

console.log("\nProdutos com 15% de imposto:");
taxedProducts.forEach(product => {
  console.log(`${product.name} - Preço original: R$${product.price.toFixed(2)} | Com imposto: R$${product.priceWithTax}`);
});
// >>> RESOLVENDO O ITEM (c): Filtrar produtos da categoria "Eletrônicos"
let total = 0;

products.forEach(product => {
  total += product.price;
});

console.log(`\nValor total dos produtos: R$${total.toFixed(2)}`);
