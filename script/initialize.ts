
/// <reference path="typings/dojo/dojo.d.ts" />


require({}, [
    'dojo/dom',
    'dojo/on',
    'dojo/_base/fx',
    'dojo/domReady!'
], function (dom: any, on: any, fx: any) {
    
    console.log("start setup");
    
    class TextExplorer {
        text = new Map<string, Array<string>>();
        
        constructor() {
            
        }
        
        addText(theme: string, textPiece: string) {
            if (!this.text.has(theme)) {
                this.text.set(theme, new Array<string>());
            }
            const aTheme = this.text.get(theme);
            aTheme.push(textPiece);
        }
        
        getText(theme: string, index: number): string {
            if (this.text.has(theme)) {
                return this.text.get(theme)[index];
            } else {
                return null;
            }
        }
    }

    let text = new TextExplorer();

    text.addText("peace", "That is why I tell you not to worry about everyday life, whether you have enough food and drink, or enough clothes to wear. Isn't life more than food, and your body more than clothing? 26 Look at the birds. They don't plant or harvest or store food in barns, for your heavenly Father feeds them. And aren't you far more valuable to him than they are? Can all your worries add a single moment to your life?");
            
    let peaceStarted: boolean = false;
    
    console.log("define event handlers");
    
    /* called when mouse is placed over */
    
    function peaceIn(e: any) {
        console.log("peace mouseover");
        
        // expand the tile
        
        fx.animateProperty({
            node: "peace-tile",
            properties: {
                width: 400,
                height: 600,
                opacity: {start: 1, end: 0}   
            },
            duration: 3000,
            onEnd: function() {
                console.log("sizing text");
                var textNode: HTMLElement = dom.byId("txt_peace-tile");        
                textNode.innerHTML = text.getText("peace", 0);
                textNode.style.zIndex = "20";        
                fx.animateProperty({
                    node: "txt_peace-tile",
                    properties: {
                        opacity: 0.7,                       
                    },
                    duration: 3000
                }).play();     
            }  
        }).play();
    }
    
    function peaceOut(e: any) {
        console.log("peace mouseout");
        
        var fadeArgs = {
            node: "txt_peace-tile"
        };
        
        // fade the text first
        
        fx.fadeOut(fadeArgs).play();
        
        // then shrink the tile
                
        fx.animateProperty({
            node: "peace-tile",
            properties: {
                width: 100, 
                height: 100,   
            },
            duration: 3000,              
        }).play();
        
        // then set the text
        
        dom.byId("txt_peace-tile").innerHTML = "Peace";

    }
    
    console.log("attach event handlers");
    
    var peaceTile = dom.byId('peace-tile');
    on(peaceTile, "mouseover", peaceIn);
    //on(peaceTile, "mouseout", peaceOut);
});


