import SlatFactory from './SlatFactory'

export default class Slats {
    constructor(width, height) {
        this.sceneObject = new THREE.Group();
        let slatFactory = new SlatFactory(width, height)
        for (let i = 0; i < 9; i++) {

        }
        let slat = slatFactory.make().sceneObject
        this.sceneObject.add(slat)
    }
}