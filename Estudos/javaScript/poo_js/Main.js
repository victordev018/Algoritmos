import { Product } from '../poo_js/Product.js';

function main(){

    // instances of the Product
    const p1 = new Product("Mouse", 120.0, "Electronics");
    const p2 = new Product("Computer", 3600.0, "Computers");
    const p3 = new Product("Hamburguer", 25.0, "Foods");

    // list of the Product
    let listProducts = [p1, p2, p3];

    // sum price products with reduce
    const sumPriceProducts = Number(listProducts.reduce((sum, current) => sum + current.price, 0));

    // biggest price with reduce 
    const biggestPrice = Number(listProducts.reduce((bigger, current) => current.price > bigger ? current.price : bigger, 0));

    // lowest price with reduce
    const lowestPrice = Number(listProducts.reduce((lowest, current) => current.price < lowest ? current.price : lowest, listProducts[1].price));

    // output 
    console.log(`\n> sum price products: R$ ${sumPriceProducts}`);
    console.log(`\n> Bigger price: R$ ${biggestPrice}`);
    console.log(`\n> Lowest price: R$ ${lowestPrice}`);
    
}

main();