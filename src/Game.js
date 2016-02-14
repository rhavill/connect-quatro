import Scene from './scene/Scene'

export default class  Game {
    constructor() {
        this.scene = new Scene(document.getElementById('game'));

    }

    run() {
        this.scene.render();
    };
}


