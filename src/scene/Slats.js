import THREE from 'three'

import SlatFactory from './SlatFactory'

export default class Slats {
    constructor(checkerRadius, checkerHeight) {
        this.sceneObject = new THREE.Group();
        let slatFactory = new SlatFactory(checkerHeight, 12*checkerRadius)
        for (let i = 0; i < 8; i++) {
            let slat = slatFactory.make()
            slat.sceneObject.rotation.y += Math.PI/2
            slat.sceneObject.position.x = i*checkerRadius*2
            slat.sceneObject.position.y = checkerRadius*8
            this.sceneObject.add(slat.sceneObject)
        }
    }
}