import THREE from 'three'

import Slats from './Slats'
import Faces from './Faces'

export default class Board {
    constructor(checkerRadius, checkerHeight) {
        this.sceneObject = new THREE.Group();
        this.sceneObject.add(new Slats(checkerRadius, checkerHeight).sceneObject)
        this.sceneObject.add(new Faces(checkerRadius, checkerHeight).sceneObject)
    }
}