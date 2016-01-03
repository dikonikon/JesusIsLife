
/// <reference path="typings/dojo/dojo.d.ts" />

require({}, [
    'dojo/dom',
    'dojo/on',
    'dojo/_base/fx',
    'dojo/domReady!'
], function (dom: any, on: any, fx: any) {
    var peaceStarted: boolean = false;
    
    function peaceIn(e: any) {
        console.log("peace mouseover");
        if (peaceStarted) return;
        peaceStarted = true;
        fx.animateProperty({
            node: "peace-tile",
            properties: {
                width: 400,
                height: 400,   
            },
            duration: 3000  
        }).play();
        peaceStarted = false;
    }
    
    function peaceOut(e: any) {
        console.log("peace mouseout");
        if (peaceStarted) return;
        peaceStarted = true;
        fx.animateProperty({
            node: "peace-tile",
            properties: {
                width: 100, 
                height: 100,   
            },
            duration: 3000  
        }).play();
        peaceStarted = false;
    }
    
    
    var peaceTile = dom.byId('peace-tile');
    on(peaceTile, "mouseover", peaceIn);
    on(peaceTile, "mouseout", peaceOut);
});


