import factory from './scene/CheckerFactory'
import Scene from './scene/Scene'

export default class  Game {
    constructor() {
        this.scene = new Scene(document.getElementById('game'));
        let checker = factory.makeChecker('red', 2, 4);
        this.scene.add(checker.sceneObject);
    }

    run() {
        this.scene.render();
    };
}


