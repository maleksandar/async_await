import { deliver } from './lib/commonLib';
import { make, bake, makeWithErrorHandling, bakeWithErrorHandling } from './lib/callbackLib';
import { makeWithError } from './lib/syncLib';

const order = ['Americana', 'Margarita', 'Panini'];
const address = 'Milutina Milankovica 1z';

console.time('time spent');

let bakedPizzas = [];
let errorOccured= false;
for (const pizza of order) {
    if(errorOccured) {
        break;
    }
    makeWithErrorHandling(pizza, (error, madePizza) => {
        if(error) {
            errorOccured = true;
            console.log(`A wild error occured: ${error.message}`);
            return;
        }
        console.log('pizza made: '+ madePizza.name);
        const bakedPizza = bakeWithErrorHandling(madePizza, (error, bakedPizza) => {
            if(error) {
                console.log(`A wild error occured: ${error.message}`);
                return;
            }
            console.log('pizza baked: '+ bakedPizza.name);
            bakedPizzas.push(bakedPizza);
            if(bakedPizzas.length === order.length) {
                deliver(bakedPizzas, address);
                console.timeEnd('time spent');
            }
        });
    });
}