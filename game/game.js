// Screens
const app = new PIXI.Application(750, 550, {backgroundColor : 0x1099bb});
const ticker = new PIXI.ticker.Ticker();

const GameScreen = require('./screens/GameScreen/index');

GameScreen.screen(app, "YusufAkgun");