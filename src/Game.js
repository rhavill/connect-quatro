import factory from './scene/CheckerFactory'
import Scene from './scene/Scene'


export default class  Game {
    constructor() {
        this.renderer = new Scene(document.getElementById('game'));
        let checker = factory.makeChecker('black', 2, 8);
        this.renderer.add(checker.getMesh());

    }

    run() {
        this.renderer.render();
    };
}


