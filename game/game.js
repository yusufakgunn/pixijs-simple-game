const app = new PIXI.Application(750, 550, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

function setTile(count = 1){
    count = count + 1;
    for(i = 1; i < count; i++){
        const tile = PIXI.Sprite.fromImage("../assets/tile.png");

        tile.anchor.set(0.5);
        
        var carpim = 64 * i;

        tile.x = app.screen.width / 2 - carpim;
        tile.y = app.screen.height / 2;
        
        app.stage.addChild(tile);    
    }
}

function setPlayer(playerName = "No Name"){

}

setTile(5);
