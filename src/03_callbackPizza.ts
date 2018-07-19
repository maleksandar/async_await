import { deliver } from './lib/commonLib';
import { make, bake } from './lib/callbackLib';

const order = ['Napolitana', 'Margarita', 'Panini'];
const address = 'Milutina Milankovica 1z';

console.time('time spent');

let bakedPizzas = [];
for (const pizza of order) {
    make(pizza, (madePizza) => {
        console.log('pizza made: '+ madePizza.name);
        const bakedPizza = bake(madePizza, (bakedPizza) => {
            console.log('pizza baked: '+ bakedPizza.name);
            bakedPizzas.push(bakedPizza);
            if(bakedPizzas.length === order.length) {
                deliver(bakedPizzas, address);
                console.timeEnd('time spent');
            }
        });
    });
}