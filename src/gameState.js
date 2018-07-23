import State from "./state"

class GameState extends State {
    create() {
        this.text = new PIXI.Text("This is game state")
        this.text.style.fill = "rgb(150,150,150)"
        this.text.position.set(100.0, 100.0)

        this.sprite = new PIXI.Sprite.fromImage("assets/images/ship.png")
        this.sprite.position.set(120.0, 300.0)

        this.container.addChild(this.text)
        this.container.addChild(this.sprite)

        this.vx = 1.0
    }

    update(dt) {
        this.sprite.position.x += this.vx * dt * 3.0;

        if (this.sprite.position.x > this.game.app.screen.width - 128.0) {

            this.vx = -1.0
        }

        if (this.sprite.position.x < 0.0) {
            this.vx = 1.0
        }
    }
}

let gameState = new GameState();

export default gameState;