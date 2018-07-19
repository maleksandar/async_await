import { pizzaMenu, BakedPizza, MadePizza } from "./commonLib";

export function bake(madePizza, callback) {
    const recepie = pizzaMenu.find(x => x.name === madePizza.name);
    setTimeout(() => { callback(new BakedPizza(madePizza)); }, recepie.bakingTime);
}

export function make(pizzaName, callback) {
    const recepie = pizzaMenu.find(x => x.name === pizzaName);
    setTimeout(() => { callback(new MadePizza(recepie.name)); }, recepie.makingTime);
}

export function makeWithErrorHandling(pizzaName, callback) {
    const recepie = pizzaMenu.find(x => x.name === pizzaName);
    if(recepie) {
        setTimeout(() => { 
            callback(null, new MadePizza(recepie.name));
        }, recepie.makingTime);
    } else {
        callback(new Error(`No such pizza as ${pizzaName}`), null);
    }
}

export function bakeWithErrorHandling(madePizza, callback) {
    const recepie = pizzaMenu.find(x => x.name === madePizza.name);
    if(recepie) {
        setTimeout(() => { 
            callback(null, new BakedPizza(madePizza));
        }, recepie.makingTime);
    } else {
        callback(new Error(`No such pizza as ${madePizza.name}`), null);
    }
}