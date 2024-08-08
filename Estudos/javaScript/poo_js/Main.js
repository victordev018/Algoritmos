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

    // output 
    console.log(`\n> sum price products: R$ ${sumPriceProducts}`);
    
}

main();