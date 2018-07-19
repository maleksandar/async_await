import { deliver } from './lib/commonLib';
import { make, bake } from './lib/syncLib';

const order = ['Napolitana', 'Margarita', 'Panini'];
const address = 'Milutina Milankovica 1z';

console.time('time spent');

let bakedPizzas = [];
for (const pizza of order) {
    const madePizza = make(pizza);
    console.log('pizza made: '+ madePizza.name);
    const bakedPizza = bake(madePizza);
    console.log('pizza baked: '+ bakedPizza.name);
    bakedPizzas.push(bakedPizza);
}

deliver(bakedPizzas, address);
console.timeEnd('time spent');
