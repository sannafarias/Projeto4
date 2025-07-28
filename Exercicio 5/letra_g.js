import { inventory } from './datacabecalho.js';

const firstOfCategory = () => {
    const first = inventory.find(product => product.category === 'Vestuário');
    console.log(`Primeiro produto de Vestuário: ${first.name}`);
};

firstOfCategory();