import { inventory } from "./datacabecalho.js";

const reviewsToAllProducts = () => {
    const allProductsWithReview = inventory.filter(product => product.reviews.length > 0);
    allProductsWithReview.forEach(product => {
        console.log(`Produto: ${product.name},\nAvaliação(ões): ${product.reviews}\n\n`);
    });
};

reviewsToAllProducts();