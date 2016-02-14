import Slats from './Slats'

export default class Board {
    constructor(checkerRadius, checkerHeight) {
        this.sceneObject = new THREE.Group();
        this.sceneObject.add(new Slats(checkerRadius, checkerHeight).sceneObject)
    }
}