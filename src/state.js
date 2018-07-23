import * as PIXI from 'pixi.js'


export default class State {

    setup() {
        this.container = new PIXI.Container();
        this.game = null;
    }    

    /**
     * Setup your state here
     */
    create() {

    }

    /**
     * Update your state here
     * @param {float} dt 
     */
    update(dt) {
        
    }

    /**
     * Called when new state is being set
     * @param {State} newState 
     */
    onChangeState(newState) {
        
    }

}