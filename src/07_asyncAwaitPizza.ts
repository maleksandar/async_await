import { deliver, BakedPizza } from './lib/commonLib';
import { make, bake } from './lib/promiseLib';

const order = ['Napolitana', 'Margarita', 'Panini'];
const address = 'Milutina Milankovica 1z';

console.time('time spent');

let pizzaPromises: Promise<BakedPizza>[] = [];
for (const pizza of order) {
    let pizzaPromise = makeAndBake(pizza)
    pizzaPromises.push(pizzaPromise);
}

async function makeAndBake(pizza) {
    const madePizza = await make(pizza)
    console.log(`pizza made: ${madePizza.name}`);
    const bakedPizza = await bake(madePizza);
    console.log(`pizza baked: ${bakedPizza.name}`);
    return bakedPizza;
}

(async () => {
    let pizzasForDelivery = await Promise.all(pizzaPromises);
    deliver(pizzasForDelivery, address);
    console.timeEnd('time spent');
})();
