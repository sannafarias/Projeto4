import { inventory } from "./datacabecalho.js";

const calcAverageRating = () => {
    const averageRating = inventory.map(product => (product.reviews.reduce((total, num) => total + num, 0) / product.reviews.length).toFixed(2));
    inventory.forEach((item, index) => Object.assign(item, {"averageRating": averageRating[index]}));
    console.log(inventory);
};

calcAverageRating();