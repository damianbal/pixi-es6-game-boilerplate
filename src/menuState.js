import State from "./state"

class MenuState extends State {
    create() {
        this.text = new PIXI.Text("This is menu state")
        this.text.style.fill = "rgb(150,150,150)"
        this.text.position.set(100.0, 100.0)

        this.container.addChild(this.text)
    }

    update(dt) {
        
    }
}

let menuState = new MenuState();

export default menuState;