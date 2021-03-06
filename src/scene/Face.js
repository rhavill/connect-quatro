import THREE from 'three'

import FaceSquare from './FaceSquare'

export default class Face {
    constructor(material, checkerRadius, checkerHeight) {
        this.sceneObject = new THREE.Group()
        for (let row = 0; row < 6; row++) {
            for (let column = 0; column < 7; column++) {
                let x = column * checkerRadius * 2
                let y = row * checkerRadius * 2
                this.sceneObject.add(new FaceSquare(material, checkerRadius, x, y).sceneObject)
            }
        }
    }
}


