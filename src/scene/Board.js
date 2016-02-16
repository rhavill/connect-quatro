import THREE from 'three'

import Slats from './Slats'
import Faces from './Faces'
import Legs from './Legs'

export default class Board {
    constructor(checkerRadius, checkerHeight) {
        this.sceneObject = new THREE.Group();
        this.sceneObject.add(new Slats(checkerRadius, checkerHeight).sceneObject)
        this.sceneObject.add(new Faces(checkerRadius, checkerHeight).sceneObject)
        this.sceneObject.add(new Legs(checkerRadius, checkerHeight).sceneObject)
        this.sceneObject.position.y += checkerRadius*2
    }
}