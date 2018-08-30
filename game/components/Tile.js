exports.set = function(app, count = 1){
        count = count + 1;
        for(i = 1; i < count; i++){
            const tile = PIXI.Sprite.fromImage("../assets/tile.png");
    
            var carpim = 64 * i;
    
            tile.anchor.set(0.5);
            tile.x = app.screen.width / 2 - carpim;
            tile.y = app.screen.height / 2;
            
            app.stage.addChild(tile);    
        }
}