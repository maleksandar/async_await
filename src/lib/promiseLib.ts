import { pizzaMenu, MadePizza, BakedPizza } from './commonLib';

export function make(pizzaName): Promise<MadePizza> {
    return new Promise(function(resolve, reject){
        const recepie = pizzaMenu.filter(x => x.name === pizzaName)[0];
        setTimeout(() => { resolve(new MadePizza(recepie.name)); }, recepie.makingTime);
    });
}

export function bake(pizaMade): Promise<BakedPizza> {
    return new Promise(function(resolve, reject){
        const recepie = pizzaMenu.filter(x => x.name === pizaMade.name)[0];
        setTimeout(() => { resolve(new BakedPizza(pizaMade)); }, recepie.bakingTime);
    });
}