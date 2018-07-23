import * as PIXI from 'pixi.js'

import GameMenu from "./menuState"
import GameGame from "./gameState"

class Game {

    constructor() {

        this.app = new PIXI.Application({
            width: 720,
            height: 480,
            antialias: true,
            transparent: false,
            resolution: 1
        })

        this.app.renderer.backgroundColor = 0x232323

        // remove any canvases if they exist, this is fix for parcel hot realoding module
        if (document.getElementById('game').firstChild) {
            document.getElementById('game').removeChild(document.getElementById('game').firstChild)
        }

        document.getElementById('game').appendChild(this.app.view)

        // loop
        this.app.ticker.add(this.update.bind(this))

        // states
        this.states = []
        this.active_state = null

        // setup game
        this.setup()
    }

    update(dt) {
        // update current state
        if (this.active_state != null) {
            this.active_state.update(dt);
        }
    }

    setup() {
        // add states
        this.addState('menu', GameMenu)
        this.addState('game', GameGame)

        // set state
        this.setState('menu')

        // set state after 3 seconds
        setInterval(() => {
            this.setState('game')
        }, 3000)
    }

    addState(name, state) {
        this.states[name] = state

        // create container in that state
        state.setup()

        // set game so state can access it
        state.game = this;

        // create state
        state.create()
    }

    setState(name) {
        // remove current container
        if (this.active_state != null) {
            this.app.stage.removeChild(this.active_state.container)
            this.active_state.onChangeState(this.states[name])
        }

        // set current container
        this.active_state = this.states[name]

        // now we can add our new container
        this.app.stage.addChild(this.active_state.container)
    }

}

let game = new Game();

export default game;