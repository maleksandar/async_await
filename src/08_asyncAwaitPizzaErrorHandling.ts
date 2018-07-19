import { deliver, BakedPizza } from './lib/commonLib';
import { make, bake } from './lib/promiseLib';

const order = ['Americana', 'Margarita', 'Panini'];
const address = 'Milutina Milankovica 1z';

console.time('time spent');

let pizzaPromises: Promise<BakedPizza>[] = [];
for (const pizza of order) {
    let pizzaPromise = makeAndBake(pizza)
    pizzaPromises.push(pizzaPromise);
}

async function makeAndBake(pizza) {
    try {
        const madePizza = await make(pizza);
        console.log(`pizza made: ${madePizza.name}`);
        const bakedPizza = await bake(madePizza);
        console.log(`pizza baked: ${bakedPizza.name}`);
        return bakedPizza;
    } catch(error) {
        console.log('A wild error occured: ' + error.message);
        throw error;
    }
}

(async () => {
    try {
        let pizzasForDelivery = await Promise.all(pizzaPromises);
        deliver(pizzasForDelivery, address);
        console.timeEnd('time spent');
    } catch(error) {
        console.log('A wild error occured: ' + error.message);
    }
})();
