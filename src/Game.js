import factory from './CheckerFactory'
import Renderer from './Renderer'


export default class  Game {
    constructor() {
        this.renderer = new Renderer(document.body);
        let checker = factory.makeChecker();
        this.renderer.add(checker.getMesh());

    }

    run() {
        this.renderer.render();
    };
}


