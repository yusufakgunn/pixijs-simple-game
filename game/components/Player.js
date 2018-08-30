exports.create = function(app, ticker, playerName = "No Name", position = 0, speed = 3){
    const player = PIXI.Sprite.fromImage("../assets/player.png");
    const playerNameText = new PIXI.Text(playerName, {
        fontFamily: 'Arial',
        fontSize: 18,
        fill: 0x000000,
        align: 'center'
    });

    player.anchor.set(0.5);
    player.x = app.screen.width / 10 + position;
    player.y = app.screen.height / 2 - 80;

    
    playerNameText.anchor.set(0.5);
    playerNameText.x = player.x;
    playerNameText.y = app.screen.height / 2 - 112;

    var moveRight = false;
    var moveLeft = false;
    var moveUp = false;
    function loop(){
        if(moveRight == true){
            player.position.x += speed;
            playerNameText.position.x += speed;
        }
        if(moveLeft == true){
            player.position.x -= speed;
            playerNameText.x -= speed;
        }
    }
    ticker.add(loop);
    ticker.start();

    document.addEventListener('keydown', function(event){
        if(event.which == 39){
            moveRight = true;
            player.scale.x = 1;
        }
        if(event.which == 37){
            moveLeft = true;
            player.scale.x = -1;
        }
    });
    document.addEventListener('keyup', function(event){
        if(event.which == 39){
            moveRight = false;
        }
        if(event.which == 37){
            moveLeft = false;
        }
    });

    app.stage.addChild(player, playerNameText);
}