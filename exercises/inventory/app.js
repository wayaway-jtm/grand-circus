class Store {
    constructor() {
        // Array of Objects
        this.inventory = [
            new Computer('ASUS', 350),
            new Computer('Dell', 250),
            new Laptop('Macbook Pro', 250000),
            new Laptop('Chromebook', 27.12),
            new Sticker('Spiderman', 12),
            new HDMI('Cheap Chinese Knockoff', 2),
            new HDMI('Official Stuff', 70),
            { name: 'ASUS', price: 70 }
        ];
    }

    addProduct = product => {
        return this.inventory.push(product);
    }

    removeProduct = (productNumber) => {
        this.inventory.splice(productNumber, 1);
    }

    getProductsByType(type) {
        return this.inventory.filter( item ->item instanceof type );
    }

    // Get an array of all of the computer objects
    getComputers = _ => this.getProductsByType(Computer);

    // Get an array of all of the laptop objects
    getLaptops = _ => this.getProductsByType(Laptop);
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.type = 'product';
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    getType() {
        return this.type;
    }
}

class Computer extends Product {

}

class Laptop extends Computer {

}

class Sticker extends Product {

}

class HDMI extends Product {

}

class Monitor extends Product {

}

class MountainDew extends Product {

}

let dell = new Laptop();
// console.log(dell instanceof Laptop);
// console.log(dell instanceof Computer);
// console.log(dell instanceof Product);

let store = new Store();

// add products
let productIndex = store.addProduct(new Monitor('AlienWare', 30));
console.log(store);

store.addProduct(dell);


// get all laptops

// remove a specific product

// get the price of a specific product