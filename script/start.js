var on = require('./dojo/on');
var button = document.getElementById('button');
on(button, 'click', function (event) {
    console.log(event.target);
});
var it_1 = require('./src/it');
console.log(it_1.it("him"));
console.log(it_1.bloog("her"));
//# sourceMappingURL=start.js.map