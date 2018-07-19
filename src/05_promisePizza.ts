import { deliver } from './lib/commonLib';
import { make, bake } from './lib/promiseLib';

const order = ['Napolitana', 'Margarita', 'Panini'];
const address = 'Milutina Milankovica 1z';

console.time('time spent');

let pizzaPromises = [];
for (const pizza of order) {
    const pizzaPromise = make(pizza)
        .then(madePizza => {
            console.log(`pizza made: ${madePizza.name}`);
            return bake(madePizza)
        })
        .then(bakedPizza => {
            console.log(`pizza baked: ${bakedPizza.name}`);
            return bakedPizza
        });
    pizzaPromises.push(pizzaPromise);
}

Promise.all(pizzaPromises).then((bakedPizzas)=> {
    deliver(bakedPizzas, address);
    console.timeEnd('time spent');
});
