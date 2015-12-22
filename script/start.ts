import * as on from './dojo/on';

var button = document.getElementById('peace-tile');

on(button, 'click', function (event) {    
    console.log(event.target);
});

import {it, bloog} from './src/it'

console.log(it("him"));

console.log(bloog("her"));


