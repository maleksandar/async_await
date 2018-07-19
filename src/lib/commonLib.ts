export const pizzaMenu: Array<{name: string, makingTime: number, bakingTime: number }> = [
    { name: "Capricosa", makingTime: 1000, bakingTime: 1000 },
    { name: "Napolitana", makingTime: 1000, bakingTime: 1000 },
    { name: "Panini", makingTime: 2000, bakingTime: 1000 },
    { name: 'Margarita', makingTime: 500, bakingTime: 1000 }
];

export class MadePizza {
    constructor(public name: string) { }
    
    toString() {
        return `\nFreshly made pizza: ${this.name}`;
    }
}

export class BakedPizza {
    public name: string;
    constructor(madePizza) {
        this.name = madePizza.name;
    }
    
    toString() {
        return `\nFreshly baked pizza: ${this.name}`;
    }
}

export function deliver(bakedPizzas, address) {
    console.log(`\n ===== Delivery: ====\n${bakedPizzas}\n----\nAdress: ${address}\n=====`);
}