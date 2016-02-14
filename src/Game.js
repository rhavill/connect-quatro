import factory from './CheckerFactory'
import Renderer from './Renderer'


export default class  Game {
    constructor() {
        this.renderer = new Renderer(document.getElementById('game'));
        let checker = factory.makeChecker('red', -30, 15);
        this.renderer.add(checker.getMesh());

    }

    run() {
        this.renderer.render();
    };
}


