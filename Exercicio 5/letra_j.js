import { inventory } from "./datacabecalho.js";
//j. Encontrar o produto com a maior média de avaliações

const productWithHighestAvgReview = inventory.reduce(
  (bestProduct, currentProduct) => {
    const currentAvg =
      currentProduct.reviews.reduce((sum, rating) => sum + rating, 0) /
      currentProduct.reviews.length;

    const bestAvg =
      bestProduct.reviews.reduce((sum, rating) => sum + rating, 0) /
      bestProduct.reviews.length;

    return currentAvg > bestAvg ? currentProduct : bestProduct;
  }
);

console.log("\nProduto com a maior média de avaliações:");
console.log(
  `${productWithHighestAvgReview.name} - Média: ${
    productWithHighestAvgReview.reviews.reduce((a, b) => a + b, 0) /
    productWithHighestAvgReview.reviews.length
  }`
);
