import THREE from 'three'

export default class Checker {
    constructor(geometry, material) {
        this.sceneObject = new THREE.Mesh(geometry, material)
        this.sceneObject.rotation.x += Math.PI/2
        this.sceneObject.position.set(28, 4, 0)
    }
}