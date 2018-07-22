import * as PIXI from 'pixi.js'

// Create PIXI application
let app = new PIXI.Application({
    width: 720, height: 480,
    antialias: true, 
    transparent: false,
    resolution: 1
});

// Change background color
app.renderer.backgroundColor = 0x232323

// Add canvas to our DOM, with little trick so parcel's hot reloading 
// works ok, without it canvas will be added below another canvas and so
// on while you save
let c = document.getElementById('game').firstChild;
if(c) {
    document.getElementById('game').removeChild(c);
}

document.getElementById('game').appendChild(app.view)

// Add sprite
let sprite = PIXI.Sprite.fromImage("./assets/images/ship.png");
sprite.position.x = 100.0;
sprite.position.y = 50.0;
app.stage.addChild(sprite);

// Update loop
app.ticker.add(dt => {
    // update here :)
});