import { BakedPizza, pizzaMenu, MadePizza } from "./commonLib";

export function bake(madePizza) {
    const recepie = pizzaMenu.filter(x => x.name === madePizza.name)[0];
    sleep(recepie.bakingTime);
    return new BakedPizza(madePizza);
}

export function make(pizzaName) {
    const recepie = pizzaMenu.filter(x => x.name === pizzaName)[0];
    sleep(recepie.makingTime);
    return new MadePizza(pizzaName);
}

export function makeWithError(pizzaName) {
    const recepie = pizzaMenu.filter(x => x.name === pizzaName)[0];
    sleep(recepie.makingTime);
    throw new Error('Some wild error occured!');
    // return new MadePizza(pizzaName);
}

function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}