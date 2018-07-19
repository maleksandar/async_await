import { deliver } from './lib/commonLib';
import { make, bake } from './lib/syncLib';

const order = ['Americana', 'Margarita', 'Panini'];
const address = 'Milutina Milankovica 1z';

console.time('time spent');

let bakedPizzas = [];
try {
    for (const pizza of order) {
        const madePizza = make(pizza);
        console.log('pizza made: '+ madePizza.name);
        const bakedPizza = bake(madePizza);
        console.log('pizza baked: '+ bakedPizza.name);
        bakedPizzas.push(bakedPizza);
    
        deliver(bakedPizzas, address);
        console.timeEnd('time spent');
    }
} catch(err) {
    console.log(`A wild Error occured: ${err.message}`);
}

