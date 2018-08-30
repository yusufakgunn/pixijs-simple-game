exports.screen = function(app, playerName = "No Name", playerName2){
    const Tile = require('../../components/Tile');
    const Player = require('../../components/Player');
    const ticker = new PIXI.ticker.Ticker();

    document.body.appendChild(app.view);

    Tile.set(app, 5);
    Player.create(app, ticker, playerName, 0);
    // Add player
    // Player.create(app, ticker, playerName2, 80)
}